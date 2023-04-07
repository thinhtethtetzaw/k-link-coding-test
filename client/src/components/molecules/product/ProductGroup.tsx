import { Fragment } from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    id: 1,
    name: "Couple Shoes 2021 New One Man and One Woman Spring  1",
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: 1000,
    category: {
      id: 1,
      name: "Category 1",
    },
  },
  {
    id: 2,
    name: "Couple Shoes 2021 New One Man and One Woman Spring  2",
    img: "https://media.istockphoto.com/id/1441825067/photo/pair-of-sneakers-on-pink-background-close-up-side-view.jpg?s=170667a&w=0&k=20&c=ys4G06IFj3awcPTLXHcRhy-D4p0ppggvD4r1GYWgm-8=",
    price: 2000,
    category: {
      id: 2,
      name: "Category 2",
    },
  },
  {
    id: 3,
    name: "Couple Shoes 2021 New One Man and One Woman Spring  3",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    category: {
      id: 3,
      name: "Category 3",
    },
  },
  {
    id: 4,
    name: "Couple Shoes 2021 New One Man and One Woman Spring  4",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    category: {
      id: 4,
      name: "Category 4",
    },
  },
  {
    id: 5,
    name: "Couple Shoes 2021 New One Man and One Woman Spring  5",
    img: "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    category: {
      id: 5,
      name: "Category 5",
    },
  },
];

const ProductGroup = () => {
  return (
    <div className="grid h-[77.4vh] grid-cols-1 gap-3 overflow-y-scroll p-8 pb-4 pt-0 scrollbar-hide sm:grid-cols-2 xl:grid-cols-4">
      {data.map((item, index) => (
        <Fragment key={index}>
          <ProductCard
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            category={item.category}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default ProductGroup;
