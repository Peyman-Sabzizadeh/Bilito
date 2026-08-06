"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerDialog,
  DrawerHeader,
  DrawerHeading,
} from "@heroui/react";
import {
  Menu,
  House,
  SearchIcon,
  Bell,
  MessageCircle,
  User,
  Settings,
  X,
} from "lucide-react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const navItems: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
  }[] = [
    { icon: House, label: "Home" },
    { icon: SearchIcon, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: MessageCircle, label: "Messages" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <Drawer isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <Button variant="ghost" onPress={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
      <DrawerBackdrop variant="transparent">
        <DrawerContent placement="bottom">
          <DrawerDialog className="max-h-none! h-[calc(100vh-72px)]! rounded-none shadow-none">
            <DrawerHeader>
              <DrawerHeading>Navigation</DrawerHeading>
            </DrawerHeader>
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
              </nav>
            </DrawerBody>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  );
}
