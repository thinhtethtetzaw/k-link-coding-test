import { IButtonProps } from "@/interfaces";

const Button = ({ text, type, handleClick }: IButtonProps) => {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-blue-650 p-2 text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
