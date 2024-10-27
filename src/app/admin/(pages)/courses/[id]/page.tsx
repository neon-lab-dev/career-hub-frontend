"use client";
import back from "@/assets/icons/arrow_back.svg";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getSingleCourse, getSingleSkill } from "@/api/admin";

type TVideo = {
    _id: string;
    name: string;
    url: string;
    createdAt: string;
}
type Props = {
  params: {
    id: string;
  };
};

type VideoFormData = {
  title: string;
  video: FileList;
};

type SkillFormData = {
  name: string;
  description: string;
  videoId: string;
  image: FileList;
};

const EditCourse = ({ params: { id } }: Props) => {
  const { register: videoRegister, handleSubmit: videoHandleSubmit, formState: { errors: videoErrors } } = useForm<VideoFormData>();
  const [videoId, setVideoId] = useState<string | null>(null);
  const [editExpanded, setEditExpanded] = useState<boolean>(false);
  const [videoEditExpanded, setVideoEditExpanded] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<TVideo>();

  const { isLoading, data: course } = useQuery({
    queryKey: ["courses", id],
    queryFn: () => getSingleCourse(id),
  });


  // Video Update Form Handling
  const videoMutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        console.log('FormData being sent:', data);

        const response = await axios.put(
          `https://carrerhub-backend.vercel.app/api/v1/video/${videoId}`,
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
          }
        );

        console.log('API response:', response);
        return response.data;

      } catch (error) {
        toast.error('Error occurred during API call');
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log('Success data:', data);
      setVideoId(data?.video?._id);
      toast.success("Video updated successfully!");
    },
    onError: (error) => {
      console.error('Mutation error:', error);
      toast.error("Failed to update video.");
    },
  });

  const onSubmitVideo = async (data: VideoFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("video", data.video[0]);

    toast.promise(
      videoMutation.mutateAsync(formData),
      {
        loading: 'Updating video...',
        success: 'Video updated successfully!',
        error: 'Failed to update video.',
      }
    );
  };

  // Skill Update Form Handling
  const { register: skillRegister, handleSubmit: skillHandleSubmit, formState: { errors: skillErrors } } = useForm<SkillFormData>();

  const skillMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.put(
        `https://carrerhub-backend.vercel.app/api/v1/courses/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Course updated successfully!");
    },
    onError: () => {
      toast.error("Failed to update Course.");
    },
  });

  const onSubmitSkill = (data: SkillFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("videoId", course?.course?.video?._id);
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    toast.promise(
      skillMutation.mutateAsync(formData),
      {
        loading: 'Updating course...',
        success: 'Course updated successfully!',
        error: 'Failed to update course.',
      }
    );
  };


  if (isLoading) return <Loading className="h-[60vh] w-full" />;

  return (
    <div className="w-full">
      <div className="bg-[#f5f6fa] p-6 flex flex-col gap-[51px]">
        {/* Course videos */}
        <div className="flex items-center gap-4">
          {
            course?.course?.videos?.map((video:TVideo) => 
             <div key={video._id} className="w-[300px] h-[250px] rounded-lg relative">
               <video 
                  src={video.url} 
                  controls 
                  autoPlay 
                  className="w-[300px] h-[250px] rounded-lg"
                />
                <div onClick={() => {
                  setVideoEditExpanded(!videoEditExpanded);
                  setSelectedVideo(video)
                }} className="px-4 py-2 bg-primary-600 text-white rounded-lg absolute top-2 right-2 cursor-pointer">Edit</div>
             </div>
            )
          }
        
        </div>


        {/* Video Update Form */}
        {
          videoEditExpanded &&
          <form onSubmit={videoHandleSubmit(onSubmitVideo)} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto">
          <div>
            <label className="text-neutral-600 font-500 font-plus-jakarta-sans" htmlFor="title">
              Video Title
            </label>
            <input
            defaultValue={selectedVideo && selectedVideo.name}
              id="title"
              type="text"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...videoRegister("title", { required: "Video title is required" })}
            />
            {videoErrors.title && <span className="text-red-500">{videoErrors.title.message}</span>}
          </div>

          <div>
            <label className="text-neutral-600 font-500 font-plus-jakarta-sans" htmlFor="video">
              Upload Video
            </label>
            <input
              id="video"
              type="file"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...videoRegister("video", { required: "Video is required" })}
            />
            {videoErrors.video && <span className="text-red-500">{videoErrors.video.message}</span>}
          </div>

          <button type="submit" className="bg-primary-600 text-white px-4 py-3 rounded-md">
            Update Video
          </button>
        </form>
        }

        {/* Course Update Form */}
        <form onSubmit={skillHandleSubmit(onSubmitSkill)} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto">
          <div>
            <label className="text-neutral-600 font-500 font-plus-jakarta-sans" htmlFor="name">
              Course Name
            </label>
            <input
              defaultValue={course?.course?.name}
              id="name"
              type="text"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...skillRegister("name", { required: "Skill name is required" })}
            />
            {skillErrors.name && <span className="text-red-500">{skillErrors.name.message}</span>}
          </div>

          <div>
            <label className="text-neutral-600 font-500 font-plus-jakarta-sans" htmlFor="description">
              Description
            </label>
            <input
              defaultValue={course?.course?.description}
              id="description"
              type="text"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...skillRegister("description", { required: "Description is required" })}
            />
            {skillErrors.description && <span className="text-red-500">{skillErrors.description.message}</span>}
          </div>


          <div>
            {
              course?.course?.thumbnail?.url ?
              <div className="relative w-fit">
                <Image
                  src={course?.course?.thumbnail?.url}
                  width={400}
                  height={400}
                  className="object-cover"
                  alt={course?.course?.thumbnail?.name}
                />
                <div onClick={() => setEditExpanded(!editExpanded)} className="px-4 py-2 bg-primary-600 text-white rounded-lg absolute top-2 right-2 cursor-pointer">Edit</div>
              </div>
              :
              ""
            }
          </div>

          {
            editExpanded &&
            <div>
              <label className="text-neutral-600 font-500 font-plus-jakarta-sans" htmlFor="image">
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
                {...skillRegister("image")}
              />
            </div>
          }

          <button type="submit" className="bg-primary-600 text-white px-4 py-3 rounded-md">
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
