import Link from "next/link";
import { User2 } from "lucide-react";

export default function MobileAccountLink() {
  return (
    <Link href="/" className="p-1 bg-[#E8F4FA] rounded-lg text-sm">
      <User2 strokeWidth={1.5} size={20} />
    </Link>
  );
}
