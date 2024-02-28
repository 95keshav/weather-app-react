const CurrentWeather = ({ data }) => {
  return (
    <div className="weather w-[70vw] m-auto rounded-[6px] text-[#fff] bg-[#333] px-[40px] pb-[40px] shadow shadow-[rgb(0 0 0 / 30%)]">
      <div className="top flex justify-between items-center">
        <div>
          <p className="city m-0 font-semibold text-lg leading-none tracking-[1px]">{data.city}</p>
          <p className="weatherDesc font-normal text-sm leading-none m-0">{data.weather[0]?.description}</p>
        </div>
        <img
          src={`${import.meta.env.VITE_REACT_APP_WEATHER_ICON_URL}/${data.weather[0].icon}.png`}
          alt={data.weather[0]?.description}
          className="weather-icon w-[100px]"
        />
      </div>
      <div className="bottom flex justify-between items-center">
        <p className="temp font-semibold text-[80px] my-[40px] w-auto trecking-[-5px]">{Math.round(data.main?.temp)}&#8451;</p>
        <div className="details w-[18%] pl-[20px]">
          <div className="param-row flex justify-between text-base">
            <span className="param-label  text-left font-normal">Details</span>
          </div>
          <div className="param-row flex justify-between text-base">
            <span className="param-label text-left font-normal">Feels Like</span>
            <span className="param-value text-right font-normal">{Math.round(data.main?.feels_like)}&#8451;</span>
          </div>
          <div className="param-row flex justify-between text-base">
            <span className="param-label text-left font-normal">Wind</span>
            <span className="param-value text-right font-normal">{data.wind?.speed}m/s</span>
          </div>
          <div className="param-row flex justify-between text-base">
            <span className="param-label text-left font-normal">Humidity</span>
            <span className="param-value text-right font-normal">{data.main?.humidity}%</span>
          </div>
          <div className="param-row flex justify-between text-base">
            <span className="param-label text-left font-normal">Presure</span>
            <span className="param-value text-right font-normal">{data.main?.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
