import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // signup(data.email, data.password);
  };
  const { signup } = useAuth();

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} type="email" />
        <input placeholder="Username" {...register("username")} type="text" />
        <input
          placeholder="Password"
          {...register("password")}
          type="password"
        />
        <input
          placeholder="Confirm Password"
          {...register("passwordConfirm")}
          type="password"
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* Already have an account? Log In */}
    </div>
  );
};

export default Register;
