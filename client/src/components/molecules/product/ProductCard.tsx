import { useRecoilState } from "recoil";
import { cartState } from "@/recoil/state";
import { IProductProps } from "@/interfaces";

const ProductCard = ({ id, name, img, price, category }: IProductProps) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product: IProductProps) => {
    const sameIndex = cart.find(
      (item: IProductProps) => item.id === product.id
    );
    if (!sameIndex) {
      setCart([...cart, { ...product, qty: 0 }]);
    } else {
      return product;
    }
  };

  return (
    <div
      className="flex cursor-pointer flex-col space-y-3 rounded-xl bg-white p-3 shadow-card"
      onClick={() => addToCart({ id, name, img, price, category })}
    >
      <div className="relative">
        <img
          className="h-[200px] w-full rounded-xl object-cover"
          src={img}
          alt={name}
        />
        <span className="absolute bottom-3 left-3 rounded-md bg-white px-2 py-1 text-xs text-gray-500 shadow-lg">
          {category.name}
        </span>
      </div>
      <h5 className="text-smx line-clamp-3">{name}</h5>
      <p className="text-xl font-bold text-blue-650">
        <span className="mr-2 text-xs">Ks</span>
        {price.toLocaleString()}
      </p>
    </div>
  );
};

export default ProductCard;