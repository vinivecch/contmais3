import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon being broken in builds
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// Custom Gold Icon matching brand-gold (#ca8a04)
const customIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #ca8a04; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);"></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const OFFICE_COORDS: [number, number] = [-23.5614, -46.6558]; // Avenida Paulista, 1000

export default function MapComponent() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 z-0">
      <MapContainer 
        center={OFFICE_COORDS} 
        zoom={17} 
        scrollWheelZoom={false} 
        dragging={true}
        touchZoom={true}
        doubleClickZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={OFFICE_COORDS} icon={customIcon}>
          <Popup>
            <div className="p-1">
              <strong className="block text-brand-blue">ContMais Contabilidade</strong>
              <span className="text-xs text-slate-600">Av. Paulista, 1000, Ed. Corporate</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
