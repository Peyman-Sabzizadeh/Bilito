import MobileMenuList from "./MobileMenuList";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Phone } from "lucide-react";
import SupportLink from "../SupportLink";

export default function MobileMenuItems() {
  return (
    <>
      <nav className="flex flex-col gap-3">
        <MobileMenuList />
        <SupportLink className="text-[#606060] pr-2 py-2 mb-12" />
      </nav>
      <Link href="#">
        <Button fullWidth className="bg-[#1D91CC] rounded-lg">
          ورود\ ثبت نام
        </Button>
      </Link>
    </>
  );
}
