import { useEffect, useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        height: "100vh",
        background: color,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            color: "#fff",
            fontSize: "1rem",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <button
            className="css-button-shadow-border--rose"
            onClick={() => setTypeOfColor("hex")}
          >
            Hex Colors
          </button>
          <button
            className="css-button-shadow-border--blue"
            onClick={() => setTypeOfColor("rgb")}
          >
            Rgb Colors
          </button>
          <button
            className="css-button-shadow-border--sky"
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Random Colors
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            color: "#fff",
            fontSize: "1rem",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {" "}
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
