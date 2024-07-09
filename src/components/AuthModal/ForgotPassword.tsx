import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleSendResetPasswordEmailService } from "@/api/authentication";

type TForgotPasswordTypes = {
  setModalType: Dispatch<
    SetStateAction<
      | "Login"
      | "Signup"
      | "OTP"
      | "ForgotPassword"
      | "ChangePassword"
      | "ConfirmationEmail"
    >
  >;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setConfirmationEmail: Dispatch<SetStateAction<string>>;
};

const ForgotPassword: React.FC<TForgotPasswordTypes> = ({
  setModalType,
  setOpenModal,
  setConfirmationEmail,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string }) => {
      setConfirmationEmail(data.email);
      return handleSendResetPasswordEmailService(data);
    },
    onSuccess: () => {
      setModalType("ConfirmationEmail");
    },
    onError: (error: string) => {
      toast.error(error);
    },
    onSettled: () => {},
  });

  const onSubmit = async (data: any) => {
    mutate(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[6px]"
      >
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

        <Button className="w-full mt-5" variant="primary">
          {isPending ? "Sending Email..." : "Send Confirmation Email"}
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
