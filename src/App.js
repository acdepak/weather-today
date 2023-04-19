import React from "react";
import OpenWeather from "./OpenWeather";
import "./App.css";
// import Openmetro from "./Open-metro";

function App() {
  return (
    <div className="App">
      <div className="fg">
        <div className="title">Today's weather</div>
        <OpenWeather />
        {/* <Openmetro /> */}
      </div>
      <div className="bgImage"></div>
    </div>
  );
}

export default App;
