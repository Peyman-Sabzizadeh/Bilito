import DesktopHeader from "./components/DesktopHeader";

export default function Header() {
  return (
    <>
      <div className="md:hidden">Mobile header component</div>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </>
  );
}
