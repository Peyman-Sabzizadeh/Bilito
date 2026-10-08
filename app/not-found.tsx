import Image from "next/image";
import Container from "./_components/Container";
import notFoundMobile from "@/_assets/not-found/404-mobile.svg";
import notFoundDesktop from "@/_assets/not-found/404-desktop.svg";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-12 pb-6 text-center">
      <Image
        src={notFoundMobile}
        alt="صفحه ای یافت نشد!"
        className="md:hidden"
        loading="eager"
      />
      <Image
        src={notFoundDesktop}
        alt="صفحه ای یافت نشد!"
        className="h-80 w-auto max-md:hidden"
        loading="eager"
      />
      <div className="space-y-6">
        <h2 className="text-gray-7 font-bold md:text-2xl">
          صفحه ای که میخواستی اینجا نیست!
        </h2>
        <p className="text-gray-6 text-sm">
          برای پیدا کردن مسیر درست میتونی سری به صفحه اول بزنی.
        </p>
      </div>
      <Link
        href="/"
        className="text-primary hover:text-shade-1 flex items-center gap-3 text-sm"
      >
        <span>برگشت به صفحه اصلی</span>
        <ChevronLeft className="size-5" strokeWidth={1.5} />
      </Link>
    </Container>
  );
}
