"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import { ICONS } from "@/assets";
import Container from "@/components/Container";

interface IVideo {
  _id: string;
  name: string;
  url: string;
  createdAt: string;
}

interface ICourse {
  _id: string;
  name: string;
  description: string;
  videos: IVideo[];
  thumbnail: {
    _id: string;
    fileId: string;
    name: string;
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const fetchCourseById = async (id: string) => {
  const { data } = await axios.get(
    `https://carrerhub-backend.vercel.app/api/v1/courses/${id}`
  );
  return data;
};

const CourseDetails = () => {
  const { id } = useParams(); // 👈 useParams hook gives you the dynamic [id]
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(null);

  const courseId = Array.isArray(id) ? id[0] : id; // handle edge case

  const { isLoading, data } = useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => {
      if (!courseId) throw new Error("Course ID is undefined");
      return fetchCourseById(courseId);
    },
    enabled: !!courseId,
  });

  if (isLoading) return <Loading />;

  const course: ICourse = data?.course;

  return (
    <Container>
      <div className="py-section flex flex-col gap-10 px-6 lg:px-16">
      <h3 className="section-heading text-3xl font-bold mb-3 md:mb-5 xl:mb-8">
        {course?.name}
      </h3>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full">
        {/* Left Column - Thumbnail and Description */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
          <Image
            src={course?.thumbnail?.url}
            alt={course?.name}
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-full lg:h-[400px]"
          />
          <p className="text-lg text-gray-700">{course?.description}</p>
        </div>

        {/* Right Column - Video List */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-2xl font-semibold mb-4">Course Videos</h4>
          <ul className="space-y-4">
            {course.videos.map((video: IVideo) => (
              <li
                key={video?._id}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setCurrentVideo(video);
                  setOpenVideoModal(true);
                }}
              >
                <span>{video?.name}</span>
                <Image
                  src={ICONS.play}
                  alt="Play icon"
                  width={24}
                  height={24}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Video Modal */}
      {openVideoModal && currentVideo && (
        <div
          onClick={() => setOpenVideoModal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-3 rounded-lg w-full max-w-lg"
          >
            <h5 className="text-xl font-semibold mb-4">{currentVideo.name}</h5>
            <video controls className="w-full rounded-lg">
              <source src={currentVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
    </Container>
  );
};

export default CourseDetails;
