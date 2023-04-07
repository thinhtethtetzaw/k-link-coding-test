import { ITextFieldProps } from "@/interfaces";

const TextField = ({ label, placeholder, type, register }: ITextFieldProps) => {
  return (
    <div className="w-full">
      <label className="text-sm text-gray-700">{label}</label>
      <input
        {...register}
        type={type}
        className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-500 outline-none focus:ring-0"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
