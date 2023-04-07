import CategoryFilter from "@/components/molecules/product/CategoryFilter";
import Navbar from "@/components/molecules/product/Navbar";
import ProductGroup from "@/components/molecules/product/ProductGroup";

const ProductList = () => {
  return (
    <div className="w-full pr-0 lg:w-[60%] xl:w-3/4">
      <Navbar />
      <CategoryFilter />
      <ProductGroup />
    </div>
  );
};

export default ProductList;
