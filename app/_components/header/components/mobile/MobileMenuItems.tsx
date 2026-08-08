import MobileMenuList from "./MobileMenuList";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Phone } from "lucide-react";

export default function MobileMenuItems() {
  return (
    <>
      <nav className="flex flex-col gap-3">
        <MobileMenuList/>
        <Link href="#" className="text-[#606060] pr-2 py-2 mb-12">
          021-4045 پشتیبانی
          <Phone className="inline mr-2" />
        </Link>
      </nav>
      <Link href="#">
        <Button fullWidth className="bg-[#1D91CC] rounded-lg">
          ورود\ ثبت نام
        </Button>
      </Link>
    </>
  );
}
