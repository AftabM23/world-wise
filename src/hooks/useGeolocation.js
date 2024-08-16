import { useState } from "react";

export default function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  // const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const [liveGeoLocation, setLiveGeoLocation] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLiveGeoLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, liveGeoLocation, error, getPosition };
}
