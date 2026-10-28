"use client";

import { useAuthModal } from "@/_store/authModalStore";
import { Button, Modal } from "@heroui/react";
import { User2 } from "lucide-react";
import LoginForm from "./LoginForm";

type AuthButtonProps = {
  className?: string;
  fullWidth?: boolean;
  withIcon?: boolean;
};

export default function AuthButton({
  className,
  fullWidth,
  withIcon,
}: AuthButtonProps) {
  const { isOpen, onOpenChange } = useAuthModal();
  return (
    <Modal>
      <Button
        onPress={() => onOpenChange(true)}
        className={`bg-primary rounded-lg font-light ${className}`}
        fullWidth={fullWidth}
      >
        {withIcon ? <User2 size={30} /> : null}
        ورود/ ثبت نام
      </Button>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
        <LoginForm />
      </Modal.Backdrop>
    </Modal>
  );
}
