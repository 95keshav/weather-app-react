import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./ForecastWeather.css";

const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const ForecatWeather = ({ data }) => {
  const todayindex = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(todayindex, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, todayindex));
  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item cursor-pointer bg-[#333] m-[40px] rounded-[15px] h-[40px] flex items-center text-normal px-[5px] py-[20px] justify-center">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_WEATHER_ICON_URL}/${item.weather[0].icon}.png`}
                    alt="Weather"
                    className="icon-small w-[40px]"
                  />
                  <label className="day text-[white] font-semibold ml-[15px] grow shrink">{forecastDays[idx]}</label>
                  <label className="description  mr-[15px] text-right grow shrink">{item.weather[0].description}</label>
                  <label className="min-max text-[#bab2b2]">
                    {Math.round(item.main.temp_min)}&#8451; /{Math.round(item.main.temp_max)}&#8451;
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid grid grid-cols-2 gap-x-4 gap-y-0  px-[5px] py-[15px]">
                <div className="daily-details-grid-item items-center flex h-[30px] w-[400px] justify-between">
                  <label className="text-[#bab2b2]">Pressure</label>
                  <label className="text-[rgb(209 52 52)]">{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-grid-item items-center flex h-[30px] w-[400px] justify-between">
                  <label className="text-[#bab2b2]">Humidity</label>
                  <label className="text-[rgb(209 52 52)]">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item items-center flex h-[30px] w-[400px] justify-between">
                  <label className="text-[#bab2b2]">Clouds</label>
                  <label className="text-[rgb(209 52 52)]">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item items-center flex h-[30px] w-[400px] justify-between">
                  <label className="text-[#bab2b2]">Wind Speed</label>
                  <label className="text-[rgb(209 52 52)]">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item items-center flex h-[30px] w-[400px] justify-between">
                  <label className="text-[#bab2b2]">Sea Level</label>
                  <label className="text-[rgb(209 52 52)]">{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item items-center flex h-[30px] w-[400px] justify-between">
                  <label className="text-[#bab2b2]">Feels Like</label>
                  <label className="text-[rgb(209 52 52)]">{Math.round(item.main.feels_like)}&#8451;</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecatWeather;
