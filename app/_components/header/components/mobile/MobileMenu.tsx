"use client";

import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuItems from "./MobileMenuItems";
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerDialog,
} from "@heroui/react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Drawer isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <DrawerBackdrop variant="transparent">
        <DrawerContent placement="bottom">
          <DrawerDialog className="h-full rounded-none shadow-none px-5">
            <DrawerBody className="text-[#404040]">
              <MobileMenuItems />
            </DrawerBody>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  );
}
