import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import Button from "../Button";

type TForgotPasswordTypes = {
    setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP" | "ForgotPassword" | "ChangePassword" | "ConfirmationEmail">>;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    setConfirmationEmail : Dispatch<SetStateAction<string>>
  };

const ForgotPassword : React.FC<TForgotPasswordTypes> = ({setModalType, setOpenModal, setConfirmationEmail}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleForgotPassword = async (data : any) => {
        setConfirmationEmail(data.email)
        const forgitPasswordData = {
            email: data.email,
        };
        console.log(forgitPasswordData)
        setModalType("ConfirmationEmail");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleForgotPassword)} className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-neutral-700 text-base font-500 text-start"
            >
              Enter Registered Email ID
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

            <Button
            className="w-full mt-5" variant="primary">
            Send Confirmation Email
          
        </Button>
          </form>
        </div>
    );
};

export default ForgotPassword;