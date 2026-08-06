"use client";

import { useState, type ComponentType, type SVGProps } from "react";
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
  Menu,
  X,
  Phone,
} from "lucide-react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
  }[] = [
    { icon: House, label: "صفحه اصلی" },
    { icon: ReceiptText, label: "بیمه مسافرتی" },
    { icon: Plane, label: "سفرهای من" },
    { icon: PhoneCall, label: "تماس با ما" },
    { icon: UserSearch, label: "درباره ما" },
  ];
  return (
    <Drawer isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <Button variant="ghost" onPress={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
      <DrawerBackdrop variant="transparent">
        <DrawerContent placement="bottom">
          <DrawerDialog className="h-full rounded-none shadow-none">
            <DrawerBody>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </button>
                ))}
                <Button variant="ghost" className="text-foreground">
                  021-4045 پشتیبانی
                  <Phone />
                </Button>
              </nav>
              <Button fullWidth>ورود\ ثبت نام</Button>
            </DrawerBody>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  );
}
