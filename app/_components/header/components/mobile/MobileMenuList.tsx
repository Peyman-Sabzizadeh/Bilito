import { mobileMenuItems } from "@/_data/mobileMenuItems";
import SupportLink from "../SupportLink";
import AuthButton from "../auth/AuthButton";
import MobileMenuItem from "./MobileMenuItem";
import { useAuth } from "@/_providers/AuthProvider";

type MobileMenuListProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenuList({ setIsMenuOpen }: MobileMenuListProps) {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <nav className="mb-12">
        <ul className="flex flex-col gap-3">
          {mobileMenuItems.map((item) => (
            <li
              key={item.label}
              className={
                item.label === "حساب کاربری" && !isAuthenticated ? "hidden" : ""
              }
            >
              <MobileMenuItem item={item} />
            </li>
          ))}
          <li>
            <SupportLink className="text-gray-7 mb-12 py-2 pr-2" />
          </li>
        </ul>
      </nav>
      <AuthButton fullWidth clicked={() => setIsMenuOpen(false)} />
    </>
  );
}
