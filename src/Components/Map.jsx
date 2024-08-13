/* eslint-disable no-unused-vars */
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

import { useCitiesData } from "../Contexts/CitiesContext";

function Map() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();
  const [mapPoints, setMapPoints] = useState([25, 25]);

  useEffect(
    function () {
      setMapPoints([lat, lng]);
      console.log(mapPoints);
    },
    [lat, lng]
  );
  const { citiesData } = useCitiesData();
  return (
    <div className={styles.map}>
      {/* <h1>{lat}</h1>
      <h1>{lng}</h1>

      <button onClick={() => setSearchParams({ lat: 23, lng: 25 })}>
        Set Position
      </button> */}
      <div className={styles.mapContainer}>
        <MapContainer
          center={mapPoints}
          zoom={mapPoints ? "5" : "2"}
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
              {/* <Marker
            position={
              mapPoints[0] && mapPoints[1]
                ? [mapPoints[0], mapPoints[1]]
                : [25, 25]
            }
          > */}
              <Popup>{city.cityName}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className={styles.jumpToForm} onClick={() => navigate("form")}></div>
    </div>
  );
}

export default Map;
