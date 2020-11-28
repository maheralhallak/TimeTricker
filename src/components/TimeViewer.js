import React, { useState } from "react";
import { Dayes } from "./configWorkPlan";

const TimeViewer = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const getTime = () => {
    const newDay = new Date();
    let hours = +newDay.getHours();
    let minute = +newDay.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    return hours + ":" + minute + " o'clock";
  };

  const getDateWithTime = () => {
    const newDay = new Date();
    return Dayes[newDay.getDay() - 1].name + " " + newDay.toLocaleDateString();
  };

  const startHandler = () => {
    setIsStarted(true);
  };

  const endtHandler = () => {
    setIsEnd(true);
  };

  return (
    <div className="time-view-container">
      <h1 className="title">{getDateWithTime()}</h1>
      {isStarted && <p className="start-at">Started at: {getTime()}</p>}
      {isEnd && <p className="start-at">Ended at: {getTime()}</p>}
      <br />
      <div>
        {isStarted && !isEnd ? (
          <>
            <button className="end" onClick={endtHandler}>
              End
            </button>
            <button className="breack" onClick={() => console.log("breack")}>
              Breaktime
            </button>
          </>
        ) : !isStarted ? (
          <button className="start" onClick={startHandler}>
            Start
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TimeViewer;
