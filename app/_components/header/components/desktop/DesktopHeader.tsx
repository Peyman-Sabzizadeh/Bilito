import Logo from "@/_components/Logo";
import DesktopMenuItems from "./DesktopMenuItems";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";

export default function DesktopHeader() {
  return (
    <div className="flex justify-between items-center text-[#606060]">
      <div className="flex justify-between items-center gap-8">
        <Logo />
        <DesktopMenuItems />
      </div>
      <div className="flex items-center gap-6">
        <SupportLink size={18} />
        <RegisterButton withIcon className="py-2 hover:bg-[#11577A]" />
      </div>
    </div>
  );
}
