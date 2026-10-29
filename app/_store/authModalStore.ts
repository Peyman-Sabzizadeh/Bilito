import { create } from "zustand";

type State = {
  isOpen: boolean;
  authMode: "login" | "signup";
};

type Action = {
  onOpenChange: (open: boolean) => void;
  toggleAuthMode: () => void;
};

export const useAuthModal = create<State & Action>((set) => ({
  isOpen: false,
  authMode: "login",
  onOpenChange: (open) =>
    set(open ? { isOpen: true } : { isOpen: false, authMode: "login" }),
  toggleAuthMode: () =>
    set((state) => ({
      authMode: state.authMode === "login" ? "signup" : "login",
    })),
}));
