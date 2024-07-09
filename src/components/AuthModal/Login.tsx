// @ts-nocheck
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { TSignupLoginModalTypes } from "./AuthModal.types";
import axios from "axios";
import api from "@/api";
import { setToLocalStorage } from "@/api/authentication";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";


type TLoginModalTypes = {
  setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP" | "ForgotPassword" | "ChangePassword" | "ConfirmationEmail">>;
  setOpenModal : Dispatch<SetStateAction<boolean>>;
};

const Login: React.FC<TLoginModalTypes> = ({ setModalType, setOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const { login, fetchProfile, userType } = useAuth();
  console.log(userType)

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (loginData: any) => {
  
    setLoading(true)
    try{
      const apiEndpoint = userType === "Student" ? api.employeeLogin : api.employerLogin;
      const {data} = await axios.post(apiEndpoint, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      console.log(data)
      if(data.success){
        toast.success(`Welcome back ${data.user.full_name}`)
        // login(data.user);
        setToLocalStorage(data.user.email)
        setLoading(false)
        setOpenModal(false)
        if(userType === "Student"){
          router.push('/');
        }else{
          router.push('/employer/home');
        }
        localStorage.setItem('userType', userType);
        await fetchProfile();


        // try {
        //   const response = await axios.get(api.employeeProfile, {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     withCredentials: true,
        //   })
        //   setUserData(response.data.user);
          
        // } catch (error) {
        //   console.error("Error fetching /me:", error);
        //   toast.error("Failed to fetch user details");
        // }

      }
    }catch(error : any){
      toast.error(error.response?.data?.message || 'Login failed');
      setLoading(false);
    }
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
          <p onClick={() => setModalType("ForgotPassword")} className="text-primary-500 text-sm font-500 cursor-pointer">
            Forgot Password?
          </p>
        </div>

        <Button className="w-full mt-5" variant="primary">
        {
            loading ? 
            "Login In..."
            :
            "Login"
          }
          
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
