import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        className="md:hidden"
        src="/mobileHeroBanner.png"
        alt="Mobile Hero Banner"
        width={768}
        height={140}
        preload
      />
      <Image
        className="hidden md:block"
        src="/desktopHeroBanner.png"
        alt="Desktop Hero Banner"
        width={3000}
        height={330}
        preload
      />
    </>
  );
}
