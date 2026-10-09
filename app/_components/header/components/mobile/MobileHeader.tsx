import MobileMenu from "./MobileMenu";
import Logo from "@/_components/Logo";
import MobileAccountLink from "./MobileAccountLink";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between md:hidden">
      <MobileMenu />
      <Logo className="h-auto w-28" />
      <MobileAccountLink />
    </header>
  );
}
