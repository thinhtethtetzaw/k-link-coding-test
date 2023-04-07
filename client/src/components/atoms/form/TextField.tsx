import { ITextFieldProps } from "@/interfaces";

const TextField = ({
  label,
  placeholder,
  type,
  register,
  errors,
}: ITextFieldProps) => {
  return (
    <div className="w-full">
      <label className="text-sm text-gray-700">{label}</label>
      <input
        {...register}
        type={type}
        className={`mt-1 w-full border p-2 text-gray-500 ${
          errors ? "border-red-300" : "border-gray-300"
        } rounded-lg outline-none focus:ring-0`}
        placeholder={placeholder}
      />
      <small className="text-red-600">{errors?.message}</small>
    </div>
  );
};

export default TextField;
