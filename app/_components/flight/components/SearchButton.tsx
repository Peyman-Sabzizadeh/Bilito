import { Button, Spinner } from "@heroui/react";
import { Search } from "lucide-react";

export default function SearchButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button
      type="submit"
      fullWidth
      isPending={isLoading}
      className="bg-primary hover:bg-shade-2 flex-1 rounded-lg px-4 py-2 max-md:mt-6 md:h-12"
    >
      {isLoading ? (
        <Spinner size="sm" color="current" />
      ) : (
        <>
          <Search strokeWidth={1.5} />
          جستجو
        </>
      )}
    </Button>
  );
}
