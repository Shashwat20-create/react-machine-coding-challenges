import { useState } from "react";
import data from "../data/faqData.json";
import QNA from "./QNA.jsx";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleQNA = (index) => {
    console.log(index);
    setActiveIndex((prevIndex) => {
      if (prevIndex === index) return -1;
      return index;
    });
  };
  return (
    <div>
      {data.faqs.map((qna, index) => {
        return (
          <QNA
            key={index}
            qna={qna}
            showAnswer={activeIndex === index}
            handleQNA={() => handleQNA(index)}
          />
        );
      })}
    </div>
  );
};
export default FAQ;
