export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-360 px-5 py-4 sm:px-12 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-5 xl:px-27 xl:py-7">
      {children}
    </div>
  );
}
