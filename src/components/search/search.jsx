import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      const finaloptions = {};
      finaloptions.options = result.data.map((cityData) => {
        return {
          value: `?lat=${cityData.latitude}&lon=${cityData.longitude}`,
          label: `${cityData.name}, ${cityData.countryCode}`,
        };
      });
      return finaloptions;
    } catch (error) {
      console.error(error);
    }
  };
  const handleOnChnage = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for Cities"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChnage}
      loadOptions={loadOptions}
    ></AsyncPaginate>
  );
};

export default Search;
