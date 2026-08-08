import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <Image
        src="logo.svg"
        alt="Logo"
        width={148}
        height={48}
        priority
        style={{ width: "130px", height: "auto" }}
      />
    </Link>
  );
}
