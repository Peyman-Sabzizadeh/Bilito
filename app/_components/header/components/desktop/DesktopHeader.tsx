import Logo from "@/_components/Logo";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
  DropdownTrigger,
} from "@heroui/react";
import {
  ChevronDown,
  Phone,
  PhoneCall,
  Plane,
  User2,
  UserSearch,
} from "lucide-react";
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
        <Link href="/">
          021-4045 پشتیبانی
          <Phone size={18} className="inline mr-2" />
        </Link>
        <Dropdown>
          <Button className="bg-[#1D91CC] rounded-lg py-2 font-light hover:bg-[#11577A]">
            <User2 size={30} />
            ورود/ ثبت نام
          </Button>
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
