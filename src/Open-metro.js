import React, { useState } from "react";
import "./Open-metro.css";

function Openmetro() {
  const [latitide, setLatitude] = useState("52.52");
  const [longitude, setLongitude] = useState("13.41");

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${longitude}&longitude=${latitide}&hourly=temperature_2m`;

  const [loading, setLoading] = useState(false);

  const showWeatherDetails = async () => {
    setLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    setLoading(false);
  };

  return (
    <div>
      <div className="metroMain">
        <label className="placeLabel">place</label>
        <input type="text" className="placeInput" placeholder="newyork" />
        <label className="latLong">latitude</label>
        <input
          type="text"
          className="latInput"
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label className="latLong">longitude</label>
        <input
          type="text"
          className="latInput"
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button className="metroButton" onClick={showWeatherDetails}>
          Show Weather
        </button>
        {loading ? <div>loading</div> : null}
      </div>
    </div>
  );
}

export default Openmetro;
