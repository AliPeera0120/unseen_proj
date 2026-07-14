import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locations from "@/data/donationLocations.json";
import "@/lib/leaflet-icons";

export default function MapPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Donation Map
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Find a collection box near you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Locate the nearest donation box and drop off your unused eyeglasses today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-lg"
          style={{ height: "400px" }}
        >
          <MapContainer
            center={[40.185, -75.522]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {locations.map((loc) => (
              <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
                <Popup>
                  <strong>{loc.name}</strong><br />
                  {loc.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        <div className="text-center mt-8">
          <Link to="/map">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 gap-2">
              <MapPin className="w-4 h-4" />
              View Full Map
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}