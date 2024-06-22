import React from "react";
import Marquee from "react-fast-marquee";
import application from "@/assets/icons/applications.svg";
import HiringPartnerLogo from "./HiringPartnerLogo";

const OurValuableHiringPartners = () => {
  return (
    <div className="bg-primary-50">
      <div className="py-section flex flex-col items-center justify-center gap-14 max-width">
        <h3 className="section-heading">
          Our Valuable <span className="highlight">Hiring Partners</span>
        </h3>
        <div className="w-full overflow-hidden">
          <Marquee autoFill className="flex items-center justify-center">
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
            <HiringPartnerLogo logo={application} />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OurValuableHiringPartners;
