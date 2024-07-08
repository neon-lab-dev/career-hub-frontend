import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from "../Button";

type TForgotPasswordTypes = {
    setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP" | "ForgotPassword" | "ChangePassword" | "ConfirmationEmail">>;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    // email : string
  };

const ChangePassword : React.FC<TForgotPasswordTypes> = ({setModalType, setOpenModal}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const handleChangePassword = async (data : any) => {
        const changePasswordData = {
          password: data.password,
          confirmPassword: data.confirmPassword,
        };
        console.log(changePasswordData)
    };

    const password = watch("password");


    return (
        <div>
            <form onSubmit={handleSubmit(handleChangePassword)} className="">
        <div className="flex flex-col gap-5">
          {/* New Password */}
          

          {/* New Password* */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-neutral-700 text-base font-500 text-start"
            >
             New Password*
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be greater than 8 characters",
                },
              })}
              placeholder="Password must be greater than 8 characters"
              type="password"
              className="p-4 rounded-xl border-[1px] border-neutral-300 focus:outline-none"
            />
            {errors.password && (
              <span className="text-primary-500 text-start">
                {errors.password.message as string}
              </span>
            )}
          </div>

          {/* Confirm New Password* */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="confirmPassword"
              className="text-neutral-700 text-base font-500 text-start"
            >
              Confirm New Password*
            </label>
            <input
              {...register("confirmPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password Password must be greater than 8 characters",
                },
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              placeholder="Password must be greater than 8 characters"
              type="password"
              className="p-4 rounded-xl border-[1px] border-neutral-300 focus:outline-none"
            />
            {errors.confirmPassword && (
              <span className="text-primary-500 text-start">
                {errors.confirmPassword.message as string}
              </span>
            )}
          </div>
        </div>

        <Button className="w-full mt-5" variant="primary">
        {
            loading ? 
            "Changing Password..."
            :
            "Change Password"
          }
          
        </Button>
      </form>
        </div>
    );
};

export default ChangePassword;