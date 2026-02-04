import { useState } from "react";
import TabsData from "./TabsData";
const Tabs = ({ onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(TabsData);
  return (
    <div className="Tabs">
      <div className="Tabs-Container">
        {TabsData.map((value, index) => {
          return (
            <button
              className={`${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => {
                setActiveIndex(index);
                onChange(index);
              }}
            >
              {value.label}
            </button>
          );
        })}
      </div>
      <div className="Tabs-content">{TabsData[activeIndex].content}</div>
    </div>
  );
};
export default Tabs;
