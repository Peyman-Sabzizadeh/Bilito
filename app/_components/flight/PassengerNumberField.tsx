import { Description, Label, NumberField } from "@heroui/react";

export default function PassengerNumberField() {
  return (
    <NumberField minValue={0} defaultValue={0}>
      <Label>بزرگسال</Label>
      <NumberField.Group>
        <NumberField.IncrementButton />
        <NumberField.Input />
        <NumberField.DecrementButton />
      </NumberField.Group>
      <Description>بزرگتر از 12 سال</Description>
    </NumberField>
  );
}
