import MobileMenuList from "./MobileMenuList";
import Link from "next/link";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";

export default function MobileMenuItems() {
  return (
    <>
      <nav className="flex flex-col gap-3">
        <MobileMenuList />
        <SupportLink className="text-[#606060] pr-2 py-2 mb-12" />
      </nav>
      <Link href="#">
        <RegisterButton fullWidth />
      </Link>
    </>
  );
}
