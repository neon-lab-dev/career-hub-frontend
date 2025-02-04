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
            desc: "Medhrplus is an online platform for organisations and for aspirants, where both update their credentials and connect in between from their dedicated dashboards.",
          },
          {
            img:IMAGES.apr,
            heading: "For Aspirants ",
            desc: "Aspirants update their credentials along with the field of interest, we provide them with a dedicated dashboard to apply their desired programs.",
          },
          {
            img:IMAGES.org,
            heading: "For Organisation ",
            desc: "Organisations/employers may post their programs/requirements and get registered aspirants, filtering their details according to the requirements dashboard.",
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
