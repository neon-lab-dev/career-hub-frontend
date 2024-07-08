import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
import edit from "../../assets/icons/Edit.svg";

type TConfirmationEmailTypes = {
    setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP" | "ForgotPassword" | "ChangePassword" | "ConfirmationEmail">>;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    confirmationEmail : string
  };

const ConfirmationEmail : React.FC<TConfirmationEmailTypes> = ({setModalType, setOpenModal, confirmationEmail}) => {
    return (
        <div>
            <div className='flex flex-col gap-1 items-center justify-center'>
          <p className="text-neutral-700 font-Poppins text-[18px] font-400">Confirmation Email Has been sent to</p>

          {/* Edit phone button */}
          <button onClick={() => setModalType("ForgotPassword")} className="flex items-center gap-[3px]">
          {confirmationEmail}
            <Image src={edit} alt='edit-button' />
          </button>
        </div>
        </div>
    );
};

export default ConfirmationEmail;