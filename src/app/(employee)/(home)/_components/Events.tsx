import React from "react";
import EventCard from "./EventCard";
import NoDataFound from "@/components/NoDataFound";
import SectionHeading from "@/components/Reusable/SectionHeading/SectionHeading";
import Image from "next/image";
import { IMAGES } from "@/assets";

const Events = () => {
  const events = [1, 2, 3, 4, 5, 5];
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14 bg-gradient-to-r from-slate-50 to-blue-50 py-10 relative">
      <Image
        src={IMAGES.linnerBg}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 z-0 h-full w-full opacity-20"
      />
      <SectionHeading
        highlightedText="Events"
        normalText="Happening for you!"
        align="left"
      />
      {events?.length < 1 ? (
        <NoDataFound message="No Events Available" />
      ) : (
        <div className="w-full overflow-hidden wrapper-left z-10">
          <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
            {events?.map((event, index: number) => (
              <div key={index} className="carousel-item">
                <EventCard
                  wrapperClassName=""
                  // {...event}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
