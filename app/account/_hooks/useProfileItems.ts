import { useAuth } from "@/_providers/AuthProvider";

type ProfileItem = {
  label: string;
  value: string | undefined;
};

export function useProfileItems(): ProfileItem[] {
  const { profile } = useAuth();

  return [
    { label: "نام و نام خانوادگی", value: profile?.name },
    {
      label: "جنسیت",
      value:
        profile?.gender === "male"
          ? "مرد"
          : profile?.gender === "female"
            ? "زن"
            : "—",
    },
    { label: "کد ملی", value: profile?.national_id },
    { label: "شماره تلفن", value: profile?.phone },
  ];
}
