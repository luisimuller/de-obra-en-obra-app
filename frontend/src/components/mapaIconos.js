import L from "leaflet";
import iconoUrl from "leaflet/dist/images/marker-icon.png";
import iconoSombraUrl from "leaflet/dist/images/marker-shadow.png";
import iconoRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: iconoUrl,
  iconRetinaUrl: iconoRetinaUrl,
  shadowUrl: iconoSombraUrl,
});