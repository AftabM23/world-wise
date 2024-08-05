import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import ProductNotFound from "./pages/ProductNotFound";
import LoginPage from "./pages/LoginPage";
import CitiesList from "./Components/CitiesList";
import CountryList from "./Components/CountryList";
import CityDetails from "./Components/CityDetails";
import Form from "./Components/Form";

function App() {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={
                <CitiesList citiesData={citiesData} isLoading={isLoading} />
              }
            />
            <Route path="cities/:id" element={<CityDetails />} />
            <Route
              path="countries"
              element={
                <CountryList countriesData={citiesData} isLoading={isLoading} />
              }
            />

            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<ProductNotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
