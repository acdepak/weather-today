import React from "react";
import OpenWeather from "./OpenWeather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="fg">
        <div className="title">Today's weather</div>
        <OpenWeather />
      </div>
      <div className="bgImage"></div>
    </div>
  );
}

export default App;
