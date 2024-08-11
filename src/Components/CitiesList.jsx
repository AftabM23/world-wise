/* eslint-disable react/prop-types */
import { useCitiesData } from "../Contexts/CitiesContext";
import CitiesRendering from "./CitiesRendering";
import Loading from "./Loading";

function CitiesList() {
  const { isLoading, citiesData } = useCitiesData();
  return (
    <div>
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
