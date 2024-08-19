/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useCitiesData } from "../Contexts/CitiesContext";
import { useEffect } from "react";
import styles from "./CityDetails.module.css";
import BackButton from "./BackButton";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function CityDetails() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCitiesData();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, emoji, date, notes } = currentCity;
  return (
    <div className={styles.cityDetails}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className={styles.cityContent}>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <p> City NAME </p>
              <span
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <p>{emoji}</p> <h3>{cityName}</h3>
              </span>
            </span>
            <span>
              <p>When did you visit {cityName}</p> <h3>{formatDate(date)}</h3>
            </span>
            <span>
              <p> Learn More on Wiki</p>
              <a
                href={`https://en.wikipedia.org/wiki/${cityName}`}
                target="_blank"
              >
                Checkout on Wiki
              </a>
            </span>
            {notes === "" ? "" : <p>Remark: {notes}</p>}
          </div>
          <BackButton />
        </div>
      )}
    </div>
  );
}

export default CityDetails;
