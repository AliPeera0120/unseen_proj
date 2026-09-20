import React, { useMemo, useState } from "react";
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { locations } from "@/data/siteData";
import "@/lib/leaflet-icons";
import LocationCard from "../components/map/LocationCard";
import MapFilters from "../components/map/MapFilters";

function getDistance(lat1, lng1, lat2, lng2) {
  const radius = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const value = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function FlyToLocation({ lat, lng }) {
  const map = useMap();
  React.useEffect(() => { if (lat && lng) map.flyTo([lat, lng], 15, { duration: 1 }); }, [lat, lng, map]);
  return null;
}

export default function DonationMap() {
  const [activeType, setActiveType] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const filtered = useMemo(() => {
    let results = locations.filter((location) => activeType === "all" || location.type === activeType);
    if (userLocation) {
      results = results.map((location) => ({ ...location, distance: getDistance(userLocation.lat, userLocation.lng, location.latitude, location.longitude) })).sort((a, b) => a.distance - b.distance);
    }
    return results;
  }, [activeType, userLocation]);

  const selected = filtered.find((location) => location.id === selectedId);

  return (
    <div className="min-h-screen pb-16 pt-[76px]">
      <section className="site-container py-12 lg:py-16">
        <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div><p className="eyebrow">Collection locations</p><h1 className="page-title mt-5">Find your nearest box.</h1></div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">Search by address or browse the directory. International locations remain visible when you zoom out.</p>
        </div>
      </section>

      <section className="site-container">
        <div className="border-y border-foreground/15 py-5"><MapFilters activeType={activeType} setActiveType={setActiveType} onGeocode={setUserLocation} userLocation={userLocation} onClearLocation={() => setUserLocation(null)} /></div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[380px_1fr]">
          <aside className="order-2 h-[540px] overflow-y-auto border border-foreground/15 bg-white lg:order-1 lg:h-[680px]" aria-label="Collection location directory">
            <p className="sticky top-0 z-10 border-b border-foreground/15 bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">{filtered.length} location{filtered.length === 1 ? "" : "s"}</p>
            {filtered.map((location) => <LocationCard key={location.id} location={location} isSelected={selectedId === location.id} onClick={() => setSelectedId(location.id)} distance={location.distance} />)}
          </aside>

          <div className="order-1 h-[470px] border border-foreground/15 bg-white p-2 lg:order-2 lg:h-[680px]">
            <MapContainer center={[40.185, -75.522]} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {userLocation && !selected && <FlyToLocation lat={userLocation.lat} lng={userLocation.lng} />}
              {selected && <FlyToLocation lat={selected.latitude} lng={selected.longitude} />}
              {userLocation && <Circle center={[userLocation.lat, userLocation.lng]} radius={500} pathOptions={{ color: "#469fc8", fillColor: "#469fc8", fillOpacity: 0.15 }} />}
              {filtered.map((location) => (
                <Marker key={location.id} position={[location.latitude, location.longitude]} eventHandlers={{ click: () => setSelectedId(location.id) }}>
                  <Popup><strong>{location.name}</strong><br />{location.address}<br />{location.city}, {location.state} {location.zip}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
