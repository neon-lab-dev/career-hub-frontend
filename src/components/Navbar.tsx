"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal/AuthModal";

const Navbar = () => {
  // For opening the modal
  const [openModal, setOpenModal] = useState<boolean>(false);
  // Modal types
  const [modalType, setModalType] = useState<"Login" | "Signup" | "OTP">("OTP");
  // User type
  const [userType, setUserType] = useState<"Student" | "Employer">("Student");

  const navItems = [
    { text: "Home", href: "#" },
    { text: "Internships", href: "" },
    { text: "Jobs", href: "" },
    { text: "Programs", href: "" },
    { text: "Courses", href: "" },
    { text: "Contact Us", href: "" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center bg-white py-8 px-4">
        <div className="flex items-center gap-8 font-Poppins">
          <span className="text-2xl font-bold">Logo</span>
          <ul className="flex gap-8 text-base text-neutral-600 font-semibold">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-primary-500">
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 font-plus-jakarta-sans">
          <button
            onClick={() => {
              setOpenModal(true);
              setModalType("Login");
            }}
            className="text-base bg-neutral-100 rounded-lg px-6 font-semibold py-2"
          >
            Login
          </button>

          <button
            onClick={() => {
              setOpenModal(true);
              setModalType("Signup");
            }}
            className="text-base bg-primary-500 text-white rounded-lg px-6 font-semibold py-2"
          >
            SignUp
          </button>
        </div>
      </div>

      {openModal && (
        <AuthModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalType={modalType}
          setModalType={setModalType}
          userType={userType}
          setUserType={setUserType}
        />
      )}
    </div>
  );
};
export default Navbar;
