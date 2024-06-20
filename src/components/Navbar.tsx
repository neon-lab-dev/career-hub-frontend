"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Button from "./Button";
import AuthModal from "./AuthModal/AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

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

  const pfileItems = [
    { text: "My Applications", href: "#" },
    { text: "Edit Resume", href: "" },
    { text: "Edit Preferences", href: "" },
  ];

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  // Function to handle login click
  const handleLoginClick = () => {
    setLoggedIn(true); // Set logged-in state to true
  };

  // Function to handle logout click
  const handleLogoutClick = () => {
    setLoggedIn(false); // Set logged-in state to false
  };

  return (
    <>
      <div className="flex justify-between items-center  bg-white py-6 px-11 max-lg:px-6 wrapper max-width m-auto">
        <div className="flex items-center gap-8 font-Poppins">
          <span className="text-3xl font-bold pr-6">
            <Link href="/">Logo</Link>
          </span>
          <ul className="flex gap-8 text-base text-neutral-600 font-semibold max-lg:hidden font-poppins">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-primary-500">
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4  font-plus-jakarta-sans max-lg:hidden">
          {!loggedIn ? (
            <>
              <Button
                onClick={() => {
                  setOpenModal(true);
                  setModalType("Login");
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
                  <Image src={IMAGES.profile} alt={""} />

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
                    <span className=" font-bold">John Doe</span>
                    <span>wedontgojim@gmail.com</span>
                  </div>
                  <hr />
                  {pfileItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-primary-500 py-1 font-bold"
                    >
                      <Link href={item.href}>
                        <div>{item.text}</div>
                      </Link>
                    </li>
                  ))}
                  <hr />
                  <div className="flex justify-center">
                    <button
                      className=" text-center text-primary-500 text-xl flex justify-center  py-2"
                      onClick={handleLogoutClick}
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
            <Button variant="normal" onClick={handleLoginClick}>
              Register
            </Button>
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
              className=" m-2 text-gray-600 hover:text-gray-900 focus:outline-none"
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
              {pfileItems.map((item, index) => (
                <li key={index} className="hover:text-primary-500 px-2 py-1">
                  <Link href={item.href}>
                    <div>{item.text}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className=" absolute bottom-0 w-full">
              <hr />
              <button className=" text-center text-primary-500 text-xl flex justify-center pl-36 py-4">
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
          userType={userType}
          setUserType={setUserType}
        />
      )}
    </>
  );
};

export default Navbar;
