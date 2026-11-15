export type Profile = {
  name: string;
  phone: string;
  gender: "male" | "female";
  national_id: string;
  wallet_balance_toman: number;
};

export type EditableProfile = Pick<
  Profile,
  "name" | "phone" | "gender" | "national_id"
>;
