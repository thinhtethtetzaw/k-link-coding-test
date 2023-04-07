import { atom } from "recoil";
import { ICartProductProps } from "@/interfaces";

export const orderDetailState = atom({
  key: "orderDetailState",
  default: false,
});

export const cartState = atom<ICartProductProps[]>({
  key: "cartState",
  default: [],
});
