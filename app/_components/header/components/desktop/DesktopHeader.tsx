import Logo from "@/_components/Logo";
import DesktopMenuItems from "./DesktopMenuItems";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";
import { Plane } from "lucide-react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
} from "@heroui/react";

export default function DesktopHeader() {
  return (
    <div className="flex justify-between items-center text-[#606060]">
      <div className="flex justify-between items-center gap-8">
        <Logo />
        <DesktopMenuItems />
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
