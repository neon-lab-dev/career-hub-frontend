import React, { useState } from 'react';
import Button from '../Button';
import edit from "../../assets/icons/Edit.svg";
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Dispatch, SetStateAction } from "react";
import api from '@/api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useAuth } from '@/providers/AuthProvider';

type TLoginModalTypes = {
  setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP">>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  email : string
};

const OTP: React.FC<TLoginModalTypes> = ({setModalType, email, setOpenModal}) => {
  const { userType } = useAuth();
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const router = useRouter();

  const handleOtp = async (data: any) => {
    const { otp } = data;

    setLoading(true)
    try {
      const apiEndpoint = userType === "Student" ? api.employeeOTPVerify : api.employerOtpVerify;
      const response = await axios.post(apiEndpoint, { email, otp }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data)
      if (response.data.success) {
        router.push('/')
        setModalType("Login")
        toast.success('Account created successfully!! Please login.')
        setLoading(false)
      } else {
        toast.error("Enter correct OTP.");
      }
    } catch (error:unknown) {
      toast.error(error.response.data.message);
      setLoading(false)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOtp)} className="font-plus-jakarta-sans">

        {/* Phone number on whuch the otp sent */}
        <div className='flex gap-1 items-center justify-center'>
          <p className="text-neutral-700 font-Poppins text-sm font-400">OTP Has been sent to {email}</p>

          {/* Edit phone button */}
          <button onClick={() => setModalType("Signup")}>
            <Image src={edit} alt='edit-button' />
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
                minLength: { value: 5, message: "OTP must be 4 digits" },
                maxLength: { value: 5, message: "OTP must be 4 digits" }
              })}
              name="otp"
              placeholder="Enter 5 Digit OTP"
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
          {
            loading ? 
            "Verifying OTP..."
            :
            "Verify OTP"
          }
          
        </Button>

        <button className="text-primary-500 mt-5">Resend OTP</button>
      </form>
    </div>
  );
};

export default OTP;
