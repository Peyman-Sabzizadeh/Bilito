import { Button } from "@heroui/react";
import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <Button
      fullWidth
      className="bg-primary hover:bg-shade-2 rounded-lg px-4 py-2 max-md:mt-6 md:h-12 md:w-40"
    >
      <Search strokeWidth={1.5} />
      جستجو
    </Button>
  );
}
