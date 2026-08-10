import Link from "next/link";
import { Phone } from "lucide-react";

type SupportLinkProps = {
  className?: string;
  size?: number;
};

export default function SupportLink({ className, size }: SupportLinkProps) {
  return (
    <Link href="#" className={className}>
      021-4045 پشتیبانی
      <Phone className="mr-2 inline" size={size} />
    </Link>
  );
}
