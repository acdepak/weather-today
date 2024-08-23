import { useState } from "react";
import "./OpenWeather.css";

function OpenWeather() {
  const [data, setData] = useState(null);
  const [cities, setCities] = useState("bharatpur, np");
  const [loading, setLoading] = useState(false);

  const showWeather = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=bf79100a517ea99c898e04bff7f0c9c7`
      );
      const data = await response.json();

      if (data.cod === "404" || data.cod === "400") {
        setData(data);
      } else {
        setData({
          name: data.name,
          country: data.sys.country,
          temperature: (data.main.temp - 273.15).toFixed(2),
          feels: (data.main.feels_like - 273.15).toFixed(2),
          weatherDes: data.weather[0].description,
          clouds: data.clouds.all,
          sunrise: new Date(data.sys.sunrise * 1000).toTimeString().slice(0, 8),
          sunset: new Date(data.sys.sunset * 1000).toTimeString().slice(0, 8),
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App-main">
      <div className="main">
        <input
          type="text"
          className="inputField"
          placeholder="Enter your city and country"
          value={cities}
          onChange={(e) => setCities(e.target.value)}
        />
        <div className="button" onClick={showWeather}>
          Show Weather
        </div>
      </div>
      <div className="weather-main">
        {loading ? (
          <div className="loading">loading...</div>
        ) : data ? (
          <div className="weather">
            <div className="halfContainer">
              <div className="leftHalf">
                <div className="place">
                  {data.name}, {data.country}
                </div>
                <div className="temp"> {data.temperature}°C</div>
              </div>
              <div className="rightHalf">
                <div>{data.weatherDes}</div>
                <div className="feelTemp">
                  <label>Feels like: </label>
                  {data.feels}°C
                </div>
                <div className="cloudCover">
                  <label>Cloud cover: </label>
                  {data.clouds}%
                </div>
              </div>
            </div>
            <div className="riseSet">
              <div>Sunrise: {data.sunrise}</div>
              <div>Sunset: {data.sunset}</div>
            </div>
          </div>
        ) : (
          <div className="">{data ? data.message : "Please enter a valid city"}</div>
        )}
      </div>
    </div>
  );
}

export default OpenWeather;
