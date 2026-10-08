import { useFlightSearch } from "@/_store/flightSearchStore";
import { Description, Label, NumberField, Tooltip } from "@heroui/react";

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
  const adultCount = useFlightSearch((state) => state.passengers.adult);
  return (
    <NumberField
      minValue={0}
      maxValue={maxValue}
      value={value}
      onChange={onChange}
    >
      <Label>{label}</Label>
      <Tooltip delay={0} isDisabled={label === "بزرگسال" || adultCount > 0}>
        <Tooltip.Trigger>
          <NumberField.Group
            isDisabled={label !== "بزرگسال" && adultCount === 0}
          >
            <NumberField.IncrementButton />
            <NumberField.Input />
            <NumberField.DecrementButton />
          </NumberField.Group>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <Tooltip.Arrow />
          <p>حداقل باید 1 بزرگسال انتخاب شود.</p>
        </Tooltip.Content>
      </Tooltip>
      <Description>{description}</Description>
    </NumberField>
  );
}
