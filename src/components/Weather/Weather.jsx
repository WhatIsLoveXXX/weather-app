import React from "react";
import { useDispatch } from "react-redux";
import { removeWeather, updateWeather } from "../../store/actions";
import classes from "./weather.module.css";

const Weather = ({
  city,
  country,
  icon,
  temp,
  feelsLike,
  weatherMain,
  weatherDescription,
  id,
  showModal,
}) => {
  const dispatch = useDispatch();

  const updateWeatherFn = (event) => {
    event.stopPropagation();
    dispatch(updateWeather(city));
  };

  const closeWeatherFn = (event) => {
    event.stopPropagation();
    dispatch(removeWeather(event.target.parentNode.id));
  };

  return (
    <li className={classes.weather} id={id} onClick={() => showModal(id)}>
      <button className={classes.weatherUpdate} onClick={updateWeatherFn}>
        Update the weather
      </button>
      <button className={classes.closeBtn} onClick={closeWeatherFn}>
        &times;
      </button>
      <span className={classes.weatherTitle}>
        {city}, {country}
      </span>
      <div className={classes.weatherBlock}>
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="Icon depicting current weather."
        />
        <div>
          {Math.round(temp)}&deg; <span>C</span>
        </div>
      </div>
      <div className={classes.weatherInfo}>
        {" "}
        Feels like {Math.round(feelsLike)}&deg; C. {weatherMain}.{" "}
        {weatherDescription}
      </div>
    </li>
  );
};

export default Weather;
