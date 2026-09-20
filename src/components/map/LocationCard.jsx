import React from "react";
import { Building2, MapPin, School, Users } from "lucide-react";

const typeIcons = { school: School, business: Building2, community_center: Users };

export default function LocationCard({ location, isSelected, onClick, distance }) {
  const Icon = typeIcons[location.type] || MapPin;
  return (
    <button type="button" onClick={onClick} className={`w-full border-b border-foreground/10 px-5 py-5 text-left transition-colors hover:bg-secondary/60 ${isSelected ? "bg-secondary" : "bg-white"}`}>
      <div className="flex items-start gap-4">
        <Icon className="mt-1 h-4 w-4 shrink-0 text-primary" />
        <div className="min-w-0 flex-1">
          <h2 className="font-semibold leading-5">{location.name}</h2>
          <p className="mt-2 text-sm leading-5 text-muted-foreground">{location.address}<br />{location.city}, {location.state} {location.zip}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-foreground/45">
            <span>{location.type.replace("_", " ")}</span>
            {location.boxCount > 1 && <span>{location.boxCount} boxes</span>}
            {distance != null && <span>{distance < 0.1 ? "< 0.1" : distance.toFixed(1)} mi away</span>}
          </div>
        </div>
      </div>
    </button>
  );
}
