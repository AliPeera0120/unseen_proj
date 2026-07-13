import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, School, Building2, Users } from "lucide-react";

const typeIcons = {
  school: School,
  business: Building2,
  community_center: Users,
};

const statusConfig = {
  active: { label: "Active", className: "bg-primary/10 text-primary border-primary/20" },
  full: { label: "Full", className: "bg-accent/10 text-accent border-accent/20" },
  needs_pickup: { label: "Needs Pickup", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

export default function LocationCard({ location, isSelected, onClick, distance }) {
  const Icon = typeIcons[location.type] || MapPin;
  const status = statusConfig[location.status] || statusConfig.active;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
        isSelected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
          <Icon className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-sm text-foreground truncate">{location.name}</h3>
            {location.featured && (
              <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-0 px-1.5 py-0 shrink-0">
                Featured
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground truncate">{location.address}</p>
          <p className="text-xs text-muted-foreground">{location.city}, {location.state} {location.zip}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className={`text-[10px] border ${status.className}`}>
              {status.label}
            </Badge>
            {distance != null && (
              <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                <MapPin className="w-2.5 h-2.5" />
                {distance < 0.1 ? "< 0.1" : distance.toFixed(1)} mi away
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}