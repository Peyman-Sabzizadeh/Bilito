import Logo from "@/_components/Logo";

export default function ContactInfo() {
  return (
    <div className="flex gap-6 max-md:items-center max-md:justify-between md:flex-col-reverse md:gap-8">
      <div className="text-gray-7 flex flex-col gap-3 max-md:max-w-[60%] max-md:text-sm md:flex-col-reverse md:gap-6">
        <p>
          آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس
          غربی.
        </p>
        <p>تلفن پشتیبانی: 4045-021</p>
      </div>
      <Logo className="max-w-fit" />
    </div>
  );
}
