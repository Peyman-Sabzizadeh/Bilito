import Link from "next/link";
import SupportLink from "../SupportLink";
import RegisterButton from "../RegisterButton";
import { menuItems } from "@/_data/menuItems";
import MobileMenuItem from "./MobileMenuItem";

export default function MobileMenuList() {
  return (
    <>
      <nav>
        <ul className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <MobileMenuItem item={item} />
            </li>
          ))}
          <li>
            <SupportLink className="text-gray-7 mb-12 py-2 pr-2" />
          </li>
        </ul>
      </nav>
      <Link href="#">
        <RegisterButton fullWidth />
      </Link>
    </>
  );
}
