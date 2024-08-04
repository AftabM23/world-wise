import { useEffect, useState } from "react";
import CitiesRendering from "./CitiesRendering";
import Loading from "./Loading";

function CitiesList() {
  const [citiesData, setCitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(function () {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:9000/cities");
        if (!response.ok) {
          throw new Error("Response was not OK");
        }
        const data = await response.json();

        setCitiesData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setIsLoading(false);
        console.error("error while fetching cities", error);
      }
    };
    fetchCities();
  }, []);
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
