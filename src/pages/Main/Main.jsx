import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import WeatherList from "../../components/WeatherList/WeatherList";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { citiesSelector } from "../../store/selectors";
import { getWeather } from "../../store/actions";

const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  const [weatherCityId, setWeatherCityId] = useState(null);
  const cities = useSelector(citiesSelector);

  const dispatch = useDispatch();

  const showModal = (id) => {
    console.log("show modal");
    setModalActive(true);
    setWeatherCityId(id);
  };

  const hideModal = () => {
    setModalActive(false);
  };

  useEffect(() => {
    cities.forEach((city) => dispatch(getWeather(city)));
  }, [dispatch]);

  return (
    <>
      <Search />
      <WeatherList showModal={showModal} />
      {modalActive && (
        <Modal weatherCityId={weatherCityId} hideModal={hideModal} />
      )}
    </>
  );
};

export default Main;
