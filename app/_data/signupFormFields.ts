type TextFieldConfig = {
  kind: "text";
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "password";
  inputMode?: "numeric";
  maxLength?: number;
  inputClassName?: string;
  validate: (value: string) => true | string;
};

type SelectFieldConfig = {
  kind: "select";
  name: string;
  label: string;
  options: { id: string; label: string }[];
};

export type SignupFieldConfig = TextFieldConfig | SelectFieldConfig;

export const signupFormFields: SignupFieldConfig[] = [
  {
    kind: "text",
    name: "fullName",
    label: "نام و نام خانوادگی",
    validate: (v) =>
      v.trim().length > 0 || "نام و نام خانوادگی خود را وارد کنید.",
  },
  {
    kind: "text",
    name: "nationalId",
    label: "کد ملی",
    inputMode: "numeric",
    maxLength: 10,
    validate: (v) => /^\d{10}$/.test(v) || "کد ملی باید 10 رقم باشد.",
  },
  {
    kind: "text",
    name: "phone",
    label: "شماره تلفن",
    type: "tel",
    maxLength: 11,
    inputClassName: "text-right",
    validate: (v) => /^09\d{9}$/.test(v) || "یک شماره تلفن معتبر وارد کنید.",
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
    name: "email",
    label: "ایمیل",
    type: "email",
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "یک ایمیل معتبر وارد کنید.",
  },
  {
    kind: "text",
    name: "password",
    label: "رمز عبور",
    type: "password",
    validate: (v) => v.length >= 8 || "رمز عبور باید حداقل ۸ کاراکتر باشد.",
  },
];
