import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div id="container" className="loading-container">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#fc6767" />
          </filter>
        </defs>
        <circle
          id="spinner"
          cx="50"
          cy="50"
          r="45"
          style={{
            fill: "transparent",
            stroke: "#dd2476",
            strokeWidth: "7px",
            strokeLinecap: "round",
            filter: "url(#shadow)",
          }}
        />
      </svg>
    </div>
  );
};

export default Loading;
