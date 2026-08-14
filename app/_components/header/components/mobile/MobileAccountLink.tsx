import Link from "next/link";
import { User2 } from "lucide-react";

export default function MobileAccountLink() {
  return (
    <Link href="/" className="bg-tint-1 rounded-lg p-1 text-sm">
      <User2 strokeWidth={1.5} size={20} />
    </Link>
  );
}
