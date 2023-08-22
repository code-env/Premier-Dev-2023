import React, { useState } from "react";
import { foods } from "../constants";
import { XSquare } from "lucide-react";

const Foods = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {foods.map((food, index) => (
        <div
          className="p-2 bg-black"
          key={index}
          onClick={() => setSelectedFood(food)}
        >
          <img src={food.image} />
        </div>
      ))}

      <SelectItem food={selectedFood} setSelectedFood={setSelectedFood} />
    </div>
  );
};

export default Foods;

function SelectItem({ food, setSelectedFood }) {
  return (
    <div
      className={`fixed top-0  h-screen w-full backdrop-blur text-white transition-all duration-300 ${
        food ? "right-0" : "-right-full"
      }`}
    >
      <button
        className="absolute top-10 right-10 h-10 w-10"
        onClick={() => setSelectedFood(null)}
      >
        <XSquare className="text-black" size={40} />
      </button>
    </div>
  );
}
