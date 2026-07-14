import React, { useState, useMemo } from "react";
import locations from "@/data/donationLocations.json";
import "@/lib/leaflet-icons";
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from "react-leaflet";
import { motion } from "framer-motion";
import MapFilters from "../components/map/MapFilters";
import LocationCard from "../components/map/LocationCard";

function getDistance(lat1, lng1, lat2, lng2) {
  const R = 3958.8; // miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function FlyToLocation({ lat, lng }) {
  const map = useMap();
  React.useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 15, { duration: 1 });
    }
  }, [lat, lng, map]);
  return null;
}

const statusConfig = {
  active: { label: "Active", className: "bg-primary/10 text-primary" },
  full: { label: "Full", className: "bg-accent/10 text-accent" },
  needs_pickup: { label: "Needs Pickup", className: "bg-destructive/10 text-destructive" },
};

export default function DonationMap() {
  const [activeType, setActiveType] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [userLocation, setUserLocation] = useState(null); // { lat, lng, label }

  const filtered = useMemo(() => {
    let results = locations.filter((loc) => {
      return activeType === "all" || loc.type === activeType;
    });

    if (userLocation) {
      results = results
        .map((loc) => ({
          ...loc,
          distance: getDistance(userLocation.lat, userLocation.lng, loc.latitude, loc.longitude),
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    return results;
  }, [locations, activeType, userLocation]);

  const selected = filtered.find((l) => l.id === selectedId);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Donation Map
          </h1>
          <p className="mt-2 text-muted-foreground">
            Find a collection box near you and donate your unused eyeglasses.
          </p>
        </motion.div>

        <div className="mb-6">
          <MapFilters
            activeType={activeType}
            setActiveType={setActiveType}
            onGeocode={setUserLocation}
            userLocation={userLocation}
            onClearLocation={() => setUserLocation(null)}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-card rounded-2xl border border-border p-3 h-[500px] lg:h-[600px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <p className="text-muted-foreground text-sm">No locations found.</p>
                  <p className="text-muted-foreground text-xs mt-1">Try a different search or filter.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground px-1 py-1">
                    {filtered.length} location{filtered.length !== 1 ? "s" : ""} found
                  </p>
                  {filtered.map((loc) => (
                    <LocationCard
                      key={loc.id}
                      location={loc}
                      isSelected={selectedId === loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      distance={loc.distance}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[400px] lg:h-[600px]">
              <MapContainer
                center={[40.185, -75.522]}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {userLocation && !selected && (
                  <FlyToLocation lat={userLocation.lat} lng={userLocation.lng} />
                )}
                {selected && (
                  <FlyToLocation lat={selected.latitude} lng={selected.longitude} />
                )}
                {userLocation && (
                  <Circle
                    center={[userLocation.lat, userLocation.lng]}
                    radius={500}
                    pathOptions={{ color: "hsl(205,70%,50%)", fillColor: "hsl(205,70%,50%)", fillOpacity: 0.15 }}
                  />
                )}
                {filtered.map((loc) => (
                  <Marker
                    key={loc.id}
                    position={[loc.latitude, loc.longitude]}
                    eventHandlers={{ click: () => setSelectedId(loc.id) }}
                  >
                    <Popup>
                      <div className="text-sm">
                        <strong>{loc.name}</strong>
                        <br />
                        {loc.address}
                        <br />
                        <span className="text-xs capitalize">{loc.type?.replace("_", " ")}</span>
                        {" · "}
                        <span className="text-xs capitalize">{loc.status?.replace("_", " ")}</span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}