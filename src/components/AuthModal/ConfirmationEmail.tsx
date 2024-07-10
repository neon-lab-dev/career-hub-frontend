"use client";

import Image from "next/image";
import React from "react";
import edit from "../../assets/icons/Edit.svg";
import { useAppDispatch } from "@/hooks/store";
import { setAuthModalType } from "@/store/slices/authSlice";

const ConfirmationEmail = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <p className="text-neutral-700 font-Poppins text-[18px] font-400">
          Confirmation Email Has been sent to
        </p>

        {/* Edit phone button */}
        <button
          onClick={() => {
            dispatch(setAuthModalType("LOGIN"));
          }}
          className="flex items-center gap-[3px]"
        >
          {/* {confirmationEmail} */}
          <Image src={edit} alt="edit-button" />
        </button>
      </div>
    </div>
  );
};

export default ConfirmationEmail;
