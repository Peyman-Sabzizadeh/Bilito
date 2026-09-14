import { Button } from "@heroui/react";
import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <Button
      fullWidth
      className="bg-primary hover:bg-shade-2 flex-1 rounded-lg px-4 py-2 max-md:mt-6 md:h-12"
    >
      <Search strokeWidth={1.5} />
      جستجو
    </Button>
  );
}
