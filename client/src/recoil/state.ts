import { atom } from "recoil";
import { ICartProductProps, IFilterState } from "@/interfaces";

export const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    email: "",
    name: "",
  },
});

export const showOrderDetailState = atom({
  key: "showOrderDetailState",
  default: false,
});

export const cartState = atom<ICartProductProps[]>({
  key: "cartState",
  default: [],
});

export const productsFilterState = atom<IFilterState>({
  key: "productsFilterState",
  default: {
    searchString: "",
    categoryId: "",
  },
});
