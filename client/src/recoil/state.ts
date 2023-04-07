import { atom } from "recoil";
import { ICartProductProps } from "@/interfaces";

export const showOrderDetailState = atom({
  key: "showOrderDetailState",
  default: false,
});

export const cartState = atom<ICartProductProps[]>({
  key: "cartState",
  default: [],
});
