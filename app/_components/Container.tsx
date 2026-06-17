export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto max-w-360 w-full xl:px-27 xl:py-7 lg:px-20 lg:py-5 md:px-16 md:py-4 sm:px-12 sm:py-4 px-5 py-4">
      {children}
    </div>
  );
}
