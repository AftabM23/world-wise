/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CitiesRendering.module.css";
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function CitiesRendering({ city }) {
  const { cityName, emoji, date, id } = city;
  const { lat, lng } = city.position;

  return (
    <li style={{ listStyleType: "none" }}>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.citiesItem}>
        <span>{emoji}</span>
        <h4 className={styles.citiesItemCity}>{cityName}</h4>
        <time className={styles.citiesItemDate}>{formatDate(date)}</time>
        <button className={styles.citiesItemBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CitiesRendering;
