import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { locations } from "@/data/siteData";
import "@/lib/leaflet-icons";

export default function MapPreview() {
  const localLocations = locations.filter((location) => location.longitude < 0);

  return (
    <section className="section-space bg-secondary/60">
      <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Collection network</p>
          <h2 className="section-title mt-5">A donation point within reach.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            Our boxes live in schools, libraries, places of worship, businesses, and community spaces. Search by address or browse every active location.
          </p>
          <Link to="/map" className="brand-button mt-8"><MapPin className="h-4 w-4" /> Explore locations <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="h-[430px] border border-foreground/15 bg-white p-2 sm:h-[520px]">
          <MapContainer center={[40.185, -75.522]} zoom={10} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {localLocations.map((location) => (
              <Marker key={location.id} position={[location.latitude, location.longitude]}>
                <Popup><strong>{location.name}</strong><br />{location.address}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
