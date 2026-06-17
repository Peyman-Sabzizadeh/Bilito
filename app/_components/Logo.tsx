import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="logo.svg"
      alt="Logo"
      width={148}
      height={48}
      priority
      style={{ width: "130px", height: "auto" }}
    />
  );
}
