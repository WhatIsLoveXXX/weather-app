import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  DELETE_WETHER_FULFILLED,
  GET_WEATHER_FULFILLED,
  GET_WEATHER_REJECTED,
  SET_IS_ERROR,
  UPDATE_WEATHER_FULFILLED,
} from "./actionTypes";

const initialState = {
  weather: [],
  cities: [],
  isError: false,
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cities"],
};

const rootReducer = persistReducer(
  persistConfig,
  (state = initialState, action) => {
    switch (action.type) {
      case GET_WEATHER_FULFILLED:
        return {
          ...state,
          weather: [...state.weather, action.payload],
          cities: [...new Set([...state.cities, action.payload.name])],
          isError: false,
        };
      case GET_WEATHER_REJECTED:
        return {
          ...state,
          isError: true,
        };
      case UPDATE_WEATHER_FULFILLED:
        return {
          ...state,
          weather: [
            ...state.weather.map((elem) => {
              if (elem.id === action.payload.id) {
                return action.payload;
              }
              return elem;
            }),
          ],
        };
      case DELETE_WETHER_FULFILLED:
        return {
          ...state,
          weather: [
            ...state.weather.filter((elem) => +elem.id !== +action.payload.id),
          ],
        };
      case SET_IS_ERROR:
        return {
          ...state,
          isError: false,
        };
      default:
        return state;
    }
  }
);

export default rootReducer;
