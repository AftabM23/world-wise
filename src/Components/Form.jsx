/* eslint-disable no-unused-vars */
import { useCitiesData } from "../Contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useURLposition from "../hooks/useURLposition";
//modules
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//components
import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
import Message from "./Message";
import Loading from "./Loading";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
function Form() {
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");
  const [geoLocationError, setGeoLocationError] = useState("");
  const [date, setDate] = useState();

  const { addNewCity, isLoading } = useCitiesData();
  const [lat, lng] = useURLposition();
  const navigate = useNavigate();

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
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Loading />;
  if (geoLocationError) return <Message message={geoLocationError} />;

  return (
    <form className={styles.form}>
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
        <Button type="add" onClick={handleAdd}>
          Add
        </Button>

        <BackButton />
      </div>
    </form>
  );
}

export default Form;
