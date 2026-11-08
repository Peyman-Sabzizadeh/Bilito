"use client";

import { useAuth } from "@/_providers/AuthProvider";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace("/");
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center py-30">
        <Spinner size="xl" />
      </div>
    );
  }

  return <>{children}</>;
}
