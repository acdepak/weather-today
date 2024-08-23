import React from "react";
import { useState } from "react";

const HoverInfo = ({ children, message }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };
  const infoStyle = {
    position: "absolute",
    top: "-3rem",
    left: "0",
    backgroundColor: "#55555590",
    padding: "0.5rem",
    display: showInfo ? "block" : "none",
    fontSize: "18px",
    fontWeight: "normal",
    color: "white",
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }} onMouseLeave={handleMouseLeave}>
      <span onMouseEnter={handleMouseEnter}> {children}</span>
      <div style={infoStyle}>{showInfo && message}</div>
    </div>
  );
};

export default HoverInfo;
