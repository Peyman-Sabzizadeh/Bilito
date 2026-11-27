import { create } from "zustand";
import { createClient } from "@/_utils/supabase/client";
import type { CabinClass } from "@/_types/cabinClass";

type State = {
  cabinClasses: CabinClass[];
  isLoading: boolean;
  isFetched: boolean;
};

type Action = {
  fetchCabinClasses: () => Promise<void>;
};

export const useCabinClasses = create<State & Action>((set, get) => ({
  cabinClasses: [],
  isLoading: false,
  isFetched: false,

  fetchCabinClasses: async () => {
    if (get().isFetched || get().isLoading) return;
    set({ isLoading: true });
    const supabase = createClient();
    const { data, error } = await supabase
      .from("cabin_classes")
      .select("value, class, class_en")
      .order("value");

    if (error) {
      console.error("Error fetching cabin classes:", error);
      set({ isLoading: false });
      return;
    }
    set({
      cabinClasses: data ?? [],
      isLoading: false,
      isFetched: true,
    });
  },
}));
