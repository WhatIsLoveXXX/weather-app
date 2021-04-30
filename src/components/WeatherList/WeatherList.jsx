import React from "react";
import classes from "./weatherList.module.css";
import Weather from "../Weather/Weather";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/selectors";

const WeatherList = ({ showModal }) => {
  const weather = useSelector(weatherSelector);

  return (
    <ul className={classes.weatherList}>
      {weather.map((item, index) => {
        return (
          <Weather
            showModal={showModal}
            id={item.id}
            key={item.id + index}
            city={item.name}
            country={item.sys.country}
            icon={item.weather[0].icon}
            temp={item.main.temp}
            feelsLike={item.main.feels_like}
            weatherMain={item.weather[0].main}
            weatherDescription={item.weather[0].description}
          />
        );
      })}
    </ul>
  );
};

export default WeatherList;
