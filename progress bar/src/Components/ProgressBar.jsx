import { useState, useEffect } from "react";
const ProgressBar = () => {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("vhdvdvh");
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
        }
        return Math.min(prev + 5, 100);
      });
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container">
      <div
        className="progress"
        style={{ transform: `translateX(${bar - 100}%)` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
