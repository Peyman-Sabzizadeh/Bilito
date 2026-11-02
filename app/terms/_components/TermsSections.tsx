import { termsIntro, termsSections } from "../_data/termsSections";

export default function TermsSections() {
  return (
    <>
      <div className="space-y-3">
        <h1 className="text-gray-8 font-bold md:text-2xl">قوانین و مقررات</h1>
        <p className="text-gray-7 text-sm leading-7 md:text-base md:leading-8">
          {termsIntro}
        </p>
      </div>
      {termsSections.map(({ title, items }, index) => (
        <section key={title} className="space-y-3">
          <h2 className="text-gray-8 font-bold md:text-lg">
            {index + 1}. {title}
          </h2>
          <ul className="text-gray-7 list-disc space-y-2 ps-5 text-sm leading-7 md:text-base md:leading-8">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
