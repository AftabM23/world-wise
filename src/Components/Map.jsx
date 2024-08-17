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
import useGeolocation from "../hooks/useGeolocation";

import { useCitiesData } from "../Contexts/CitiesContext";
import Button from "./Button";
import Loading from "./Loading";
import useURLposition from "../hooks/useURLposition";
function Map() {
  // eslint-disable-next-line no-unused-vars
  const [mapLat, mapLng] = useURLposition();

  const [mapPoints, setMapPoints] = useState([25, 25]);
  const [mapZoom, setMapZoom] = useState(4);
  const { citiesData } = useCitiesData();

  const {
    isLoading: geolocationIsLoading,
    getPosition,
    liveGeoLocation,
  } = useGeolocation();
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPoints([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );
  useEffect(
    function () {
      if (liveGeoLocation)
        setMapPoints([liveGeoLocation.lat, liveGeoLocation.lng]);
      setMapZoom(8);
    },
    [liveGeoLocation]
  );
  // function handleGetPositionClick() {
  //   getPosition();
  //   setMapPoints([liveGeoLocation.lat, liveGeoLocation.lng]);
  // }
  return (
    <div className={styles.mapContainer}>
      {!liveGeoLocation && (
        <Button type="getPosition" onClick={getPosition}>
          {geolocationIsLoading ? <Loading /> : "Use current Location"}
        </Button>
      )}

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
      </MapContainer>
      {/* <div className={styles.jumpToForm} onClick={() => navigate("form")}></div> */}
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
