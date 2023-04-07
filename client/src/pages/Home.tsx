import { useSetRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/recoil/state";
import { orderDetailState } from "@/recoil/state";
import ProductList from "@/components/organisms/home/ProductLists";
import OrderDetails from "@/components/organisms/home/OrderDetails";
import { Cart } from "@/assets/icons";

const Home = () => {
  const setOrderDetailVisibility = useSetRecoilState(orderDetailState);
  const cartQty = useRecoilValue(cartState);

  function handleOpenCart() {
    setOrderDetailVisibility((prevState) => !prevState);
  }
  return (
    <div className="flex">
      <ProductList />
      <OrderDetails />
      <button
        onClick={handleOpenCart}
        className="absolute bottom-10 right-10 block rounded-full bg-blue-650 p-3 lg:hidden"
      >
        <Cart />
        {cartQty && cartQty.length > 0 ? (
          <span className="absolute -top-0.5 right-0 ml-2 h-4 w-4 rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
            {cartQty.length}
          </span>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Home;
