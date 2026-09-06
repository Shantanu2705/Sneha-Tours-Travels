"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordinates for M8X9+C6X, Bagdogra Bihar More
const position: [number, number] = [26.6994, 88.3143];

const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div class="flex flex-col items-center" style="transform: translate(-50%, -100%); width: 250px; cursor: pointer;">
        <div class="bg-[#00695c] text-white px-5 py-3 rounded-2xl font-bold shadow-2xl flex items-center gap-2 mb-1 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          Sneha Tours & Travels
        </div>
        <div class="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#00695c] drop-shadow-xl animate-bounce" style="animation-delay: 0.05s;"></div>
        <div class="w-8 h-3 bg-black/20 rounded-full blur-sm mt-1 animate-pulse"></div>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0] // Handled by CSS transform
  });
};

export default function CustomMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-500 font-medium">Loading Map...</div>;

  return (
    <MapContainer 
      center={position} 
      zoom={16} 
      scrollWheelZoom={false}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={createCustomIcon()} />
    </MapContainer>
  );
}
