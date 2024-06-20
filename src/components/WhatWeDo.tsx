import React from "react";

const WhatWeDo = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14 wrapper max-width">
      <h3 className="section-heading">
        What we <span className="highlight">Do?</span>
      </h3>
      <div className="flex gap-20 items-center">
        {[
          {
            heading: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur. Accumsan sed dolor scelerisque massa amet convallis bibendum.",
          },
          {
            heading: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur. Accumsan sed dolor scelerisque massa amet convallis bibendum.",
          },
          {
            heading: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur. Accumsan sed dolor scelerisque massa amet convallis bibendum.",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-2 max-w-80">
            <div className="h-24 w-24 bg-primary-50 rounded-2xl"></div>
            <h4 className="text-2xl font-800 text-secondary-950 mt-5">
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
