import MobileMenuList from "./MobileMenuList";
import Link from "next/link";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";

export default function MobileMenuItems() {
  return (
    <>
      <nav className="flex flex-col gap-3">
        <MobileMenuList />
        <SupportLink className="mb-12 py-2 pr-2 text-[#606060]" />
      </nav>
      <Link href="#">
        <RegisterButton fullWidth />
      </Link>
    </>
  );
}
