import React from "react";
import SearchField from "./SearchFieldComponent";

const HeroComponent = () => {
  return (
    <div className="pt-44 pb-28 bg-secondary-50">
      <div className="max-width flex flex-col gap-28">
        <div className="flex flex-col items-center gap-5 justify-center text-center">
          <h1 className="text-secondary-950 text-6xl font-700 leading-[120%] tracking-[-1.28px]">
            <span>Start your</span>{" "}
            <span className="highlight text-white">Health Career</span> Today{" "}
            <br />
            with Top Internships and Jobs!
          </h1>
          <p className="text-secondary-600 max-w-3xl text-2xl leading-[126%]">
            Find the best opportunities in the health industry. From internships
            to full-time jobs, kickstart your career with us.
          </p>
          <SearchField />
        </div>
        <div className="flex bg-white rounded-3xl py-8 px-12 gap-28 items-center max-w-fit m-auto">
          {[
            {
              value: "10k+",
              label: "Companies Hiring",
            },
            {
              value: "100k+",
              label: "Registered Applicants",
            },
            {
              value: "1000+",
              label: "Registered Organizations",
            },
            {
              value: "600k+",
              label: "Learners",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2"
            >
              <h4 className="text-4xl font-800 bg-landing-stats-heading">
                {item.value}
              </h4>
              <span className="text-woodsmoke-800 font-500 text-xl">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
