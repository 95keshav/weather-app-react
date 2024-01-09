import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weatherDesc">{data.weather[0]?.description}</p>
        </div>
        <img
          src={`${import.meta.env.VITE_REACT_APP_WEATHER_ICON_URL}/${
            data.weather[0].icon
          }.png`}
          alt={data.weather[0]?.description}
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main?.temp)}&#8451;</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels Like</span>
            <span className="param-value">
              {Math.round(data.main?.feels_like)}&#8451;
            </span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind</span>
            <span className="param-value">{data.wind?.speed}m/s</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">{data.main?.humidity}%</span>
          </div>
          <div className="param-row">
            <span className="param-label">Presure</span>
            <span className="param-value">{data.main?.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
