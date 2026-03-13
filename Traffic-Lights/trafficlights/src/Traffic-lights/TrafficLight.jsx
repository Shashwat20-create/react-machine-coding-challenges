import { useEffect, useState } from "react";

export function TrafficLight({ data }) {
  const dataInDisplayOrder = getSortedDisplayOrder(data);
  const dataInLightOrder = getSortedLightOrder(data);
  function getSortedDisplayOrder(reorderdata) {
    return reorderdata.toSorted(function (a, b) {
      return a.displayOrder - b.displayOrder;
    });
  }
  function getSortedLightOrder(reorderData) {
    return reorderData.toSorted(function (a, b) {
      return a.order - b.order;
    });
  }
  const [activeLight, setActiveLight] = useState(dataInLightOrder[0]);
  useEffect(() => {
    const id = setTimeout(() => {
      const currentLightIndex = dataInLightOrder.findIndex(
        (l) => l.color === activeLight.color,
      );
      const nextLightIndex = currentLightIndex + 1;
      const nextLight = dataInLightOrder[nextLightIndex] ?? dataInLightOrder[0];
      setActiveLight(nextLight);
    }, activeLight.time);
    return () => clearTimeout(id);
  }, [activeLight, dataInLightOrder]);
  return (
    <div className="trafficlight">
      {dataInDisplayOrder.map((light) => {
        return (
          <Light
            key={light.color}
            light={light}
            activeColor={activeLight.color}
          />
        );
      })}
    </div>
  );
}
function Light({ light, activeColor }) {
  const opacity = light.color === activeColor ? 1 : 0.2;
  return (
    <div
      style={{ backgroundColor: light.color, opacity }}
      className="light"
    ></div>
  );
}
