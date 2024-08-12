/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
const CitiesContext = createContext(null);
function CitiesContextProvider({ children }) {
  const [citiesData, setCitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [currentCity, setcurrentCity] = useState([]);
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
        console.error(error);
      }
    };
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:9000/cities/${id}`);
      if (!response.ok) {
        throw new Error("Response was not OK");
      }
      const data = await response.json();
      setcurrentCity(data);
      setIsLoading(false);

      console.log(currentCity);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ citiesData, isLoading, currentCity, getCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCitiesData() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCitiesData is used out of context provider");
  return context;
}

export { CitiesContextProvider, useCitiesData };
