import { Description, Label, NumberField } from "@heroui/react";

type PassengerNumberFieldProps = {
  maxValue: number;
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
};

export default function PassengerNumberField({
  maxValue,
  label,
  description,
  value,
  onChange,
}: PassengerNumberFieldProps) {
  return (
    <NumberField
      minValue={0}
      maxValue={maxValue}
      value={value}
      onChange={onChange}
    >
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
