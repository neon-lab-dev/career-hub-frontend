import React from "react";
import HeroComponent from "./_components/HeroComponent";
import LatestJobYouMightLikeComponent from "./_components/LatestJobYouMightLikeComponent";
import LatestInternshipsForYou from "./_components/LatestInternshipsForYouComponent";
import TrendingToday from "./_components/TrendingTodayComponent";
import OurValuableHiringPartnersComponent from "./_components/OurValuableHiringPartnersComponent";
import WhatWeDoComponent from "./_components/WhatWeDoComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroComponent />
      <LatestJobYouMightLikeComponent />
      <LatestInternshipsForYou />
      <TrendingToday />
      <OurValuableHiringPartnersComponent />
      <WhatWeDoComponent />
    </div>
  );
};

export default HomePage;