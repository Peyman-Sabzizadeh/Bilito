import Logo from "@/_components/Logo";
import DesktopMenuItems from "./DesktopMenuItems";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";

export default function DesktopHeader() {
  return (
    <div className="text-gray-7 flex items-center justify-between">
      <div className="flex items-center gap-4 text-sm whitespace-nowrap lg:gap-18 lg:text-base lg:whitespace-normal">
        <Logo />
        <DesktopMenuItems />
      </div>
      <div className="flex items-center gap-3 xl:gap-6">
        <SupportLink
          size={18}
          className="text-sm whitespace-nowrap lg:text-base"
        />
        <RegisterButton
          withIcon
          className="hover:bg-shade-2 px-1 text-xs xl:px-4 xl:py-2 xl:text-sm"
        />
      </div>
    </div>
  );
}
