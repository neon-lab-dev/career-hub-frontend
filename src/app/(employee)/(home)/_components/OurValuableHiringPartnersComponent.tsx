import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import application from "@/assets/icons/applications.svg";
import HiringPartnerLogoComponent from "./HiringPartnerLogoComponent";
const OurValuableHiringPartnersComponent = () => {
  return (
    <div className="bg-primary-50">
      <div className="py-section flex flex-col items-center justify-center gap-14 wrapper max-width">
        <h3 className="section-heading">
          Our Valuable <span className="highlight">Hiring Partners</span>
        </h3>
        <div className="w-full overflow-hidden">
          <Marquee autoFill className="flex items-center justify-center">
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
            <HiringPartnerLogoComponent logo={application} />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OurValuableHiringPartnersComponent;
