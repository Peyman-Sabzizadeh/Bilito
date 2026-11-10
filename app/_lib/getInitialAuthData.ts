import { cookies } from "next/headers";
import { createClient } from "@/_utils/supabase/server";
import { Profile } from "@/_types/profile";

export default async function getInitialAuthData() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Failed to get authenticated user:", userError.message);
  }

  let profile: Profile | null = null;

  if (user) {
    const { data, error } = await supabase
      .from("profiles")
      .select("name, phone, gender, national_id")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Failed to get user profile:", error.message);
    } else {
      profile = data;
    }
  }

  return { user, profile };
}
