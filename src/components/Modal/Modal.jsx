import React from "react";
import classes from "./modal.module.css";
import { useSelector } from "react-redux";
import { getWeatherCityById } from "../../store/selectors";

const Modal = ({ weatherCityId, hideModal }) => {
  const weatherCity = useSelector((state) =>
    getWeatherCityById(state, weatherCityId)
  );

  console.log(weatherCity);
  return (
    <div className={classes.modal} onClick={() => hideModal()}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.weatherName}>
          <span>
            {weatherCity.name}, {weatherCity.sys.country}
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${weatherCity.weather[0].icon}.png`}
            alt="Icon depicting current weather."
          />
        </div>
        <div className={classes.weatherBlock}>
          <div className={classes.weatherTemp}>
            {Math.round(weatherCity.main.temp)}&deg; <span>C</span>
          </div>
          <div className={classes.weatherFeels}>
            Feels like {Math.round(weatherCity.main.feels_like)}&deg; C.{" "}
          </div>
          <div className={classes.weatherDescription}>
            {weatherCity.weather[0].description}
          </div>
        </div>
        <ul className={classes.weatherInfo}>
          <li>Relative humidity: {weatherCity.main.humidity}%</li>
          <li>Pressure: {weatherCity.main.pressure} hPa</li>
          <li>Wind: {Math.round(weatherCity.wind.speed)} mph</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
