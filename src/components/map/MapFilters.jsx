import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, School, Building2, Users, MapPin, Loader2, X } from "lucide-react";

const typeFilters = [
  { value: "all", label: "All", icon: MapPin },
  { value: "school", label: "Schools", icon: School },
  { value: "business", label: "Businesses", icon: Building2 },
  { value: "community_center", label: "Community", icon: Users },
];

export default function MapFilters({ activeType, setActiveType, onGeocode, userLocation, onClearLocation }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query + ", PA")}&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        onGeocode({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon), label: data[0].display_name });
      } else {
        setError("Location not found. Try a ZIP code or street address.");
      }
    } catch {
      setError("Could not search. Please try again.");
    }
    setLoading(false);
  };

  const handleClear = () => {
    setQuery("");
    setError("");
    onClearLocation();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <form onSubmit={handleSearch} className="relative flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Enter your address, ZIP, or neighborhood..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setError(""); }}
              className="pl-10 rounded-xl h-11 border-border pr-4"
            />
          </div>
          <Button type="submit" disabled={loading} className="rounded-xl h-11 bg-primary text-primary-foreground px-4 shrink-0">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Find Nearest"}
          </Button>
          {userLocation && (
            <Button type="button" variant="outline" onClick={handleClear} className="rounded-xl h-11 px-3 shrink-0">
              <X className="w-4 h-4" />
            </Button>
          )}
        </form>
        {error && <p className="text-xs text-destructive mt-1 pl-1">{error}</p>}
        {userLocation && (
          <p className="text-xs text-primary mt-1 pl-1">Showing locations sorted by distance from your location.</p>
        )}
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {typeFilters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeType === filter.value ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveType(filter.value)}
            className={`rounded-lg gap-1.5 text-xs ${
              activeType === filter.value
                ? "bg-primary text-primary-foreground"
                : "border-border hover:bg-muted"
            }`}
          >
            <filter.icon className="w-3.5 h-3.5" />
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}