import { useState } from "react";
import Country from "../../../../models/Country";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 8;

type CountryListProps = {
  countries: Country[];
};

const useController = ({ countries }: CountryListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCountries = countries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const handleCountryClick = (cca3: string) => {
    navigate(`/country/${cca3}`);
  };
  return {
    currentPage,
    totalPages,
    paginatedCountries,
    setCurrentPage,
    handleCountryClick
  };
};

export default useController;
