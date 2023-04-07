import { useForm } from "react-hook-form";
import Button from "@/components/atoms/form/Button";
import TextField from "@/components/atoms/form/TextField";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex w-full items-center justify-center py-10 lg:w-1/2 lg:py-0">
      <div className="md:w-1/2">
        <div className="mb-10 space-y-3">
          <h5 className="text-3xl font-semibold text-gray-900">Log in</h5>
          <p className="text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            register={register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
            label="Email"
            errors={errors.email}
          />
          <TextField
            register={register("password", { required: true })}
            type="password"
            placeholder="Enter your password"
            label="Password"
            errors={errors.password}
          />
          <Button type="submit" text="Sign in" />
        </form>
      </div>
    </div>
  );
};

export default Form;
