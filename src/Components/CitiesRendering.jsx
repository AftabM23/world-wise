/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CitiesRendering.module.css";
import { useCitiesData } from "../Contexts/CitiesContext";
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// function countryCodeToFlagEmoji(countryCode) {
//   if (countryCode.length !== 2) {
//     throw new Error("Invalid flag emoji length. It must be two characters.");
//   }

//   return countryCode
//     .split("")
//     .map((char) => String.fromCodePoint(char.codePointAt(0) - 127397))
//     .join("");
// }

function CitiesRendering({ city }) {
  const { cityName, emoji, date, id } = city;
  const { lat, lng } = city.position;
  const { currentCity, deleteCity } = useCitiesData();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li style={{ listStyleType: "none" }}>
      <Link
        to={`${id}?lat=${lat}&lng=${lng}`}
        className={`${styles.citiesItem} ${
          currentCity.id === id ? styles.citiesItemActive : ""
        }`}
      >
        <span>{emoji}</span>

        <h4 className={styles.citiesItemCity}>{cityName}</h4>
        <time className={styles.citiesItemDate}>{formatDate(date)}</time>
        <button
          className={styles.citiesItemBtn}
          onClick={(e) => handleDelete(e)}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CitiesRendering;
