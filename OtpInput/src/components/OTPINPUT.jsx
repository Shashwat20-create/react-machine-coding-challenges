import { useEffect, useRef, useState } from "react";

const OTPINPUT = ({ otplength = 6 }) => {
  const [otp, setOtp] = useState(new Array(otplength).fill(""));
  const ref = useRef([]);
  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (isNaN(data)) return;
    const pastedData = data.split("").slice(0, otplength);
    console.log(pastedData);
    const newOtp = [...otp];
    pastedData.forEach((char, index) => {
      newOtp[index] = char;
    });
    setOtp(newOtp);
  };
  const handleInput = (e, index) => {
    const key = e.key;
    if (key == "ArrowRight") {
      if (index + 1 < otplength) ref.current[index + 1].focus();
      return;
    }
    if (key == "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
    }
    const copyOtp = [...otp];
    if (key == "Backspace") {
      copyOtp[index] = "";
      if (index > 0) ref.current[index - 1].focus();
      setOtp(copyOtp);
      return;
    }
    if (isNaN(key) || key === " ") return;
    copyOtp[index] = key;
    if (index + 1 < otplength) ref.current[index + 1].focus();
    setOtp(copyOtp);
  };
  useEffect(() => {
    ref.current[0].focus();
  }, []);
  return (
    <div className="otp">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            onPaste={handlePaste}
            value={value}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="text"
            // readOnly
            onKeyDown={(e) => handleInput(e, index)}
          />
        );
      })}
    </div>
  );
};
export default OTPINPUT;
