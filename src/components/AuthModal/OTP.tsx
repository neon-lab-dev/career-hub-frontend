import React from 'react';
import Button from '../Button';
import edit from "../../assets/icons/Edit.svg";
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { TSignupLoginModalTypes } from './AuthModal.types';

const OTP: React.FC<TSignupLoginModalTypes> = ({setModalType}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleOtp = (data: any) => {
    const { otp } = data;
    console.log(otp);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOtp)} className="font-plus-jakarta-sans">

        {/* Phone number on whuch the otp sent */}
        <div className='flex gap-1 items-center justify-center'>
          <p className="text-neutral-700 font-Poppins text-sm font-400">OTP Has been sent to +91 96000 16417</p>

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
                minLength: { value: 6, message: "OTP must be 6 digits" },
                maxLength: { value: 6, message: "OTP must be 6 digits" }
              })}
              name="otp"
              placeholder="Enter 6 Digit OTP"
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
          Verify OTP
        </Button>

        <button className="text-primary-500 mt-5">Resend OTP</button>
      </form>
    </div>
  );
};

export default OTP;
