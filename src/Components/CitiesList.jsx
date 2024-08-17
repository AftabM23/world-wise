/* eslint-disable react/prop-types */
import { useCitiesData } from "../Contexts/CitiesContext";
import CitiesRendering from "./CitiesRendering";
import Loading from "./Loading";
import styles from "./CitiesList.module.css";

function CitiesList() {
  const { isLoading, citiesData } = useCitiesData();
  return (
    <div className={styles.citiesList}>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          citiesData.map((city) => (
            <div key={city.id}>
              <CitiesRendering city={city} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CitiesList;
