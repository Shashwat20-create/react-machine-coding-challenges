import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  function getDate() {
    let result = "";
    let hoursnumber = time.getHours();
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    const ampm = hoursnumber >= 12 ? "PM" : "AM";
    const hours = String(hoursnumber % 12).padStart(2, "0") || "12";
    result = `${hours} : ${minutes} : ${second} ${ampm}`;
    return result;
  }
  //   return <>{time.toLocaleTimeString()}</>;
  return <>{getDate()}</>;
};

export default DigitalClock;
