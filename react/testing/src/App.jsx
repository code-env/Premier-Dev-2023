import React from "react";
import "./App.css";

const App = () => {
  const colors = ["orange", "brown", "blue", "red", "yellow", "green"];

  const handleClick = (color) => {
    console.log(color);
  };

  return (
    <div className="wrapper">
      <div className="btns">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(color)}
            style={{
              backgroundColor: color,
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
