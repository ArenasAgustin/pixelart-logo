import React, { useState, useEffect } from "react";
import "./Pixelart.scss";

export default function Pixelart() {
  const [pixelArray, setPixelArray] = useState([]);

  useEffect(() => {
    const pixels = [];
    let x = 1,
      y = 1;

    for (let i = 0; i < 210; i++) {
      pixels.push(
        <div className={`pixelart-pixel p${x}-${y}`} key={i}>
          {/* {x}-{y} */}
        </div>
      );

      if (x === 14) {
        x = 1;
        y++;
      } else x++;
    }
    setPixelArray(pixels);
  });

  return (
    <div className="pixelart-container">
      {pixelArray.map((pixel) => {
        return pixel;
      })}
    </div>
  );
}
