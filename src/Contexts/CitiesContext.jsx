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

  async function addNewCity(newCity) {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:9000/cities/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCity),
      });
      if (!response.ok) {
        throw new Error("error while ADDING");
      }
      const data = await response.json();
      setCitiesData((cities) => [...cities, data]);
      setIsLoading(false);
      console.log(citiesData);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });

      setCitiesData((cities) => cities.filter((city) => city.id != id));
    } catch (error) {
      alert("error while deleting");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        citiesData,
        isLoading,
        currentCity,
        getCity,
        deleteCity,
        addNewCity,
      }}
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
