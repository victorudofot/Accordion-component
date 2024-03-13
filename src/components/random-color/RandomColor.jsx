import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000")
  return (
    <div>
      <button onClick={()=> setTypeOfColor('hex')}>Hex Colors</button>
      <button onClick={()=> setTypeOfColor('rgb')}>Rgb Colors</button>
      <button></button>
    </div>
  );
};

export default RandomColor;
