"use client";
import { getAllSkillProgrammes } from "@/api/skillProgrammes";
import { ISkill } from "@/app/admin/(pages)/skill-programmes/page";
import NoDataFound from "@/components/NoDataFound";
import SectionHeading from "@/components/Reusable/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

const SkillProgrammes = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  
  const { isLoading, data } = useQuery({
    queryKey: ["skillprogrammes"],
    queryFn: getAllSkillProgrammes,
  });
  console.log(data)

  const handleOpenVideoModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setOpenVideoModal(true);
  };

  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <SectionHeading
        highlightedText="Skill"
        normalText="Programmes⚡"
        align="left"
      />
      {
        !data?.skills ||
        data?.skills?.length < 1 ?
        <NoDataFound message="No Skill Programmes Available" /> :
        <div className="w-full overflow-x-scroll wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          {data?.skills?.map((skill:ISkill) => (
            <div key={skill._id} className="carousel-item">
              <Image 
                onClick={() => handleOpenVideoModal(skill.video.url)}
                width={400} 
                height={400} 
                src={skill.thumbnail.url} 
                alt={skill.name} 
                className="rounded-2xl cursor-pointer" 
              /> 
            </div>
          ))}
        </div>
      </div>
      }

      {/* Video Modal */}
      {openVideoModal && (
        <div className="mx-auto w-fit">
          <div 
            onClick={() => setOpenVideoModal(false)} 
            className="fixed z-[100] w-screen inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative w-[700px] h-fit rounded-lg bg-white drop-shadow-lg dark:bg-zinc-900 dark:text-white opacity-1 duration-300"
            >
              {/* Video Element */}
              {selectedVideoUrl && (
                <video 
                  src={selectedVideoUrl} 
                  controls 
                  autoPlay 
                  className="w-full h-full rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillProgrammes;
