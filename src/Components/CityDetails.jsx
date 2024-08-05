/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CityDetails.module.css";
function CityDetails() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.cityDetails}>
      <span>
        <h1>City id : {id}</h1>
      </span>
      <span>
        <p>lat : {lat}</p>
      </span>
      <span>
        <p>lng : {lng}</p>
      </span>
    </div>
  );
}

export default CityDetails;
