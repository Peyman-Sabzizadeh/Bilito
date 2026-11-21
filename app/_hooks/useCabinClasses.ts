import { useEffect, useState } from "react";
import { createClient } from "@/_utils/supabase/client";
import { type CabinClass } from "@/_types/cabinClass";

export default function useCabinClasses() {
  const [cabinClasses, setCabinClasses] = useState<CabinClass[]>([]);

  useEffect(() => {
    const getCabinClasses = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("cabin_classes")
        .select("value, class, class_en")
        .order("value");
      if (error) {
        console.error("Error fetching cabin classes:", error);
        return;
      }
      setCabinClasses(data ?? []);
    };
    getCabinClasses();
  }, []);

  return { cabinClasses };
}
