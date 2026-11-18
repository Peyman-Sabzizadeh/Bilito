import Image from "next/image";
import noTickets from "../_assets/no-tickets.svg";
import Link from "next/link";

export default function NoTickets() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
      <Image
        src={noTickets}
        alt="تیکتی وجود ندارد!"
        className="h-40 w-auto md:h-50"
        loading="eager"
      />
      <span className="border-gray-3 text-gray-6 w-full rounded-lg border py-4 md:w-50">
        تیکتی وجود ندارد!
      </span>
      <Link
        href="/"
        className="bg-primary hover:bg-shade-1 w-full rounded-lg py-2 font-light text-white max-md:text-sm md:w-80"
      >
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}
