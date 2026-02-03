import { useState } from "react";
const StarRating = ({ starCount }) => {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState();
  return (
    <>
      {new Array(starCount).fill(0).map((_, index) => {
        const isFilled = index <= (hoverValue == -1 ? starValue : hoverValue);
        return (
          <button
            key={index}
            className={`btn ${isFilled ? "star-filled" : ""}
            `}
            onClick={() => setStarValue(index)}
            onMouseEnter={() => setHoverValue(index)}
            onMouseLeave={() => setHoverValue(-1)}
          >
            &#9733;
          </button>
        );
      })}
    </>
  );
};
export default StarRating;
