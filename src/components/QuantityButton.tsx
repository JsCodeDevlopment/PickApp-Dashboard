import Add from "../assets/images/PlusLight.png";
import Minus from "../assets/images/MinusLight.png";
import { useState } from "react";

export function QuantityButton() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

  };
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button className="btn btn-circle bg-base-300"
      onClick={handleDecrement}>
        <img src={Minus} alt="" />
      </button>
      <div className="flex w-12 h-12 bg-base-300 items-center justify-center rounded-md ">
        {count}
      </div>
      <button className="btn btn-circle bg-base-300"
      onClick={handleIncrement}>
        <img src={Add} alt="" />
      </button>
    </div>
  );
}
