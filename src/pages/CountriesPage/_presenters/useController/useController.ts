import { useEffect, useState } from "react";
import Country from "../../../../models/Country";

const useController = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch {
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return {
    countries,
    filteredCountries,
    setFilteredCountries,
    loading,
    error,
  };
};

export default useController;
