import { useCallback } from "react";
import { Search } from "@/assets/icons";
import { useSetRecoilState } from "recoil";
import debounce from "lodash.debounce";
import { productsFilterState } from "@/recoil/state";
import { IFilterState } from "@/interfaces";

const SearchTextField = () => {
  const setFilterState = useSetRecoilState(productsFilterState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState((prev: IFilterState) => {
      return {
        ...prev,
        searchString: e.target.value,
      };
    });
  };

  const debouncedChangeHandler = useCallback(debounce(handleChange, 500), []);
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-500 outline-none focus:ring-0"
        placeholder="Search"
        onChange={debouncedChangeHandler}
      />
      <div className="absolute right-3 top-1 hidden items-center justify-center rounded-full bg-blue-650 p-1.5 sm:flex sm:w-20">
        <Search />
      </div>
    </div>
  );
};

export default SearchTextField;
