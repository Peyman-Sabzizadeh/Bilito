"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/_utils/supabase/client";

type Profile = {
  name: string;
  phone: string;
  gender: "male" | "female";
  national_id: string;
};

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
  initialUser: User | null;
  initialProfile: Profile | null;
};

export default function AuthProvider({
  children,
  initialUser,
  initialProfile,
}: AuthProviderProps) {
  const [supabase] = useState(() => createClient());

  const [user, setUser] = useState<User | null>(initialUser);
  const [profile, setProfile] = useState<Profile | null>(initialProfile);
  const [isLoading, setIsLoading] = useState(false);

  const currentUserIdRef = useRef<string | null>(initialUser?.id ?? null);

  const refreshProfile = useCallback(async () => {
    const userId = user?.id;

    if (!userId) {
      setProfile(null);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("name, phone, gender, national_id")
      .eq("id", userId)
      .maybeSingle();

    if (currentUserIdRef.current !== userId) return;

    if (error) {
      console.error("Failed to fetch user profile:", error.message);
      return;
    }

    setProfile(data);
  }, [supabase, user?.id]);

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async (userId: string) => {
      const { data, error } = await supabase
        .from("profiles")
        .select("name, phone, gender, national_id")
        .eq("id", userId)
        .maybeSingle();

      if (!isMounted || currentUserIdRef.current !== userId) return;

      if (error) {
        console.error("Failed to fetch user profile:", error.message);
        return;
      }

      setProfile(data);
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const nextUser = session?.user ?? null;

      if (event === "SIGNED_OUT") {
        currentUserIdRef.current = null;
        setUser(null);
        setProfile(null);
        setIsLoading(false);
        return;
      }

      if (event === "INITIAL_SESSION") {
        currentUserIdRef.current = nextUser?.id ?? null;
        setUser(nextUser);

        if (!nextUser) {
          setProfile(null);
        } else if (nextUser.id !== initialUser?.id) {
          setProfile(null);
          setTimeout(() => {
            void loadProfile(nextUser.id);
          }, 0);
        }

        setIsLoading(false);
        return;
      }

      if (event === "SIGNED_IN" || event === "USER_UPDATED") {
        currentUserIdRef.current = nextUser?.id ?? null;
        setUser(nextUser);

        if (!nextUser) {
          setProfile(null);
        } else {
          setProfile(null);

          setTimeout(() => {
            void loadProfile(nextUser.id);
          }, 0);
        }
      }

      if (event === "TOKEN_REFRESHED" && nextUser) {
        setUser(nextUser);
      }

      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, initialUser?.id]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isAuthenticated: Boolean(user),
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
