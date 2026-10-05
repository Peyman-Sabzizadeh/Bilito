import { AppleIcon, GooglePlayIcon } from "@/_components/icons";
import Link from "next/link";

type StoreLinkProps = {
  store: "Play Store" | "Apple Store";
};

export default function StoreLink({ store }: StoreLinkProps) {
  const Icon = store === "Play Store" ? GooglePlayIcon : AppleIcon;
  const href =
    store === "Play Store"
      ? "https://play.google.com"
      : "https://apps.apple.com";
  return (
    <Link
      href={href}
      className="bg-shade-2 hover:bg-shade-3 flex items-center justify-center gap-4 rounded-lg px-7 py-3 transition-colors"
      dir="ltr"
    >
      <Icon className="size-4 md:size-6" />
      <span className="font-medium text-white md:text-lg">{store}</span>
    </Link>
  );
}
