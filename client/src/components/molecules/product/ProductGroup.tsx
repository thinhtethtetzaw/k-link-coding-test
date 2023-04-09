import { Fragment } from "react";
import { useFetchQuery } from "@/hooks/useQuery";
import { useRecoilValue } from "recoil";
import { productsFilterState } from "@/recoil/state";
import ProductCard from "@/components/molecules/product/ProductCard";

const ProductGroup = () => {
  const filterState = useRecoilValue(productsFilterState);
  const {
    isLoading,
    error,
    data: products,
  } = useFetchQuery(
    `/products?searchString=${filterState.searchString}&categoryId=${filterState.categoryId}`
  );

  return (
    <div className="grid h-[77.4vh] grid-cols-1 gap-3 overflow-y-scroll p-8 pb-4 pt-0 scrollbar-hide sm:grid-cols-2 xl:grid-cols-4">
      {!isLoading &&
        products &&
        products.body.map((item: any, index: number) => (
          <Fragment key={index}>
            <ProductCard
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              categories={item.categories}
            />
          </Fragment>
        ))}
    </div>
  );
};

export default ProductGroup;
