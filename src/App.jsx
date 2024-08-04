import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import ProductNotFound from "./pages/ProductNotFound";
import LoginPage from "./pages/LoginPage";
import CitiesList from "./Components/CitiesList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CitiesList />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
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
