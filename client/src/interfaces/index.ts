export interface ITextFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type: "text" | "placeholder";
  register?: {
    email: string;
    password: string;
  };
}

export interface IButtonProps {
  text: string;
  type: "button" | "submit";
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
