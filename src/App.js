import React from "react";
import OpenWeather from "./OpenWeather";
import "./App.css";
import HoverInfo from "./components/HoverInfo";
// import Openmetro from "./Open-metro";

function App() {
  return (
    <div className="App">
      <div className="fg">
        <div className="title">
          <HoverInfo message={"This weather app was first app I made after joining Astranix."}>
            Today's weather
          </HoverInfo>
        </div>
        <OpenWeather />
        {/* <Openmetro /> */}
      </div>
      <div className="bgImage"></div>
    </div>
  );
}

export default App;
