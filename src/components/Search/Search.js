import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  citiesSelector,
  isErrorSelector,
  weatherSelector,
} from "../../store/selectors";
import { getWeather, setError } from "../../store/actions";
import classes from "./search.module.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [searchError, setSearchError] = useState(false);

  const dispatch = useDispatch();
  const isError = useSelector(isErrorSelector);
  const weatherArr = useSelector(weatherSelector);
  const cities = useSelector(citiesSelector);

  const handleChange = (event) => {
    setValue(event.target.value);
    setSearchError(false);
    dispatch(setError(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (weatherArr.length === 0) {
      dispatch(getWeather(value));
    } else {
      for (let i = 0; i < weatherArr.length; i++) {
        if (weatherArr[i].name.toLowerCase() === value.toLowerCase().trim()) {
          dispatch(setError(false));
          setSearchError(true);
          return;
        }
      }
      dispatch(getWeather(value));
    }

    console.log(cities);
    console.log(isError);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.search}>
      <div className={classes.container}>
        <input
          type="text"
          name="search"
          placeholder="Enter the city..."
          value={value}
          onChange={handleChange}
          className={classes.searchInput}
        />
        <button type="submit" className={classes.searchButton}>
          &#128269;
        </button>
      </div>
      {isError && (
        <span className={classes.searchError}>This city does not exist</span>
      )}
      {searchError && (
        <span className={classes.searchError}>This city already exist</span>
      )}
    </form>
  );
};

export default Search;
