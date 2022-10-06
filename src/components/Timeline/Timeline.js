import React, { useState } from "react";
import "./Timeline.css";

function TimeLine({ setSelection }) {
  const [active, setActive] = useState("All");
  const selectionToValueDict = {
    "1d": "1",
    "1w": "7",
    "1m": "30",
    "1y": "365",
    All: "max",
  };

  const handleSelectionClick = (selection) => {
     setActive(selection);
     setSelection(selectionToValueDict[selection]);
  };

  return (
    <div className="timeline__container">
      <div className="timeline__buttons__container">
        {Object.keys(selectionToValueDict).map((selection) => (
          <div
            key={selection}
            className={`timeline__button ${selection === active && "active"}`}
            onClick={() => handleSelectionClick(selection)}
          >
            {selection}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
