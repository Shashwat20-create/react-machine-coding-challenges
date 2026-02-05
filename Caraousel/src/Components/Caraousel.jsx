import { useEffect, useRef, useState } from "react";
import data from "./data.json";
console.log(data);
const Caraousel = () => {
  const DATA_LENGTH = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  console.log(ref);
  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === DATA_LENGTH - 1) return 0;
      return prev + 1;
    });
  };
  const handlePrevious = () => {
    if (currentIndex === 0) setCurrentIndex(DATA_LENGTH - 1);
    else setCurrentIndex(currentIndex - 1);
  };
  const startTimer = () => {
    if (ref.current) clearInterval(ref.current);
    ref.current = setInterval(handleNext, 1000);
  };
  const stopTimer = () => {
    if (ref.current) clearInterval(ref.current);
  };
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);
  return (
    <div
      className="caraousel"
      onMouseEnter={() => stopTimer()}
      onMouseLeave={() => startTimer()}
    >
      <div onClick={handlePrevious} className="left-icon">
        {"<"}
      </div>
      <img src={data[currentIndex].download_url} alt="iamge text" />
      <div onClick={handleNext} className="right-icon">
        {">"}
      </div>
    </div>
  );
};
export default Caraousel;
