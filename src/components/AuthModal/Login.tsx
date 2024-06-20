import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { TSignupLoginModalTypes } from "./AuthModal.types";

const Login: React.FC<TSignupLoginModalTypes> = ({ setModalType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: any) => {
    const { email, password } = data;
    const userLoginData = {
      email,
      password,
    };
    console.log(userLoginData);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleLogin)} className="">
        <div className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-neutral-700 text-base font-500 text-start"
            >
              Email*
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              name="email"
              placeholder="john@doe.com"
              type="email"
              className="p-4 rounded-xl border-[1px] border-neutral-300 focus:outline-none"
            />
            {errors.email && (
              <span className="text-primary-500 text-start">
                {errors.email.message as string}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-neutral-700 text-base font-500 text-start"
            >
              Password*
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              name="password"
              placeholder="Must be at least 6 Characters"
              type="password"
              className="p-4 rounded-xl border-[1px] border-neutral-300 focus:outline-none"
            />
            {errors.password && (
              <span className="text-primary-500 text-start">
                {errors.password.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-[6px]">
          <button className="text-primary-500 text-sm font-500">
            Forgot Password?
          </button>
        </div>

        <Button className="w-full mt-5" variant="primary">
          Login
        </Button>

        <p className="text-neutral-700 text-sm font-400 text-center mt-8">
          New to Career Hub?{" "}
          <button
            onClick={() => setModalType("Signup")}
            className="text-primary-500"
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
