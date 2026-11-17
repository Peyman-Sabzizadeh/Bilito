type ContactSubject = {
  id: string;
  title: string;
};

export const contactSubjects = [
  { id: "support", title: "پشتیبانی و راهنمایی" },
  { id: "booking", title: "خرید و رزرو بلیت" },
  { id: "cancellation", title: "لغو و استرداد وجه" },
  { id: "modification", title: "تغییرات بلیت" },
  { id: "payment", title: "مشکلات پرداخت" },
  { id: "cooperation", title: "همکاری و پیشنهادها" },
  { id: "other", title: "سایر موارد" },
] as const satisfies readonly ContactSubject[];

export type ContactSubjectId = (typeof contactSubjects)[number]["id"];
