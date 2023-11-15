import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

import "leaflet/dist/leaflet.css";
import "./Contact.css";
export { Contact };

function Contact() {
  return (
    <div className="">
      <Navbar />
      <MapContainer center={[40.505, -100.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.505, -100.09]}>
          <Popup>I am a pop-up!</Popup>
        </Marker>
      </MapContainer>
      <Footer />
    </div>
  );
}
