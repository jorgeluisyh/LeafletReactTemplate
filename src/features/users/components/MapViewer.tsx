import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Asegúrate de que esta línea esté presente

interface MapViewerProps {
  latitude: number;
  longitude: number;
  text: string;
}

export const MapViewer = ({ latitude, longitude, text }: MapViewerProps) => {
  return (
    <MapContainer
      style={{ height: "400px", width: "100wh" }}
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Casa de <strong>{text} </strong>
          <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
