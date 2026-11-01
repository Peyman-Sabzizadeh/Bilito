import { SignupFieldConfig } from "@/_data/signupFormFields";
import { FieldError, Input, ListBox, Select, TextField } from "@heroui/react";

const inputClassName =
  "placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring-1";

type SignupFieldProps = {
  field: SignupFieldConfig;
};

export default function SignupFields({ field }: SignupFieldProps) {
  return field.kind === "select" ? (
    <Select
      name={field.name}
      aria-label={field.label}
      placeholder={field.label}
      isRequired
    >
      <Select.Trigger className={inputClassName}>
        <Select.Value className="text-gray-8 text-sm" />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {field.options.map((opt) => (
            <ListBox.Item key={opt.id} id={opt.id} textValue={opt.label}>
              {opt.label}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  ) : (
    <TextField
      name={field.name}
      type={field.type ?? "text"}
      inputMode={field.inputMode}
      aria-label={field.label}
      isRequired
      maxLength={field.maxLength}
      validate={field.validate}
    >
      <Input
        placeholder={field.label}
        className={`${inputClassName} ${field.inputClassName ?? ""}`}
      />
      <FieldError />
    </TextField>
  );
}
