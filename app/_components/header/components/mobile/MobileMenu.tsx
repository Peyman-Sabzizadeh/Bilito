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
          <DrawerDialog className="h-full rounded-none px-5 shadow-none">
            <DrawerBody className="text-gray-8">
              <MobileMenuItems />
            </DrawerBody>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  );
}
