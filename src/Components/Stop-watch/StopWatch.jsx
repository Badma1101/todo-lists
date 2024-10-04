import React, { useEffect, useState } from "react";
import './styles.css';

function StopWatch() {
    const[active,setActive]=useState(false);
    const[pause,setPause]=useState(true);
    const[time,setTime]=useState(0);

    useEffect(() => {
        let interval = null;
 
        if (active && pause === false) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [active, pause]);
  
    function handleResume(){
        setPause(!pause);
    }
  function handleReset(){
    setActive(false);
        setPause(true);
        setTime(0);
  }
  function handleStart(){
    setActive(true);
    setPause(false);
  }
  return (
    <div className="container">
      <span>{(Math.floor(time/60000)%60).toString().padStart(2, "0")}</span>:
          <span>{(Math.floor(time/1000)%60).toString().padStart(2, "0")}</span>:
          <span>{(Math.floor(time/10)%100).toString().padStart(2, "0")}</span>
      <div className="btn">
        <button disabled={active} className="start" onClick={handleStart}>Start</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="resume" onClick={handleResume}>{pause ? "Resume" : "Pause"}</button>
      </div>
    </div>
  );
}

export default StopWatch;
