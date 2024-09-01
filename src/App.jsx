import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { CitiesContextProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import { lazy, Suspense } from "react";
// import Loading from "./Components/Loading";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import AppLayout from "./pages/AppLayout";
// import ProductNotFound from "./pages/ProductNotFound";
// import LoginPage from "./pages/LoginPage";
// import CitiesList from "./Components/CitiesList";
// import CountryList from "./Components/CountryList";
// import CityDetails from "./Components/CityDetails";
// import Form from "./Components/Form";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const ProductNotFound = lazy(() => import("./pages/ProductNotFound"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CitiesList = lazy(() => import("./Components/CitiesList"));
const CountryList = lazy(() => import("./Components/CountryList"));
const CityDetails = lazy(() => import("./Components/CityDetails"));
const Form = lazy(() => import("./Components//Form"));
const Loading = lazy(() => import("./Components/Loading"));

function App() {
  return (
    <CitiesContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="app" element={<AppLayout />}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CitiesList />} />
                <Route path="cities/:id" element={<CityDetails />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<ProductNotFound />} />
              <Route path="/login" element={<LoginPage />} />
              <Route />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesContextProvider>
  );
}

export default App;
