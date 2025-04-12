"use client";
import { ICONS } from "@/assets";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type TSocialLinkProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const SocialLink: React.FC<TSocialLinkProps> = ({ register, errors }) => {
  const [open, setOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<{
    icon: string;
    platform: string;
  } | null>(null);
  const [link, setLink] = useState("");
  const [socialLinks, setSocialLinks] = useState<
    { platform: string; icon: string; link: string }[]
  >([]);

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: { icon: string; platform: string }) => {
    setOpen(false);
    setSelectedPlatform(item);
  };

  const handleAddSocialLink = () => {
    if (!selectedPlatform || !link) return;

    setSocialLinks((prev) => [
      ...prev,
      {
        platform: selectedPlatform.platform,
        icon: selectedPlatform.icon,
        link,
      },
    ]);

    // Reset states
    setSelectedPlatform(null);
    setLink("");
  };

  const socialMediaPlatforms = [
    { icon: ICONS.linkedin, platform: "LinkedIn" },
    { icon: ICONS.facebook, platform: "Facebook" },
    { icon: ICONS.instagram, platform: "Instagram" },
    { icon: ICONS.twitter, platform: "Twitter" },
    { icon: ICONS.github, platform: "Github" },
    { icon: ICONS.youtube, platform: "YouTube" },
    { icon: ICONS.dribble, platform: "Dribble" },
    { icon: ICONS.behance, platform: "Behance" },
    { icon: ICONS.medium, platform: "Medium" },
    { icon: ICONS.stackoverflow, platform: "StackOverflow" },
    { icon: ICONS.reddit, platform: "Reddit" },
    { icon: ICONS.tiktok, platform: "TikTok" },
    { icon: ICONS.pinterest, platform: "Pinterest" },
    { icon: ICONS.telegram, platform: "Telegram" },
    { icon: ICONS.discord, platform: "Discord" },
  ];

  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">Add Social Links</h1>

      <div className="flex gap-4 mb-8">
        {/* Dropdown */}
        <div ref={dropDownRef} className="relative font-plus-jakarta-sans">
          <label className="text-neutral-700 font-500">Social Media</label>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="p-4 rounded-xl bg-white border focus:outline-none focus:border-primary-500 flex items-center justify-between w-[210px] mt-2 cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95 text-[#1D293D] font-500"
          >
            {selectedPlatform?.platform ?? "Select Social Media"}
            <Image
              src={ICONS.downArrow}
              alt="dropdown-icon"
              className="size-6"
            />
          </button>

          <div
            className={`${
              open ? "visible bg-white shadow-secondary-button" : "invisible"
            } absolute top-24 z-50 w-[210px] h-56 overflow-y-auto flex flex-col gap-2 p-3 rounded-b-2xl`}
          >
            {socialMediaPlatforms.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(item)}
                className={`rounded-md bg-neutral-100 text-neutral-700 font-medium text-start py-2 px-3 flex items-center gap-3 ${
                  open ? "opacity-100 duration-500" : "opacity-0 duration-150"
                } hover:bg-neutral-200`}
                style={{
                  transform: `translateY(${open ? 0 : (idx + 1) * 10}px)`,
                }}
              >
                <Image src={item.icon} alt={item.platform} className="size-6" />
                {item.platform}
              </button>
            ))}
          </div>
        </div>

        {/* Link input */}
        <div className="flex-1">
          <label className="text-neutral-700 font-500">Profile Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="e.g., https://linkedin.com/in/username"
            className={`p-4 mt-2 rounded-xl bg-white border w-full focus:outline-none focus:border-primary-500 transition duration-300 ${
              errors?.socialLink ? "border-red-500" : "border-neutral-300"
            }`}
          />
        </div>

        {/* Add Button */}
        <button
          type="button"
          onClick={handleAddSocialLink}
          className="size-[55px] rounded-xl mt-[33px] bg-primary-500 flex items-center justify-center active:scale-95 transition"
        >
          <Image src={ICONS.addCircle} alt="add-icon" className="size-7" />
        </button>
      </div>

      {/* Display added links */}
      <div className="flex flex-col gap-4">
        {socialLinks.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex items-center gap-2">
              <Image src={item.icon} alt={item.platform} className="size-6" />
              <span className="font-medium w-[120px]">{item.platform}:</span>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline break-all"
            >
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLink;
