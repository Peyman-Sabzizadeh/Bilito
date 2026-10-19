import { contactInfo } from "../_data/contactInfo";
import ContactInfoItem from "./ContactInfoItem";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

export default function ContactUsPanel() {
  return (
    <div className="space-y-6">
      <p className="text-gray-8 pt-2 max-md:text-sm">
        ما در مجموعه بیلیتو همواره به نظرات، پیشنهادات و سوالات شما عزیزان ارزش
        قائلیم و مشتاقانه منتظر کمک به شما هستیم.
      </p>
      <div className="border-gray-2 flex gap-4 rounded-lg border px-2 py-4 max-md:flex-col md:gap-8 md:p-4">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-gray-7 text-xl font-bold whitespace-nowrap">
            اطلاعات تماس با دفتر
          </h2>
          {contactInfo.map((item) => (
            <ContactInfoItem key={item.title} {...item} />
          ))}
        </div>
        <ContactMap lat={35.699737760113045} lng={51.33804303418621} />
      </div>
      <p className="text-gray-8 max-md:text-sm">
        درصورتی که سوالی دارید یا نیاز به راهنمایی دارید، لطفا از فرم زیر برای
        تماس با ما استفاده کنید. تیم پشتیبانی ما در اسرع وقت پاسخگوی شما خواهد
        بود.
      </p>
      <ContactForm />
    </div>
  );
}
