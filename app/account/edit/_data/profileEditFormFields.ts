import type { Profile } from "@/_types/profile";

// @/_data/profileEditFormFields.ts
type TextFieldConfig = {
  kind: "text";
  name: keyof Profile;
  label: string;
  type?: "text" | "tel" | "email";
  inputMode?: "numeric";
  maxLength?: number;
  inputClassName?: string;
  validate: (value: string) => true | string;
};

type SelectFieldConfig = {
  kind: "select";
  name: keyof Profile;
  label: string;
  options: { id: string; label: string }[];
};

export type ProfileEditFieldConfig = TextFieldConfig | SelectFieldConfig;

export const profileEditFormFields: ProfileEditFieldConfig[] = [
  {
    kind: "text",
    name: "name",
    label: "نام و نام خانوادگی",
    validate: (v) =>
      v.trim().length > 0 || "نام و نام خانوادگی خود را وارد کنید.",
  },
  {
    kind: "select",
    name: "gender",
    label: "جنسیت",
    options: [
      { id: "female", label: "زن" },
      { id: "male", label: "مرد" },
    ],
  },
  {
    kind: "text",
    name: "national_id",
    label: "کد ملی",
    inputMode: "numeric",
    maxLength: 10,
    validate: (v) => /^\d{10}$/.test(v) || "کد ملی باید 10 رقم باشد.",
  },
  {
    kind: "text",
    name: "phone",
    label: "شماره تماس",
    type: "tel",
    maxLength: 11,
    inputClassName: "text-right",
    validate: (v) => /^09\d{9}$/.test(v) || "یک شماره تماس معتبر وارد کنید.",
  },
];
