"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Button from "./Button";
import AuthModal from "./AuthModal/AuthModal";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import {
  closeAuthModal,
  openAuthModal,
  setEmployeeProfile,
  setEmployerProfile,
} from "@/store/slices/authSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  handleEmployeeLogoutService,
  handleEmployerLogoutService,
} from "@/api/authentication";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
  const pathname = usePathname();
  const { isAuthModalOpen, activeTab, employerProfile, studentProfile } =
    useAppSelector((state) => state.auth);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: handleEmployeeLogoutService,
    onSuccess: () => {
      toast.success("Logged out successfully");
      queryClient.setQueryData(["student-profile"], null);
      dispatch(setEmployeeProfile(null));
    },
    onError: () => {
      toast.error("An error occurred while logging out!");
    },
  });

  const { mutate: employerMutate, isPending: isEmployerPending } = useMutation({
    mutationFn: handleEmployerLogoutService,
    onSuccess: () => {
      toast.success("Logged out successfully");
      queryClient.setQueryData(["employer-profile"], null);
      dispatch(setEmployerProfile(null));
    },
    onError: () => {
      toast.error("An error occurred while logging out!");
    },
  });

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
          {!pathname.startsWith("/employer") ? (
            // student route
            <>
              {studentProfile ? (
                <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                  <div tabIndex={0} role="button" className="  flex gap-1">
                    <div className="size-10 rounded-full border border-primary-500 text-primary-500 font-bold flex justify-center items-center">
                      <p>{studentProfile.full_name[0]}</p>
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
                      <span className=" font-bold">
                        {studentProfile.full_name}
                      </span>
                      <span>{studentProfile.email}</span>
                    </div>
                    <hr />
                    <hr />
                    <div className="flex justify-center">
                      <button
                        className=" text-center text-primary-500 text-xl flex justify-center py-2 w-full"
                        onClick={() => {
                          mutate();
                        }}
                      >
                        <span className=" text-center font-bold">
                          {isPending ? "Loading..." : "Logout"}
                        </span>
                      </button>
                    </div>
                  </ul>
                </div>
              ) : (
                <>
                  {employerProfile ? (
                    <Link href="/employer">
                      <Button className="py-2"> Dashboard</Button>
                    </Link>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          dispatch(openAuthModal("LOGIN"));
                        }}
                        variant="natural"
                        className="text-base bg-neutral-100 rounded-lg px-6 font-semibold py-2"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(openAuthModal("SIGNUP"));
                        }}
                        variant="normal"
                      >
                        SignUp
                      </Button>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            // employer route
            <>
              {employerProfile ? (
                <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                  <div tabIndex={0} role="button" className="  flex gap-1">
                    <div className="size-10 rounded-full border border-primary-500 text-primary-500 font-bold flex justify-center items-center">
                      <p>{employerProfile?.full_name[0]}</p>
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
                      <span className=" font-bold">
                        {employerProfile?.full_name}
                      </span>
                      <span>{employerProfile?.email}</span>
                    </div>
                    <hr />
                    <hr />
                    <div className="flex justify-center">
                      <button
                        className=" text-center text-primary-500 text-xl flex justify-center py-2 w-full"
                        onClick={() => {
                          employerMutate();
                        }}
                      >
                        <span className=" text-center font-bold">
                          {isEmployerPending ? "Loading..." : "Logout"}
                        </span>
                      </button>
                    </div>
                  </ul>
                </div>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      dispatch(openAuthModal("LOGIN"));
                    }}
                    variant="natural"
                    className="text-base bg-neutral-100 rounded-lg px-6 font-semibold py-2"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(openAuthModal("SIGNUP"));
                    }}
                    variant="normal"
                  >
                    SignUp
                  </Button>
                </>
              )}
            </>
          )}
        </div>
        <div className="relative lg:hidden">
          <div className="flex items-center gap-4">
            <Button variant="normal">Register</Button>
            <button
              onClick={() => {
                setIsMobileSidebarOpen((prev) => !prev);
              }}
              className="block lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Image src={IMAGES.hamburger} alt="Menu" width={24} height={24} />
            </button>
          </div>

          <div
            className={`fixed bg-white w-full h-screen overflow-hidden transition-transform flex flex-col gap-4 top-0 right-0 z-50 lg:hidden pt-4 px-6 ${
              isMobileSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => {
                setIsMobileSidebarOpen(false);
              }}
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
              {activeTab === "STUDENT"
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
                  mutate();
                }}
                className=" text-center text-primary-500 text-xl flex justify-center pl-36 py-4"
              >
                <span className=" text-center font-bold">
                  {isPending ? "Loading..." : "Logout"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isAuthModalOpen && <AuthModal />}
    </>
  );
};

export default Navbar;
