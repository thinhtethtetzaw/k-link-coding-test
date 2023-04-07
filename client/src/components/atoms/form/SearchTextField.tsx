import { Search } from "@/assets/icons";

const SearchTextField = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 p-2.5 text-gray-500 outline-none focus:ring-0"
        placeholder="Search"
      />
      <div className="absolute right-3 top-1 hidden items-center justify-center rounded-full bg-blue-650 p-1.5 sm:flex sm:w-20">
        <Search />
      </div>
    </div>
  );
};

export default SearchTextField;
