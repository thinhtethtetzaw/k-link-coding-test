export interface ITextFieldProps {
  label: string;
  placeholder: string;
  type: "text" | "placeholder" | "email" | "password" | "submit";
  register?: any;
  errors: any;
}

export interface IButtonProps {
  text: string;
  type: "button" | "submit";
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  categories: {
    id: number;
    name: string;
  }[];
}

export interface ICartProductProps extends IProductProps {
  qty: number;
}

export interface ILoginUserProps {
  email: string;
  password: string;
}

export interface INumberInputProps {
  count: number;
  productId: number;
}
