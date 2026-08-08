import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenuButton({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuButtonProps) {
  return (
    <Button
      isIconOnly
      variant="ghost"
      onPress={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X /> : <Menu />}
    </Button>
  );
}
