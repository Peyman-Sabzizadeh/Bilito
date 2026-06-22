import Logo from "@/_components/Logo";

export default function MobileHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>menu</div>
      <div className="w-28 h-auto">
        <Logo />
      </div>
      <div>Account</div>
    </div>
  );
}
