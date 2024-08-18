/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
const CitiesContext = createContext(null);

const initialState = {
  citiesData: [],
  isLoading: false,
  currentCity: [],
  errorMsg: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, citiesData: action.payload };

    case "city/searched":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/added":
      return {
        ...state,
        isLoading: false,
        citiesData: [...state.citiesData, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        citiesData: state.citiesData.filter(
          (city) => city.id !== action.payload
        ),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
}
function CitiesContextProvider({ children }) {
  const [{ citiesData, isLoading, currentCity, errorMsg }, dispatch] =
    useReducer(reducer, initialState);

  // const [citiesData, setCitiesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setcurrentCity] = useState([]);
  useEffect(function () {
    const fetchCities = async () => {
      dispatch({ type: "loading" });
      try {
        const response = await fetch("http://localhost:9000/cities");
        if (!response.ok) {
          throw new Error("Response was not OK");
        }
        const data = await response.json();
        dispatch({ type: "cities/loaded", payload: data });

        console.log(data);
      } catch (error) {
        dispatch({ type: "rejected", payload: error });
        console.log(errorMsg);
      }
    };
    fetchCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`http://localhost:9000/cities/${id}`);
      if (!response.ok) {
        throw new Error("Response was not OK");
      }
      const data = await response.json();
      dispatch({ type: "city/searched", payload: data });

      console.log(currentCity);
    } catch (error) {
      dispatch({ type: "rejected", payload: error });
      console.log(errorMsg);
    }
  }

  async function addNewCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`http://localhost:9000/cities/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCity),
      });
      if (!response.ok) {
        throw new Error("errorMsg while ADDING");
      }
      const data = await response.json();
      dispatch({ type: "city/added", payload: data });

      console.log(citiesData);
    } catch (error) {
      dispatch({ type: "rejected", payload: error });
      console.log(error);
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
      // setCitiesData((cities) => cities.filter((city) => city.id != id));
    } catch (error) {
      dispatch({ type: "rejected", payload: error });
      console.log(error);
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
