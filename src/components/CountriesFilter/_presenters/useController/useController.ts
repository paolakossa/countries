import React, { useState } from "react";
import Country from "../../../../models/Country";

type CountryFilterProps = {
  countries: Country[];
  onFilterChange: (filteredCountries: Country[]) => void;
};

const useController = ({ countries, onFilterChange }: CountryFilterProps) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setSelectedRegion(region);
    const filtered = region
      ? countries.filter((c) => c.region === region)
      : countries;
    onFilterChange(filtered);
  };

  const uniqueRegions = Array.from(new Set(countries.map((c) => c.region)));

  return {
    selectedRegion,
    handleRegionChange,
    uniqueRegions,
  };
};

export default useController;
