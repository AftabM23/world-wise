/* eslint-disable no-unused-vars */
import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
import useURLposition from "../hooks/useURLposition";
import Message from "./Message";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
function Form() {
  const [lat, lng] = useURLposition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [geoLocationError, setGeoLocationError] = useState("");
  function getCurrentDateTimeString() {
    const now = new Date();

    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${sec} (${timeZone})`;
  }
  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeoLocationError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (data.countryCode === "")
            throw new Error(
              "You clicked on invalid location, pls click somewhere else"
            );
          console.log(data);
          setCityName(data.city || data.locality);
          setCountryName(data.countryCode);
        } catch (err) {
          setGeoLocationError(err.message);
          console.log(geoLocationError);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (geoLocationError) <Message message={geoLocationError} />;
  return (
    <div className={styles.form}>
      {isLoadingGeocoding ? (
        <Loading />
      ) : geoLocationError ? (
        <Message message={geoLocationError} />
      ) : (
        <form>
          <label>City name</label>
          <input type="text" value={`${cityName} ${countryName}`}></input>

          <label>When did you go?</label>
          <input type="text" value={getCurrentDateTimeString()}></input>
          <label>Notes about your trip</label>
          <input type="textField"></input>
          <div className={styles.btns}>
            <Button type="add">Add</Button>
            <BackButton />
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
