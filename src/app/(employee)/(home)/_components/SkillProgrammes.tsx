"use client";
import { getAllSkillProgrammes } from "@/api/skillProgrammes";
import { ISkill } from "@/app/admin/(pages)/skill-programmes/page";
import NoDataFound from "@/components/NoDataFound";
import SectionHeading from "@/components/Reusable/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { ICONS } from "@/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Container from "@/components/Container";

const SkillProgrammes = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const { isLoading, data } = useQuery({
    queryKey: ["skillprogrammes"],
    queryFn: getAllSkillProgrammes,
  });
  console.log(data);

  const handleOpenVideoModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setOpenVideoModal(true);
  };

  return (
    <Container>
      <div className="py-section flex flex-col items-center justify-center gap-14">
        <SectionHeading
          highlightedText="Skill"
          normalText="Programmes⚡"
          align="left"
        />
        {
          data?.skills?.length < 1 ?
          <NoDataFound message="No Skill Programmes Available" />
          :
          <div className="w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: "#prevProjectButton",
              nextEl: "#nextProjectButton",
            }}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              360: { slidesPerView: 1 },
              425: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1366: { slidesPerView: 4 },
            }}
            className="w-full mt-10"
          >
            {data?.skills?.map((skillProgramme:any) => (
              <SwiperSlide key={skillProgramme?._id} className="mb-10 w-full">
                <CourseCard {...skillProgramme} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              id="prevProjectButton"
              className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition-all duration-300 ease-in-out transform active:scale-95 cursor-pointer"
            >
              <Image
                src={ICONS.rightArrowDark}
                alt=""
                className="size-6 rotate-180"
              />
            </button>
            <button
              id="nextProjectButton"
              className="p-2 rounded-lg bg-primary-500 border border-primary-10 transition-all duration-300 ease-in-out transform active:scale-95 cursor-pointer"
            >
              <Image src={ICONS.rightArrow2} alt="" className="size-6" />
            </button>
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
    </Container>
  );
};

export default SkillProgrammes;
