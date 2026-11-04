"use client";

import MobileMenu from "./MobileMenu";
import Logo from "@/_components/Logo";
import { useAuth } from "@/_providers/AuthProvider";
import UserMenu from "../auth/UserMenu";
import MobileAuthTrigger from "./MobileAuthTrigger";

export default function MobileHeader() {
  const { isAuthenticated } = useAuth();
  return (
    <header className="flex items-center justify-between md:hidden">
      <MobileMenu />
      <Logo className="h-auto w-28" />
      {isAuthenticated ? <UserMenu /> : <MobileAuthTrigger />}
    </header>
  );
}
