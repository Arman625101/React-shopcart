import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "../Auth.scss";

const Register = () => {
  const { signup, currentUser } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      await signup({
        email: data.email,
        password: data.password,
        username: data.username,
        avatar: "fqfqxxxxx",
      });
    } catch {
      toast.error("Failed to create an account");
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <input
          placeholder="Email"
          {...register("email", { required: "You must write your Email" })}
          type="email"
        />
        {errors && errors.email && <span>{errors.email.message}</span>}
        <input
          placeholder="Username"
          {...register("username", {
            required: "You must specify a username",
            pattern: {
              value:
                "^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$",
              message: "Username is not Vaild Ex. Arman01",
            },
          })}
          type="text"
        />
        {errors && errors.username && <span>{errors.username.message}</span>}
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 5,
              message: "Password must have at least 5 characters",
            },
          })}
        />
        {errors && errors.password && <span>{errors.password.message}</span>}
        <input
          placeholder="Confirm Password"
          {...register("passwordConfirm", {
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          type="password"
        />
        {errors && errors.passwordConfirm && (
          <span>{errors.passwordConfirm.message}</span>
        )}
        <button type="submit">Sign Up</button>
        <Link to="/login">Already have an account? Log In</Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
