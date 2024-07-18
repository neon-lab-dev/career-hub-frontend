import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import OTP from "./OTP";
import { TModalTypes } from "./AuthModal.types";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import ConfirmationEmail from "./ConfirmationEmail";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { closeAuthModal, setActiveTab } from "@/store/slices/authSlice";

const AuthModal = () => {
  const [email, setEmail] = useState<string>("");
  const { isAuthModalOpen, authModalType, activeTab } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const [confirmationEmail, setConfirmationEmail] = useState<string>("");
  return (
    <div className="mx-auto  flex items-center justify-center m-10">
      <div
        onClick={() => dispatch(closeAuthModal())}
        className={`fixed z-[100] flex items-center justify-center p-10 ${
          isAuthModalOpen ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100 `}
      >
        <div
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(107, 114, 128, 0.5) rgba(255, 255, 255, 0.1)",
          }}
          onClick={(e_) => e_.stopPropagation()}
          className={`font-plus-jakarta-sans w-full max-w-[529px] ${
            authModalType === "OTP"
              ? "h-[375px] overflow-hidden"
              : authModalType === "FORGOT_PASSWORD"
              ? "h-[300px]"
              : authModalType === "CHANGE_PASSWORD"
              ? "h-[400px]"
              : authModalType === "CONFIRMATION_EMAIL"
              ? "h-[200px]"
              : "h-[550px]"
          }
           absolute rounded-2xl bg-white p-6 text-center drop-shadow-2xl overflow-y-auto ${
             isAuthModalOpen
               ? "opacity-1 translate-y-0 duration-300"
               : "translate-y-20 opacity-0 duration-150"
           }`}
        >
          <div>
            <h1 className=" text-secondary-800 text-[28px] font-700 text-center">
              <span className="bg-primary-500 px-2 text-white mr-3">
                {authModalType === "LOGIN"
                  ? "Login"
                  : authModalType === "SIGNUP"
                  ? "Signup"
                  : authModalType === "OTP"
                  ? "OTP"
                  : authModalType === "FORGOT_PASSWORD"
                  ? "Forgot"
                  : authModalType === "CONFIRMATION_EMAIL"
                  ? "Forgot"
                  : authModalType === "CHANGE_PASSWORD"
                  ? "Change"
                  : ""}
              </span>
              {
                authModalType === "OTP"
                  ? "Your Email"
                  : authModalType === "FORGOT_PASSWORD"
                  ? "Password?"
                  : authModalType === "CONFIRMATION_EMAIL"
                  ? "Password?"
                  : authModalType === "CHANGE_PASSWORD"
                  ? "Password"
                  : "to Career Hub"

                // modalType === "OTP" ? "Your Email" : "to Career Hub"
              }
            </h1>
          </div>

          <div className="flex flex-col gap-8 mt-8">
            {authModalType === "LOGIN" || authModalType === "SIGNUP" ? (
              <div>
                {/* Tab btn */}
                <div className="py-3 flex justify-center gap-8 rounded-lg border-[1px] border-secondary-100">
                  <button
                    onClick={() => {
                      dispatch(setActiveTab("STUDENT"));
                    }}
                    className={`text-base font-500 text-center flex-1 ${
                      activeTab === "STUDENT"
                        ? "text-primary-500"
                        : "text-secondary-400"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setActiveTab("EMPLOYER"));
                    }}
                    className={`text-base font-500 text-center flex-1 ${
                      activeTab === "EMPLOYER"
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
            {authModalType === "LOGIN" && <Login />}
            {(authModalType === "SIGNUP" || authModalType === "OTP") && (
              <Signup />
            )}
            {(authModalType === "FORGOT_PASSWORD" ||
              authModalType === "CONFIRMATION_EMAIL") && <ForgotPassword />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
