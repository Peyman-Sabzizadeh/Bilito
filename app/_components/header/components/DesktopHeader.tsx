import Logo from "@/_components/Logo";

export default function DesktopHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <Logo />
      </div>
      <div>Left side</div>
    </div>
  );
}
