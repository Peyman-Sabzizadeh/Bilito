"use client";

import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerDialog,
} from "@heroui/react";
import {
  House,
  ReceiptText,
  Plane,
  PhoneCall,
  UserSearch,
  Phone,
} from "lucide-react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { link: "#", icon: House, label: "صفحه اصلی" },
    { link: "#", icon: ReceiptText, label: "بیمه مسافرتی" },
    { link: "#", icon: Plane, label: "سفرهای من" },
    { link: "#", icon: PhoneCall, label: "تماس با ما" },
    { link: "#", icon: UserSearch, label: "درباره ما" },
  ];
  return (
    <Drawer isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <DrawerBackdrop variant="transparent">
        <DrawerContent placement="bottom">
          <DrawerDialog className="h-full rounded-none shadow-none px-5">
            <DrawerBody className="text-[#404040]">
              <nav className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <Link
                    href={item.link}
                    key={item.label}
                    className="flex items-center gap-2 p-2 text-sm"
                  >
                    <item.icon size={20} />
                    {item.label}
                  </Link>
                ))}
                <Link href="#" className="text-[#606060] pr-2 py-2 mb-12">
                  021-4045 پشتیبانی
                  <Phone className="inline mr-2" />
                </Link>
              </nav>
              <Link href="#">
                <Button fullWidth className="bg-[#1D91CC] rounded-lg">
                  ورود\ ثبت نام
                </Button>
              </Link>
            </DrawerBody>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  );
}
