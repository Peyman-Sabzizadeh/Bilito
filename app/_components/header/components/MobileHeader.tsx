import MobileMenu from "./MobileMenu";
import Logo from "@/_components/Logo";
import MobileAccountLink from "./MobileAccountLink";

export default function MobileHeader() {
  return (
    <div className="flex justify-between items-center">
      <MobileMenu />
      <Logo className="w-28 h-auto" />
      <MobileAccountLink />
    </div>
  );
}
