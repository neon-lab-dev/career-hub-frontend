import React from "react";
import Image from "next/image";
import closeIcon from "../../assets/icons/Close-Circle-modal.svg";
import Login from "./Login";
import Signup from "./Signup";
import OTP from "./OTP";
import { TModalTypes } from "./AuthModal.types";

const AuthModal: React.FC<TModalTypes> = ({
  openModal,
  setOpenModal,
  modalType,
  setModalType,
  userType,
  setUserType,
}) => {
  return (
    <div className="mx-auto  flex items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100 `}
      >
        <div
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(107, 114, 128, 0.5) rgba(255, 255, 255, 0.1)",
          }}
          onClick={(e_) => e_.stopPropagation()}
          className={`font-plus-jakarta-sans w-[529px] ${
            modalType === "OTP"
              ? "h-[452px] overflow-hidden"
              : "h-[575px] overflow-y-auto"
          } absolute rounded-2xl bg-white p-6 text-center drop-shadow-2xl  ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >

          {/* Close button */}
          <div
            onClick={() => setOpenModal(false)}
            className="flex justify-end cursor-pointer"
          >
            <Image src={closeIcon} alt="close-btn" className="w-6 h-6" />
          </div>


          {/* Auth modal heading */}
          <div>
            <h1 className=" text-secondary-800 text-[28px] font-700 text-center mt-8">
              <span className="bg-primary-500 px-2 text-white mr-3">
                {modalType === "Login"
                  ? "Login"
                  : modalType === "Signup"
                  ? "Signup"
                  : modalType === "OTP" && "Verify"}
              </span>
              {modalType === "OTP" ? "Your Number" : "to Career Hub"}
            </h1>
          </div>

          <div className="flex flex-col gap-8 mt-8">
            {modalType === "Login" || modalType === "Signup" ? (
              <div>
                {/* Tab btn */}
                <div className="py-3 flex justify-center gap-8 rounded-lg border-[1px] border-secondary-100">
                  <button
                    onClick={() => setUserType("Student")}
                    className={`text-base font-500 text-center flex-1 ${
                      userType === "Student"
                        ? "text-primary-500"
                        : "text-secondary-400"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setUserType("Employer")}
                    className={`text-base font-500 text-center flex-1 ${
                      userType === "Employer"
                        ? "text-primary-500"
                        : "text-secondary-400"
                    }`}
                  >
                    Employer
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            {modalType === "Login" ? (
              <Login setModalType={setModalType} />
            ) : modalType === "Signup" ? (
              <Signup setModalType={setModalType} />
            ) : (
              <OTP setModalType={setModalType} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
