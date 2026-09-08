import { Description, Label, NumberField } from "@heroui/react";

type PassengerNumberFieldProps = {
  maxValue: number;
  label: string;
  description: string;
};

export default function PassengerNumberField({
  maxValue,
  label,
  description,
}: PassengerNumberFieldProps) {
  return (
    <NumberField minValue={0} defaultValue={0} maxValue={maxValue}>
      <Label>{label}</Label>
      <NumberField.Group>
        <NumberField.IncrementButton />
        <NumberField.Input />
        <NumberField.DecrementButton />
      </NumberField.Group>
      <Description>{description}</Description>
    </NumberField>
  );
}
