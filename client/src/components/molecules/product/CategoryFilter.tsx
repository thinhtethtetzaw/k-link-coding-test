import { useState } from "react";

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | string>(
    "All"
  );

  const handleClick = (categoryId: number | string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="ml-8 pb-8">
      <div className="flex gap-2.5 overflow-x-scroll scrollbar-hide">
        {["All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, index) => (
          <div
            key={index}
            className={`${
              selectedCategory === num
                ? "bg-blue-650 text-white"
                : "bg-gray-100 text-gray-700 "
            } cursor-pointer whitespace-nowrap rounded-full px-3 py-1 text-sm`}
            onClick={() => handleClick(num)}
          >
            Category {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
