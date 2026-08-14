import { Button } from "@heroui/react";
import { User2 } from "lucide-react";

type RegisterButtonProps = {
  className?: string;
  fullWidth?: boolean;
  withIcon?: boolean;
};

export default function RegisterButton({
  className,
  fullWidth,
  withIcon,
}: RegisterButtonProps) {
  return (
    <Button
      className={`bg-primary rounded-lg font-light ${className}`}
      fullWidth={fullWidth}
    >
      {withIcon ? <User2 size={30} /> : null}
      ورود/ ثبت نام
    </Button>
  );
}
