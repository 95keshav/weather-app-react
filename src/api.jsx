export const geoApiUrl = import.meta.env.VITE_REACT_APP_GEO_API_URL;
export const geoApiOptions = {
  method: import.meta.env.VITE_REACT_APP_GEO_RapidAPI_Method,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_GEO_RapidAPI_Key,
    "X-RapidAPI-Host": import.meta.env.VITE_REACT_APP_GEO_RapidAPI_Host,
  },
};

export const openWeatherApiUrl_current = import.meta.env
  .VITE_REACT_APP_WEATHER_CURRENT_API_URL;
export const openWeatherApiUrl_forecast = import.meta.env
  .VITE_REACT_APP_WEATHER_FORECAST_API_URL;
export const openWetaherAppid = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
