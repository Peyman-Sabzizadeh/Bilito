import MobileMenu from "./MobileMenu";
import Logo from "@/_components/Logo";
import MobileAccountLink from "./MobileAccountLink";

export default function MobileHeader() {
  return (
    <div className="flex items-center justify-between">
      <MobileMenu />
      <Logo className="h-auto w-28" />
      <MobileAccountLink />
    </div>
  );
}
