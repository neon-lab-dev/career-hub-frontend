"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  jobTitle: string;
};

const JobShareButton = ({ jobTitle }: Props) => {
  const shareUrl = () => {
    let path: string = "";
    if (typeof window !== "undefined") {
      path = window.location.href;
    }
    if (navigator.share) {
      navigator.share({
        title: jobTitle,
        text: "Check out this job",
        url: path,
      });
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(path).then(() => {
          alert("Link copied to clipboard");
        });
      } else {
        alert("Cannot share link. Please copy the link manually.");
      }
    }
  };
  return (
    <Button
      variant="muted"
      onClick={shareUrl}
      className="rounded-full h-[54px] w-[54px] !p-0 flex items-center justify-center"
    >
      <Image src={ICONS.share} alt="Share" className="h-[24px] w-[24px]" />
    </Button>
  );
};

export default JobShareButton;
