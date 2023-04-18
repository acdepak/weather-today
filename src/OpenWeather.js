import { useState } from "react";
import "./OpenWeather.css";

function OpenWeather() {
  const [data, setData] = useState("");
  const [cities, setCities] = useState("tokyo");
  const [loading, setLoading] = useState(false);

  const [country, setCountry] = useState(null);
  const [clouds, setClouds] = useState(null);
  const [weatherDes, setWeatherDes] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [feels, setFeels] = useState(null);

  const showWeather = async () => {
    setLoading(true);

    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=bf79100a517ea99c898e04bff7f0c9c7`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setCountry(data.sys.country);
        setClouds(data.clouds.all);
        setWeatherDes(data.weather[0].description);
        setSunrise(
          new Date(data.sys.sunrise * 1000).toTimeString().slice(0, 8)
        );
        setSunset(new Date(data.sys.sunset * 1000).toTimeString().slice(0, 8));
        setTemperature((data.main.temp - 273.15).toFixed(2));
        setFeels((data.main.feels_like - 273.15).toFixed(2));
      })
      .catch((err) => console.error(err));

    setLoading(false);
  };

  return (
    <div className="App-main">
      <div className="main">
        <input
          type="text"
          className="inputField"
          placeholder="Enter your city and country"
          onChange={(e) => setCities(e.target.value)}
        />
        <div className="button" onClick={showWeather}>
          Show Weather
        </div>
      </div>
      <div className="weather-main">
        {loading ? <div className="loading">loading...</div> : null}
        {data ? (
          <div className="weather">
            <div className="halfContainer">
              <div className="leftHalf">
                <div className="place">
                  {data.name}, {country}
                </div>
                <div className="temp"> {temperature}°C</div>
              </div>
              <div className="rightHalf">
                <div>{weatherDes}</div>
                <div className="feelTemp">
                  <label>Feels like: </label>
                  {feels}°C
                </div>
                <div className="cloudCover">
                  <label>Cloud cover: </label>
                  {clouds}%
                </div>
              </div>
            </div>
            <div className="riseSet">
              <div>Sunrise: {sunrise}</div>
              <div>Sunset: {sunset}</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default OpenWeather;
