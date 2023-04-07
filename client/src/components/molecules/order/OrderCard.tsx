import { useSetRecoilState } from "recoil";
import { cartState } from "@/recoil/state";
import { Close } from "@/assets/icons";
import { ICartProductProps } from "@/interfaces";
import NumberInput from "../../atoms/form/NumberInput";

const OrderCard = ({
  id,
  name,
  img,
  price,
  qty,
  category,
}: ICartProductProps) => {
  const setCart = useSetRecoilState(cartState);

  const handleRemoveFromCart = () => {
    setCart((cart) => {
      return cart.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-4">
        <img src={img} alt="shoe" className="h-24 w-24 rounded-lg" />
      </div>
      <div className="col-span-7">
        <p className="line-clamp-3 text-sm text-gray-700">{name}</p>
        <div className="flex items-center gap-3">
          <NumberInput count={qty} productId={id} />
          <p className="font-semibold text-blue-650">
            <span className="mr-1 text-xs">Ks</span>
            {price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="col-span-1 cursor-pointer" onClick={handleRemoveFromCart}>
        <Close />
      </div>
    </div>
  );
};

export default OrderCard;
