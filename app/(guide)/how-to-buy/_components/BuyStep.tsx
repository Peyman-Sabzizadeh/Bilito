import { BuyStepProps } from "../_data/buySteps";

export default function BuyStep({ title, description, Icon }: BuyStepProps) {
  return (
    <li key={title} className="relative mb-6 last:mb-0">
      <span
        aria-hidden
        className="bg-primary absolute -inset-s-6 top-1.5 size-3 rounded-full md:-inset-s-15.25 md:size-3.5"
      />
      <h3 className="mb-2 flex items-center gap-2">
        <Icon className="text-gray-6 size-4.5 shrink-0 md:size-5" />
        <span className="text-gray-8 font-bold md:text-lg">{title}</span>
      </h3>
      <p className="text-gray-6 text-sm leading-6">{description}</p>
    </li>
  );
}
