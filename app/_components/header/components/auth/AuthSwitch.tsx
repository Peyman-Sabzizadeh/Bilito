"use client";

import { useAuthModal } from "@/_store/authModalStore";
import { Button } from "@heroui/react";

export default function AuthSwitch() {
  const { authMode, toggleAuthMode } = useAuthModal();
  return (
    <p className="text-gray-8 text-center text-xs">
      {authMode === "login" ? "حساب کاربری ندارید؟" : "قبلاً ثبت نام کرده‌اید؟"}{" "}
      <Button
        type="button"
        onClick={toggleAuthMode}
        className="text-primary cursor-pointer bg-transparent p-0 text-xs font-medium"
      >
        {authMode === "login" ? "ثبت نام" : "ورود"}
      </Button>
    </p>
  );
}
