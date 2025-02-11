import { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import SearchInput from "../../components/SearchInput";
import CountryFilter from "../../components/CountriesFilter";
import CountryList from "../../components/CountriesList";
import Country from "../../models/Country";

const CountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Menu />
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <SearchInput
          placeholder="Search for a country..."
          onSearchTextChange={(search) => {
            const filtered = countries.filter((c) =>
              c.name.common.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCountries(filtered);
          }}
        />
        <CountryFilter
          countries={countries}
          onFilterChange={setFilteredCountries}
        />
      </div>
      <div className="mx-0 mx-md-5">
        <CountryList countries={filteredCountries} />
      </div>
    </div>
  );
};

export default CountriesPage;
