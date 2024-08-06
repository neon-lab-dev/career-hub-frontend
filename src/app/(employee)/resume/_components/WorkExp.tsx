import React from 'react';
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import ResumeWorkExpModel from './ResumeWorkExpModel';

interface WorkExperience {
  company: string;
  description: string;
  endDate: string;
  location: string;
  startDate: string;
  title: string;
}

interface WorkExpProps {
  experiences?: WorkExperience[]; // Optional prop
}

const WorkExp: React.FC<WorkExpProps> = ({ experiences = [] }) => {
  return (
    <div className="pt-2 pb-10 bg-secondary-50 font-plus-jakarta-sans">
      <div className="max-width flex">
        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-[120px] max-lg:mx-10 max-md:mx-4 text-center">
          <div className="flex justify-between px-2 py-3 rounded-xl">
            <div className="flex gap-4 items-center">
              <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Work Experience</span>
            </div>
            <ResumeWorkExpModel />
          </div>
          <hr className='pb-10 mx-4' />
          {experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <div key={index} className="flex justify-between max-md:flex-col items-start border-2 border-neutral-100 p-6 rounded-xl mb-4">
                <div className="flex gap-4 items-center">
                  <div className="font-plus-jakarta-sans">
                    <div className="flex gap-2">
                      <div className='flex flex-col items-start'>
                        <span className="text-neutral-950 text-xl font-600 max-md:text-sm">{experience.title} @ {experience.company}</span>
                        <span className='text-sm text-neutral-500 max-md:text-xs'>{new Date(experience.startDate).toLocaleDateString()} - {new Date(experience.endDate).toLocaleDateString()} | {experience.location}</span>
                      </div>
                    </div>
                    <p className='text-neutral-600 text-md max-md:text-sm px-4 py-2'>{experience.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-neutral-600">No work experience available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
