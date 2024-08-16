/* eslint-disable no-unused-vars */
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";

import { useCitiesData } from "../Contexts/CitiesContext";
import Button from "./Button";

function Map() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  const navigate = useNavigate();
  const [mapPoints, setMapPoints] = useState([25, 25]);
  const [mapZoom, setMapZoom] = useState(6);
  const { citiesData } = useCitiesData();
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPoints([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}>
        <MapContainer
          center={mapPoints}
          zoom={mapZoom}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {citiesData.map((city) => (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>{city.cityName}</Popup>
            </Marker>
          ))}
          <ChangeCenter position={mapPoints} setMapZoom={setMapZoom} />
          <DetectClick />
          <Button type="getPosition">Get position</Button>
        </MapContainer>
      </div>

      <div className={styles.jumpToForm} onClick={() => navigate("form")}></div>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function ChangeCenter({ position, setMapZoom }) {
  const map = useMap();
  map.setView(position);
  setMapZoom(8);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng} `);
    },
  });
}

export default Map;
