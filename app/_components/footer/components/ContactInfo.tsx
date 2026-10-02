import Logo from "@/_components/Logo";

export default function ContactInfo() {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="text-gray-7 max-w-[60%] space-y-3 text-sm">
        <p>
          آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس
          غربی.
        </p>
        <p>تلفن پشتیبانی: 4045-021</p>
      </div>
      <Logo />
    </div>
  );
}
