import Link from "next/link";
import { ChevronDown, PhoneCall, UserSearch } from "lucide-react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
  DropdownTrigger,
} from "@heroui/react";

export default function DesktopMenuItems() {
  return (
    <div className="flex items-center gap-3 xl:gap-8">
      <Link href="/">صفحه اصلی</Link>
      <Link href="/">بیمه مسافرتی</Link>
      <Link href="/">سفرهای من</Link>
      <Dropdown>
        <DropdownTrigger>
          سایر موارد
          <ChevronDown strokeWidth={1} className="mr-0.5 inline xl:mr-2" />
        </DropdownTrigger>
        <DropdownPopover className="min-w-0 rounded-xl p-1">
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
  );
}
