import React, { useState } from "react";
import Button from "../Button";
import edit from "../../assets/icons/Edit.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import api from "@/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { closeAuthModal, setAuthModalType } from "@/store/slices/authSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  handleVerifyEmployeeOTPService,
  handleVerifyEmployerOTPService,
} from "@/api/authentication";

const OTP = ({
  mail,
  handleResendOTP,
  isResendLoading,
}: {
  mail: string;
  handleResendOTP: Function;
  isResendLoading: boolean;
}) => {
  const { activeTab } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const employee = useMutation({
    mutationFn: handleVerifyEmployeeOTPService,
    onSuccess: (msg) => {
      toast.success(msg);
      queryClient
        .invalidateQueries({
          queryKey: ["student-profile"],
        })
        .then(() => {
          router.push("/getting-started");
          dispatch(closeAuthModal());
        });
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });

  const employer = useMutation({
    mutationFn: handleVerifyEmployerOTPService,
    onSuccess: (msg) => {
      toast.success(msg);
      queryClient
        .invalidateQueries({
          queryKey: ["employer-profile"],
        })
        .then(() => {
          router.push("/employer/getting-started");
          dispatch(closeAuthModal());
        });
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });

  const onSubmit = async (data: any) => {
    if (activeTab === "STUDENT") {
      employee.mutate({
        otp: Number(data.otp),
        email: mail,
      });
    } else {
      employer.mutate({
        otp: Number(data.otp),
        email: mail,
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-plus-jakarta-sans"
      >
        {/* Phone number on whuch the otp sent */}
        <div className="flex gap-1 items-center justify-center">
          <p className="text-neutral-700 font-Poppins text-sm font-400">
            OTP Has been sent to {mail}
          </p>

          {/* Edit phone button */}
          <button
            onClick={() => {
              dispatch(setAuthModalType("SIGNUP"));
            }}
          >
            <Image src={edit} alt="edit-button" />
          </button>
        </div>

        <div className="flex flex-col gap-5 mt-8">
          {/* OTP Input */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="otp"
              className="text-neutral-700 text-base font-500 text-start"
            >
              Enter the OTP to verify
            </label>
            <input
              {...register("otp", {
                required: "Enter the OTP!",
              })}
              name="otp"
              placeholder="Enter OTP"
              type="number"
              className="p-4 rounded-xl border-[1px] border-neutral-300 focus:outline-none"
            />
            {errors.otp && (
              <span className="text-primary-500 text-start">
                {errors.otp.message as string}
              </span>
            )}
          </div>
        </div>

        <Button className="w-full mt-5" variant="primary">
          {employee.isPending || employer.isPending
            ? "Loading..."
            : "Verify OTP"}
        </Button>

        <button
          type="button"
          className="text-primary-500 mt-5"
          onClick={() => handleResendOTP()}
        >
          {isResendLoading ? "Loading..." : "Resend OTP"}
        </button>
      </form>
    </div>
  );
};

export default OTP;
