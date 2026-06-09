import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilito",
  description:
    "Bilito is a ticketing platform that allows users to easily get tickets for airways events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
