/* eslint-disable no-unused-vars */
import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
import useURLposition from "../hooks/useURLposition";
import Message from "./Message";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useCitiesData } from "../Contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
function Form() {
  const [lat, lng] = useURLposition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");
  const [geoLocationError, setGeoLocationError] = useState("");
  const [date, setDate] = useState();
  const randomId = Math.floor(10000000 + Math.random() * 90000000);
  const { addNewCity } = useCitiesData();
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
          setEmoji(data.countryCode);
          setCountry(data.countryName);
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
  function handleAdd() {
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };

    addNewCity(newCity);
  }
  return (
    <div className={styles.form}>
      {isLoadingGeocoding ? (
        <Loading />
      ) : geoLocationError ? (
        <Message message={geoLocationError} />
      ) : (
        <form>
          <label>City name</label>
          <input type="text" value={`${cityName} ${emoji}`}></input>

          <label htmlFor="date">When did you go?</label>

          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            value={date}
            format="dd / mm / yyyy"
          />
          <label>Notes about your trip</label>
          <input
            type="textField"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></input>
          <div className={styles.btns}>
            <Link to="/app/cities">
              <Button type="add" onClick={handleAdd}>
                Add
              </Button>
            </Link>
            <BackButton />
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
