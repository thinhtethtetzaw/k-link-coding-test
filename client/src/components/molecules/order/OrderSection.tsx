import { Fragment } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showOrderDetailState } from "@/recoil/state";
import { cartState } from "@/recoil/state";
import { ICartProductProps } from "@/interfaces";
import { Cart } from "@/assets/icons";
import OrderCard from "@/components/molecules/order/OrderCard";

const OrderSection = () => {
  const setOrderDetailVisibility = useSetRecoilState(showOrderDetailState);
  const products = useRecoilValue(cartState);

  const handleClose = () => {
    setOrderDetailVisibility(false);
  };

  return (
    <div className="h-[73vh] p-8 px-5">
      <div className="flex items-center justify-between">
        <h5 className="mb-10 mt-2 text-2xl font-semibold">Order Details</h5>
        <button
          className="mt-2 cursor-pointer text-sm text-gray-500 hover:underline lg:hidden"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      <div className="flex h-[60vh] flex-col gap-8 overflow-y-scroll scrollbar-hide">
        {products && products.length > 0 ? (
          <Fragment>
            {products.map((product: ICartProductProps) => (
              <Fragment key={product.id}>
                <OrderCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  qty={product.qty}
                  categories={product.categories}
                />
              </Fragment>
            ))}
          </Fragment>
        ) : (
          <div className="flex h-[60vh] flex-col items-center justify-center gap-5">
            <div className="text-center text-gray-400">
              <h5 className="text-2xl">Your cart is empty!</h5>
              <p className="mt-3 text-sm">
                Looks like you have not added anything to cart.
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
              <Cart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSection;
