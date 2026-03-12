import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const stopwatchRef = useRef(0);
  const intervalRef = useRef(null);
  const needToStart = useRef(false);
  function handleStart() {
    if (intervalRef.current) return;
    stopwatchRef.current = new Date().getTime() - time;
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
  }
  function handlePause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setLaps([]);
  }
  function formatTime(ms = time) {
    const millisecond = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const hour = Math.floor(ms / 1000 / 60 / 60)
      .toString()
      .padStart(2, "0");
    return `${hour} : ${minute} : ${second} : ${millisecond}`;
  }
  function handleBlur() {
    needToStart.current = !!intervalRef.current;
    handlePause();
  }
  function handleFocus() {
    if (needToStart.current) {
      needToStart.current = false;
      handleStart();
    }
  }
  function handleLaps() {
    if (!intervalRef.current) return;
    setLaps((prev) => [...prev, time]);
  }
  useEffect(() => {
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
  return (
    <>
      {formatTime()}
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLaps}>Laps</button>
        {laps.map((lap, index) => (
          <div key={index}>
            Lap {index + 1} : {formatTime(lap)}
          </div>
        ))}
      </div>
    </>
  );
};
export default Stopwatch;
