import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // Define the array of other links
  const otherLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Contact us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];
  return (
    <div className="bg-secondary-900 font-Poppins">
      <div className="py-10 max-width m-auto">
        <div className="flex justify-between max-lg:flex-col mx-[160px] max-lg:mx-10 max-lg:gap-12">
          <div className="w-[400px] max-lg:w-[250px] flex flex-col gap-4 text-white">
            <Image src={IMAGES.careerHublogo} alt="logo" className=" w-64" />
            <p className="text-white">
              Email : <a href="mailto:infomedhrplus@gmail.com" className="hover:underline">infomedhrplus@gmail.com</a> 
            </p>

            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/profile.php?id=61572524423643" target="_blank" ><Image src={ICONS.facebook} alt="facebook-icon" className="size-8" /></a>
              <a href="https://www.instagram.com/medhrplus/" target="_blank" ><Image src={ICONS.instagram} alt="facebook-icon" className="size-8" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-poppins">
            <span className="text-white font-semibold text-[22px]">
              Other Links
            </span>
            <ul className="text-secondary-400 text-[22px] font-semibold flex flex-col gap-2">
              {/* Using map to render other links */}
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
