import Logo from "@/_components/Logo";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
  DropdownTrigger,
} from "@heroui/react";
import { ChevronDown, PhoneCall, Plane, UserSearch } from "lucide-react";
import Link from "next/link";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";

export default function DesktopHeader() {
  return (
    <div className="flex justify-between items-center text-[#606060]">
      <div className="flex justify-between items-center gap-8">
        <Logo />
        <Link href="/" className="mr-10">
          صفحه اصلی
        </Link>
        <Link href="/">بیمه مسافرتی</Link>
        <Link href="/">سفرهای من</Link>
        <Dropdown>
          <DropdownTrigger>
            سایر موارد
            <ChevronDown strokeWidth={1} className="inline mr-2" />
          </DropdownTrigger>
          <DropdownPopover className="min-w-0 p-1 rounded-xl">
            <DropdownMenu className="*:rounded-lg *:text-[#606060]">
              <DropdownItem href="/">
                <PhoneCall size={20} />
                تماس با ما
              </DropdownItem>
              <DropdownItem href="/">
                <UserSearch size={20} />
                درباره ما
              </DropdownItem>
            </DropdownMenu>
          </DropdownPopover>
        </Dropdown>
      </div>
      <div className="flex items-center gap-6">
        <SupportLink size={18} />
        <Dropdown>
          <RegisterButton withIcon className="py-2 hover:bg-[#11577A]" />
          <DropdownPopover className="min-w-0 p-1 rounded-xl">
            <DropdownMenu className="*:rounded-lg *:text-[#606060]">
              <DropdownItem href="/">
                <Plane size={20} />
                گزینه 1
              </DropdownItem>
              <DropdownItem href="/">
                <Plane size={20} />
                گزینه 2
              </DropdownItem>
            </DropdownMenu>
          </DropdownPopover>
        </Dropdown>
      </div>
    </div>
  );
}
