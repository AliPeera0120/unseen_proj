// Fix for Leaflet's default marker icons under Vite:
// the icon URLs baked into leaflet's CSS/JS don't survive bundling,
// which makes markers render as broken images. Import the images
// explicitly so Vite bundles them, and register them with Leaflet.
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
