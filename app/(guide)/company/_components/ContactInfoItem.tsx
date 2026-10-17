import { type ContactInfo } from "../_data/contactInfo";

export default function ContactInfoItem({ title, info, Icon }: ContactInfo) {
  return (
    <div className="flex items-center gap-2 max-md:text-sm">
      <Icon className="text-gray-5 size-5 shrink-0" />
      <span className="text-gray-9">{title}:</span>
      <span className="text-gray-7">{info}</span>
    </div>
  );
}
