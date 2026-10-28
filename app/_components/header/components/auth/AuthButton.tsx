"use client";

import { useAuthModal } from "@/_store/authModalStore";
import { Button, Modal } from "@heroui/react";
import { User2 } from "lucide-react";
import LoginForm from "./LoginForm";
import useIsMobile from "@/_hooks/useIsMobile";
import SignupForm from "./SignupForm";

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
  const { isOpen, authMode, onOpenChange } = useAuthModal();
  const isMobile = useIsMobile();
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
        <Modal.Container size={isMobile ? "full" : "md"}>
          <Modal.Dialog className="md:max-h-[90dvh]">
            {authMode === "login" ? <LoginForm /> : <SignupForm />}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
