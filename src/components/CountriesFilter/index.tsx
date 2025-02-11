import Country from "../../models/Country";
import useController from "./_presenters/useController/useController";

type CountryFilterProps = {
  countries: Country[];
  onFilterChange: (filteredCountries: Country[]) => void;
};

const CountryFilter = ({ countries, onFilterChange }: CountryFilterProps) => {
  const { selectedRegion, handleRegionChange, uniqueRegions } = useController({
    countries,
    onFilterChange,
  });

  return (
    <div className="me-5">
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="form-select text-very-dark-blue-text border-0 bg-white fs-7 shadow p-3 mb-5 bg-body-tertiary me-4"
      >
        <option value="">Filter by Region</option>
        {uniqueRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryFilter;
