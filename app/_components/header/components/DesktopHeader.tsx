import Logo from "@/_components/Logo";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
  DropdownTrigger,
} from "@heroui/react";
import { ChevronDown, PhoneCall, UserSearch } from "lucide-react";
import Link from "next/link";

export default function DesktopHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between items-center gap-8 text-[#606060]">
        <Logo />
        <Link href="/" className="mr-10">
          صفحه اصلی
        </Link>
        <Link href="/">بیمه مسافرتی</Link>
        <Link href="/">سفرهای من</Link>
        <Dropdown>
          <DropdownTrigger>
            <span className="flex items-center gap-2">
              سایر موارد
              <ChevronDown stroke="#606060" strokeWidth={1} />
            </span>
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
      <div>Left side</div>
    </div>
  );
}
