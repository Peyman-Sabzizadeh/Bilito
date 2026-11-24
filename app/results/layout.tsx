import Container from "@/_components/Container";
import ResultsBanner from "./_components/ResultsBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResultsBanner />
      <Container>{children}</Container>
    </>
  );
}
