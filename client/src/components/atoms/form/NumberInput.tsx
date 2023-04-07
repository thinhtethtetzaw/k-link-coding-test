import { useSetRecoilState } from "recoil";
import { cartState } from "@/recoil/state";
import { INumberInputProps, ICartProductProps } from "@/interfaces";
import { Minus, Plus } from "@/assets/icons";

const NumberInput = ({ count, productId }: INumberInputProps) => {
  const setCart = useSetRecoilState(cartState);

  const handleCart = (value: number) => {
    setCart((prev: ICartProductProps[]) => {
      return prev.map((product: ICartProductProps) => {
        if (product.id === productId) {
          return { ...product, qty: value };
        }
        return product;
      });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCart(+e.target.value);
  };

  const handleIncrease = () => {
    handleCart(++count);
  };

  const handleDecrease = () => {
    if (count <= 1) {
      handleCart(1);
    } else {
      handleCart(--count);
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
        type="string"
        className="no-arrow p-2 py-1 text-center text-gray-500 outline-none focus:ring-0 xl:py-1.5"
        value={count}
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
