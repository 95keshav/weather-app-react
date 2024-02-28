import { useCallback, useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import ForecatWeather from "./components/forecast-weather/ForecastWeather";
import { openWeatherApiUrl_current, openWeatherApiUrl_forecast, openWetaherAppid } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = useCallback(async (searchData) => {
    try {
      const currentweatherData = await fetch(`${openWeatherApiUrl_current}${searchData.value}&appid=${openWetaherAppid}&units=metric`);
      const forecastweatherData = await fetch(`${openWeatherApiUrl_forecast}${searchData.value}&appid=${openWetaherAppid}&units=metric`);
      const currentweatherDataJson = await currentweatherData.json();
      const forecastweatherDataJson = await forecastweatherData.json();
      setCurrentWeather({ city: searchData.label, ...currentweatherDataJson });
      setForecastWeather({
        city: searchData.label,
        ...forecastweatherDataJson,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container my-[20px] mx-auto max-w-[100vw]">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <ForecatWeather data={forecastWeather} />}
    </div>
  );
}

export default App;
