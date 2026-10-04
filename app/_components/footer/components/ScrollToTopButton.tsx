"use client";

import { scrollToTop } from "@/_utils/scrollToTop";
import { Button } from "@heroui/react";
import { ChevronUpCircle } from "lucide-react";

export default function ScrollToTopButton() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button
        isIconOnly
        onPress={() => scrollToTop()}
        className="bg-tint-1 max-md:rounded-lg md:bg-transparent"
      >
        <ChevronUpCircle className="text-primary md:text-gray-8 size-7" />
      </Button>
      <span className="text-gray-8 text-sm font-medium max-md:hidden">
        بازگشت به بالا
      </span>
    </div>
  );
}
