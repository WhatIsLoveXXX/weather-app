import {
  DELETE_WETHER,
  GET_WEATHER,
  SET_IS_ERROR,
  UPDATE_WEATHER,
} from "./actionTypes";
import axios from "axios";

const API_KEY = "5bfced3443e1c3dfa57c6e35ca353d06";

export const getWeather = (city) => ({
  type: GET_WEATHER,
  payload: async () => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return data;
  },
});

export const updateWeather = (city) => ({
  type: UPDATE_WEATHER,
  payload: async () => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return data;
  },
});

export const removeWeather = (id) => ({
  type: DELETE_WETHER,
  payload: async () => {
    return {
      id,
    };
  },
});

export const setError = (isError) => ({
  type: SET_IS_ERROR,
  payload: isError,
});
