import { useRecoilValue } from "recoil";
import { orderDetailState } from "@/recoil/state";
import OrderSection from "@/components/molecules/order/OrderSection";
import TotalSection from "@/components/molecules/order/TotalSection";

const OrderDetails = () => {
  const isOrderDetailVisible = useRecoilValue(orderDetailState);
  return (
    <>
      <div className="hidden h-screen w-[40%] border-l border-gray-300 lg:block xl:w-1/4">
        <div className="flex flex-col justify-between">
          <OrderSection />
          <TotalSection />
        </div>
      </div>

      {/* mobile  */}
      <div
        className={`sidebar ${
          isOrderDetailVisible ? "visible" : "hidden"
        } absolute right-0 top-0 z-20 h-screen w-full border-l border-gray-300 bg-white sm:w-2/3 md:w-1/2 lg:hidden`}
      >
        <div className="flex flex-col justify-between">
          <OrderSection />
          <TotalSection />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
