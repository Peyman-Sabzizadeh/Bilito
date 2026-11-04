import { useAuthModal } from "@/_store/authModalStore";
import { User2 } from "lucide-react";

export default function MobileAuthTrigger() {
  const { onOpenChange } = useAuthModal();
  return (
    <div
      onClick={() => onOpenChange(true)}
      className="bg-tint-1 rounded-lg p-1 text-sm"
    >
      <User2 strokeWidth={1.5} size={20} />
    </div>
  );
}
