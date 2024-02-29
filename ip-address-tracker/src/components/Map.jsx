import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  return (
    <div className="background">
      <div className="bg-img" />
      <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} zoomControl>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
}

export default Map;
