import { Description, Label, ListBox } from "@heroui/react";

type ClassListBoxItemProps = {
  label: string;
  description: string;
};

export default function ClassListBoxItem({
  label,
  description,
}: ClassListBoxItemProps) {
  return (
    <ListBox.Item
      id={description.toLowerCase().replace(" ", "-")}
      textValue={description}
    >
      <div className="flex flex-col">
        <Label className="text-gray-8">{label}</Label>
        <Description className="whitespace-nowrap">{description}</Description>
      </div>
      <ListBox.ItemIndicator />
    </ListBox.Item>
  );
}
