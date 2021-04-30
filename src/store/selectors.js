export const weatherSelector = (state) => state.weather;
export const isErrorSelector = (state) => state.isError;
export const getWeatherCityById = (state, id) =>
  state.weather.find((weather) => weather.id === id);
export const citiesSelector = (state) => state.cities;
