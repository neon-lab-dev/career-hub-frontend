import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14 wrapper max-width">
      <h3 className="section-heading">
        What we <span className="highlight">Do?</span>
      </h3>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        {[
          {
            img:IMAGES.org,
            heading: "Platform provider ",
            desc: "The Careehub is a platform for organisations and aspirants, where both update their credentials and connect in between from their dedicated dashboards.",
          },
          {
            img:IMAGES.apr,
            heading: "For Aspirants ",
            desc: "They update their Credentials along with the field of interest, we provide them with a dedicated dashboard to apply their desired program.",
          },
          {
            img:IMAGES.org,
            heading: "For Organisation ",
            desc: "Employers may post their requirements and get registered aspirants along with details, also search for aspirants from the dashboard.",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1 max-w-80">
            <div className="rounded-2xl w-32 h-32">
              <Image src={item.img} alt="org" />
            </div>
            <h4 className="text-2xl font-800 text-secondary-950">
              {item.heading}
            </h4>
            <p className="text-secondary-950 text-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
