import { useEffect, useState } from "react";
import { createClient } from "@/_utils/supabase/client";

export type City = {
  id: number;
  name: string;
  country: string;
};

export default function useCities() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("cities")
        .select("id, name, country")
        .order("name");
      if (error) {
        console.error("Error fetching cities:", error);
        return;
      }
      setCities(data ?? []);
    };
    fetchCities();
  }, []);

  return { cities };
}
