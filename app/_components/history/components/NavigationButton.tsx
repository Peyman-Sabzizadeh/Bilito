import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonProps = {
  type: "next" | "prev";
  setElement: (element: HTMLButtonElement | null) => void;
};

export default function NavigationButton({
  type,
  setElement,
}: NavigationButtonProps) {
  const Icon = type === "next" ? ChevronLeft : ChevronRight;
  return (
    <Button
      ref={setElement}
      isIconOnly
      className="text-gray-7 border-gray-3 size-10.5 rounded-xl border bg-transparent p-0 max-md:hidden"
    >
      <Icon className="size-6" strokeWidth={1.5} />
    </Button>
  );
}
