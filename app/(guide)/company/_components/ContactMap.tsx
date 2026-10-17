"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

type ContactMapProps = {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
};

export default function ContactMap({
  lat,
  lng,
  zoom = 15,
  className = "",
}: ContactMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: LeafletMap | null = null;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
      }).setView([lat, lng], zoom);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41],
      });

      L.marker([lat, lng], { icon }).addTo(map);
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [lat, lng, zoom]);

  return (
    <div
      ref={containerRef}
      className={`border-gray-4 relative z-0 h-45 w-full overflow-hidden rounded-lg border-2 md:h-auto md:min-h-45 md:flex-1 ${className}`}
    />
  );
}
