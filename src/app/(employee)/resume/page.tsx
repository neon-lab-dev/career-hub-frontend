import React from "react";
import Hero from "./_components/Hero";
import Profile from "./_components/Profile";
import EducationComponent from "./_components/EducationComponent";
import Project from "./_components/Project";
import WorkExp from "./_components/WorkExp";
import Certifcation from "./_components/Certifcation";
import Skills from "./_components/Skills";

const Resume = () => {
  return <div>
    <Hero/>
    <Profile/>
    <EducationComponent/>
    <Project/>
    <WorkExp/>
    <Certifcation/>
    <Skills/>
  </div>;
};

export default Resume;
