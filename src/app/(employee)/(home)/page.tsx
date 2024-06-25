import React from "react";
import HeroComponent from "./_components/HeroComponent";
import LatestJobYouMightLikeComponent from "./_components/LatestJobYouMightLikeComponent";
import LatestInternshipsForYou from "./_components/LatestInternshipsForYouComponent";
import TrendingToday from "../../../components/TrendingCourseToday";
import WhatWeDoComponent from "../../../components/WhatWeDo";
import OurValuableHiringPartners from "@/components/OurValuableHiringPartners";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroComponent />
      <LatestJobYouMightLikeComponent />
      <LatestInternshipsForYou />
      {/* <TrendingToday /> */}
      <OurValuableHiringPartners />
      <WhatWeDoComponent />
    </div>
  );
};

export default HomePage;
