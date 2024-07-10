// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Button from "./Button";
import AuthModal from "./AuthModal/AuthModal";
import { deleteUser, getUserDataFromLocalStorage } from "@/api/authentication";
import api from "./../api/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";

const Navbar = () => {
  // For opening the modal
  const [openModal, setOpenModal] = useState<boolean>(false);
  // Modal types
  const [modalType, setModalType] = useState<
    | "Login"
    | "Signup"
    | "OTP"
    | "ForgotPassword"
    | "ChangePassword"
    | "ConfirmationEmail"
  >("OTP");
  // User type
  // const [userType, setUserType] = useState<"Student" | "Employer">("Student");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage menu open/close
  // const [loggedIn, setLoggedIn] = useState(false);

  const { user, logout, fetchProfile, userType, setUserType } = useAuth();

  console.log(user?.full_name);

  // const user = getUserDataFromLocalStorage();

  const handleEmployeeLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      setIsOpen(!isOpen);

      // localStorage.setItem('userType', null)
      console.log(user);
    } catch (error) {
      toast.error("Log out failed! Please try again.");
    }
  };

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Internships", href: "/internships" },
    { text: "Jobs", href: "/jobs" },
    { text: "Programs", href: "" },
    { text: "Courses", href: "" },
    { text: "Contact Us", href: "" },
  ];

  const pfileItems = [
    { text: "My Applications", href: "/applications" },
    { text: "Edit Resume", href: "" },
    { text: "Edit Preferences", href: "" },
  ];

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  // // Function to handle login click
  // const handleLoginClick = () => {
  //   setLoggedIn(true); // Set logged-in state to true
  // };

  // // Function to handle logout click
  // const handleLogoutClick = () => {
  //   setLoggedIn(false); // Set logged-in state to false
  // };

  return (
    <>
      <div className="flex justify-between items-center  bg-white py-6  max-lg:px-4 wrapper max-width m-auto">
        <div className="flex items-center gap-8 font-Poppins">
          <span className="text-3xl font-bold pr-6">
            <Link href="/">Logo</Link>
          </span>
          <ul className="flex gap-8 max-xl:gap-2 text-base text-neutral-600 font-semibold max-lg:hidden font-poppins">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-primary-500 transition duration-300 max-xl:text-[13px]"
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4  font-plus-jakarta-sans max-lg:hidden">
          {!user ? (
            <>
              <Button
                onClick={() => {
                  setOpenModal(true);
                  setModalType("Login");
                  // setModalType("Login");
                }}
                variant="natural"
                className="text-base bg-neutral-100 rounded-lg px-6 font-semibold py-2"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  setOpenModal(true);
                  setModalType("Signup");
                }}
                variant="normal"
              >
                SignUp
              </Button>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                <div tabIndex={0} role="button" className="  flex gap-1">
                  <div className="size-10 rounded-full border border-primary-500 text-primary-500 font-bold flex justify-center items-center">
                    <p>
                      {user?.full_name
                        .split(" ")
                        .map((letter: string) => letter.charAt(0))
                        .join("")}
                    </p>
                  </div>
                  {/* <Image src={IMAGES.profile} alt={""} /> */}

                  <Image
                    src={IMAGES.down}
                    alt={""}
                    className=" hover:rotate-180 transition-transform duration-00"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] mt-4 menu  shadow bg-base-100 rounded-box w-80"
                >
                  <div className="flex flex-col px-2 py-2">
                    <span className=" font-bold">{user?.full_name}</span>
                    <span>{user?.email}</span>
                  </div>
                  <hr />
                  {userType === "Student"
                    ? pfileItems.map((item, index) => (
                        <li
                          key={index}
                          className="hover:text-primary-500 py-1 font-bold"
                        >
                          <Link href={item.href}>
                            <div>{item.text}</div>
                          </Link>
                        </li>
                      ))
                    : ""}

                  <hr />
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleEmployeeLogout()}
                      className=" text-center text-primary-500 text-xl flex justify-center  py-2"
                      // onClick={handleLogoutClick}
                    >
                      <span className=" text-center font-bold">Logout</span>
                    </button>
                  </div>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="relative lg:hidden">
          <div className="flex items-center gap-4">
            <Button variant="normal">Register</Button>
            <button
              onClick={toggleMenu}
              className="block lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Image src={IMAGES.hamburger} alt="Menu" width={24} height={24} />
            </button>
          </div>

          <div
            className={`fixed bg-white w-full h-screen overflow-hidden transition-transform flex flex-col gap-4 top-0 right-0 z-50 lg:hidden pt-4 px-6 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={toggleMenu}
              className=" mx-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <Image src={IMAGES.close} alt="Close" width={24} height={24} />
            </button>
            <div className="flex  items-center gap-1 py-1">
              <Image src={IMAGES.profile} alt={""} />
              <div className="flex flex-col">
                <span className=" font-bold">John Doe</span>
                <span>wedontgojim@gmail.com</span>
              </div>
            </div>
            <hr />
            <ul className=" text-[20px] text-neutral-600 font-semibold">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-primary-500 px-2 py-1">
                  <Link href={item.href}>
                    <div>{item.text}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
            <ul className="text-[20px] text-neutral-600 font-semibold">
              {userType === "Student"
                ? pfileItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-primary-500 py-1 font-bold"
                    >
                      <Link href={item.href}>
                        <div>{item.text}</div>
                      </Link>
                    </li>
                  ))
                : ""}
            </ul>
            <div className=" absolute bottom-0 w-full">
              <hr />
              <button
                onClick={() => {
                  console.log("hello");
                }}
                className=" text-center text-primary-500 text-xl flex justify-center pl-36 py-4"
              >
                <span className=" text-center font-bold">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <AuthModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalType={modalType}
          setModalType={setModalType}
        />
      )}
    </>
  );
};

export default Navbar;
