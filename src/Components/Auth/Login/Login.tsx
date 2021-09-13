import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { authAPI } from "../../../api";
import "../Auth.scss";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: FormData) => {
    try {
      await authAPI.login(data.email, data.password);
      history.push("/products");
    } catch {
      toast.error("Failed to Log In");
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        <input
          placeholder="Email"
          {...register("email", { required: "You must write your Email" })}
          type="email"
        />
        {errors && errors.email && <span>{errors.email.message}</span>}
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "You must write your password",
            minLength: {
              value: 5,
              message: "Password must have at least 5 characters",
            },
          })}
        />
        {errors && errors.password && <span>{errors.password.message}</span>}
        <button type="submit">Log In</button>
        <Link to="/register">Need an account? Sign Up</Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
