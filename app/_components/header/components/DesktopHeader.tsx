import Logo from "@/_components/Logo";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
  DropdownTrigger,
} from "@heroui/react";
import { ChevronDown, Phone, PhoneCall, UserSearch } from "lucide-react";
import Link from "next/link";

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
          <DropdownPopover className="min-w-0 p-1 rounded-xl ">
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
      <div>
        <Link href="/">
          021-4045 پشتیبانی
          <Phone size={18} className="inline mr-2" />
        </Link>
      </div>
    </div>
  );
}
