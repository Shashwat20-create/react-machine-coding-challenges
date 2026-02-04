import data from "./data.json";
import Accordion from "./Accordion";
import { useState } from "react";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(data);
  return (
    <>
      {data.faqs.map((obje, index) => {
        return (
          <Accordion
            key={index}
            ques={obje.question}
            answ={obje.answer}
            isOpen={activeIndex === index}
            setIsOpen={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        );
      })}
    </>
  );
};
export default Faq;
