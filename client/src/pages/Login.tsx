import About from "@/components/organisms/login/About";
import Form from "@/components/organisms/login/Form";

const Login = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <About />
      <Form />
    </div>
  );
};

export default Login;
