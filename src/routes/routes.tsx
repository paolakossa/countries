import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPage from "../pages/CountriesPage";
import CountriesPageDetails from "../pages/CountriesPageDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route
          path="/country/:cca3"
          element={<CountriesPageDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}
