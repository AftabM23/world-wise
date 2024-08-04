/* eslint-disable react/prop-types */
import CitiesRendering from "./CitiesRendering";
import Loading from "./Loading";

function CitiesList({ isLoading, citiesData }) {
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
