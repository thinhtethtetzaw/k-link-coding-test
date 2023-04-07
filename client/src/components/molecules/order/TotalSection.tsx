import { useRecoilValue } from "recoil";
import { cartState } from "@/recoil/state";
import Button from "@/components/atoms/form/Button";

const TotalSection = () => {
  const products = useRecoilValue(cartState);

  const subTotal = products.reduce(
    (total, product) => total + product.qty * product.price,
    0
  );
  return (
    <div className="flex h-[27vh] flex-col justify-between bg-blue-450 p-5 py-3">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Subtotal</p>
        <p className="text-blue-650">Ks {subTotal}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Tax (5%)</p>
        <p className="text-blue-650">Ks {subTotal * 0.05}</p>
      </div>
      <hr className="border-dashed border-gray-300" />
      <div className="flex items-center justify-between font-semibold">
        <p className="text-gray-600">Total</p>
        <p className="text-blue-650">Ks {subTotal + subTotal * 0.05}</p>
      </div>
      <Button
        type="button"
        text="Pay Now"
        handleClick={() => console.log(products)}
      />
    </div>
  );
};

export default TotalSection;
