import { Button } from "@heroui/react";
import { ArrowRightLeft } from "lucide-react";

export default function SwitchLocationButton() {
  return (
    <Button
      isIconOnly
      className="text-gray-9 size-4 bg-transparent hover:bg-transparent max-md:hidden"
    >
      <ArrowRightLeft />
    </Button>
  );
}
