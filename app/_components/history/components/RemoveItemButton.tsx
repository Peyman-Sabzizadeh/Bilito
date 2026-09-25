import { Button } from "@heroui/react";
import { XSquare } from "lucide-react";

type RemoveItemButtonProps = {
  itemId: number;
  removeItem: (id: number) => void;
};

export default function RemoveItemButton({
  itemId,
  removeItem,
}: RemoveItemButtonProps) {
  return (
    <Button
      isIconOnly
      onPress={() => removeItem(itemId)}
      className="text-gray-6 size-auto bg-transparent hover:bg-transparent"
    >
      <XSquare />
    </Button>
  );
}
