type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-27 ${className}`}
    >
      {children}
    </div>
  );
}
