import { useFetchQuery } from "@/hooks/useQuery";
import { useRecoilState } from "recoil";
import { productsFilterState } from "@/recoil/state";
import { IFilterState, ICategoryProps } from "@/interfaces";

const CategoryFilter = () => {
  const [filterState, setFilterState] = useRecoilState(productsFilterState);

  const { isLoading, data: categories } = useFetchQuery(`/categories`);

  const handleClick = (categoryId: string) => {
    setFilterState((prev: IFilterState) => {
      return {
        ...prev,
        categoryId: categoryId,
      };
    });
  };

  return (
    <div className="ml-8 pb-8">
      <div className="flex gap-2.5 overflow-x-scroll scrollbar-hide">
        <div
          className={`${
            filterState.categoryId === ""
              ? "bg-blue-650 text-white"
              : "bg-gray-100 text-gray-700 "
          } cursor-pointer whitespace-nowrap rounded-full px-3 py-1 text-sm`}
          onClick={() => handleClick("")}
        >
          All
        </div>
        {!isLoading &&
          categories &&
          categories.body.map((category: ICategoryProps, index: number) => (
            <div
              key={index}
              className={`${
                filterState.categoryId === category.id.toString()
                  ? "bg-blue-650 text-white"
                  : "bg-gray-100 text-gray-700 "
              } cursor-pointer whitespace-nowrap rounded-full px-3 py-1 text-sm`}
              onClick={() => handleClick(category.id.toString())}
            >
              {category.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
