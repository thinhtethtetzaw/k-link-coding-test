import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/recoil/state";
import { INumberInputProps } from "@/interfaces";
import { Minus, Plus } from "@/assets/icons";

const NumberInput = ({ count, productId }: INumberInputProps) => {
  const setCart = useSetRecoilState(cartState);
  const [value, setValue] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <div className="mt-2 grid w-[8rem] grid-cols-3 divide-x rounded-lg border border-gray-300">
      <button
        className="flex items-center justify-center"
        onClick={handleDecrease}
      >
        <Minus />
      </button>
      <input
        type="number"
        className="no-arrow p-2 py-1 text-center text-gray-500 outline-none focus:ring-0 xl:py-1.5"
        value={value}
        onChange={handleInputChange}
      />
      <button
        className="flex items-center justify-center"
        onClick={handleIncrease}
      >
        <Plus />
      </button>
    </div>
  );
};

export default NumberInput;
