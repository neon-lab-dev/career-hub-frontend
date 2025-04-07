import React from "react";
import HeroComponent from "./_components/HeroComponent";
import LatestInternshipsForYou from "./_components/LatestInternshipsForYouComponent";
import TrendingToday from "../../../components/TrendingCourseToday";
import WhatWeDoComponent from "../../../components/WhatWeDo";
import OurValuableHiringPartners from "@/components/OurValuableHiringPartners";
import SkillProgrammes from "./_components/SkillProgrammes";
import AvailableCourses from './_components/AvailableCourses';
import LatestJobs from "./_components/LatestJobs";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroComponent />
      <LatestJobs />
      <TrendingToday />
      <SkillProgrammes/>
      <AvailableCourses/>
      <LatestInternshipsForYou />
      <OurValuableHiringPartners />
      <WhatWeDoComponent />
    </div>
  );
};

export default HomePage;
