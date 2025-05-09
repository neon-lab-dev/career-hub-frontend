"use client";

import { deleteVideoById, getSingleCourse } from "@/api/admin";
import Loading from "@/components/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TVideo = {
  _id: string;
  name: string;
  url: string;
  createdAt: string;
};
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
const EditCoursePage = ({ id }: { id: string }) => {
  const router = useRouter();
  
  const queryClient = useQueryClient();
  const {
    register: videoRegister,
    handleSubmit: videoHandleSubmit,
    formState: { errors: videoErrors },
    reset: videoReset,
  } = useForm<VideoFormData>();
  const [videoId, setVideoId] = useState<string | null>(null);
  const [editExpanded, setEditExpanded] = useState<boolean>(false);
  const [videoEditExpanded, setVideoEditExpanded] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<TVideo>();

  const { isLoading, data: course } = useQuery({
    queryKey: ["courses", id],
    queryFn: () => getSingleCourse(id),
  });

  const [videoIds, setVideoIds] = useState<string[]>([]);

  // To store the video ids as soon as the component loads
  useEffect(() => {
    if (course?.course?.videos) {
      const ids = course?.course?.videos?.map((video:TVideo) => video._id);
      setVideoIds(ids);
    }
  }, [course]);



  // Function to call the Edit Course API with the new video ID
  const updateCourseWithNewVideo = (videoId: string) => {
    if (!videoId) {
      toast.error("Please upload a video first.");
      return;
    }

    const updatedVideoIds = [...videoIds, videoId];

  const formData = new FormData();
  formData.append("videos[]", videoId);
console.log(updatedVideoIds, "hello")
    axios
      .put(
        `http://localhost:7000/api/v1/courses/${id}`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        toast.success("Course updated with new video!");
        videoReset();
        setVideoEditExpanded(false);
        window.location.reload();
        queryClient.invalidateQueries({ queryKey: ["courses"] });
      })
      .catch(() => {
        toast.error("Failed to update course with new video.");
      });
  };

  // Video create Form Handling
  const videoMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post(
        "http://localhost:7000/api/v1/video/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      const newVideoId = data?.video?._id;
      setVideoIds((prev) => [...prev, newVideoId]);
      setVideoId(newVideoId);
      toast.success("Video uploaded successfully!");

      // Call the Edit Course API to update the course with the new video ID
      updateCourseWithNewVideo(newVideoId);
    },
    onError: () => {
      toast.error("Failed to upload video.");
    },
  });

  

  // To add new vide
  const onSubmitVideo = async (data: VideoFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("video", data.video[0]);

    toast.promise(videoMutation.mutateAsync(formData), {
      loading: "Uploading video...",
      success: "Video uploaded successfully!",
      error: "Failed to upload video.",
    });
  };

  // Skill Update Form Handling
  const {
    register: skillRegister,
    handleSubmit: skillHandleSubmit,
    formState: { errors: skillErrors },
  } = useForm<SkillFormData>();

  const skillMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.put(
        `http://localhost:7000/api/v1/courses/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Course updated successfully!");
      router.push("/employer/courses");
    },
    onError: () => {
      toast.error("Failed to update Course.");
    },
  });

  const onSubmitCourse = (data: SkillFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    videoIds.forEach((id) => formData.append("videos[]", id));
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    toast.promise(skillMutation.mutateAsync(formData), {
      loading: "Updating course...",
      success: "Course updated successfully!",
      error: "Failed to update course.",
    });
  };

  // Delete course
  const { mutate: deleteVideo } = useMutation({
    mutationFn: (id: string) => deleteVideoById(id),
    onSuccess: () => {
      toast.success("Video deleted successfully");
      // Invalidate the query to refresh the course list
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  // Delete course video
  const handleDeleteVideo = (id: string) => {
    console.log(id);
    deleteVideo(id);
  };

  console.log(course?.course?.videos);

  if (isLoading) return <Loading className="h-[60vh] w-full" />;
  return (
    <div className="w-full">
      <div className="bg-[#f5f6fa] p-6 flex flex-col gap-[51px]">
        {/* Course videos */}
        <div className="flex items-center justify-center gap-4">
          {course?.course?.videos?.map((video: TVideo) => (
            <div
              key={video._id}
              className="w-[300px] h-[250px] rounded-lg relative"
            >
              <video
                src={video.url}
                controls
                autoPlay
                className="w-[300px] h-[250px] rounded-lg"
              />
              <div
                onClick={() => {
                  handleDeleteVideo(video?._id);
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg absolute top-2 right-2 cursor-pointer"
              >
                Delete
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            setVideoEditExpanded(!videoEditExpanded);
          }}
          type="submit"
          className="bg-primary-600 text-white px-4 py-3 rounded-md max-w-[800px] w-full mx-auto"
        >
          Add New Video
        </button>

        {/* Video Update Form */}
        {videoEditExpanded && (
          <form
            onSubmit={videoHandleSubmit(onSubmitVideo)}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto"
          >
            <h3 className="text-xl font-semibold">Upload Videos</h3>
            <div>
              <label
                className="text-neutral-600 font-500 font-plus-jakarta-sans"
                htmlFor="title"
              >
                Video Title
              </label>
              <input
                id="title"
                type="text"
                className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
                {...videoRegister("title", {
                  required: "Video title is required",
                })}
              />
              {videoErrors.title && (
                <span className="text-red-500">
                  {videoErrors.title.message}
                </span>
              )}
            </div>

            <div>
              <label
                className="text-neutral-600 font-500 font-plus-jakarta-sans"
                htmlFor="video"
              >
                Upload Video
              </label>
              <input
                multiple
                id="video"
                type="file"
                className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
                {...videoRegister("video", { required: "Video is required" })}
              />
              {videoErrors.video && (
                <span className="text-red-500">
                  {videoErrors.video.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary-600 text-white px-4 py-3 rounded-md"
            >
              Upload Videos
            </button>
          </form>
        )}

        {/* Course Update Form */}
        <form
          onSubmit={skillHandleSubmit(onSubmitCourse)}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto"
        >
          <div>
            <label
              className="text-neutral-600 font-500 font-plus-jakarta-sans"
              htmlFor="name"
            >
              Course Name
            </label>
            <input
              defaultValue={course?.course?.name}
              id="name"
              type="text"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...skillRegister("name", { required: "Skill name is required" })}
            />
            {skillErrors.name && (
              <span className="text-red-500">{skillErrors.name.message}</span>
            )}
          </div>

          <div>
            <label
              className="text-neutral-600 font-500 font-plus-jakarta-sans"
              htmlFor="description"
            >
              Description
            </label>
            <input
              defaultValue={course?.course?.description}
              id="description"
              type="text"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...skillRegister("description", {
                required: "Description is required",
              })}
            />
            {skillErrors.description && (
              <span className="text-red-500">
                {skillErrors.description.message}
              </span>
            )}
          </div>

          <div>
            {course?.course?.thumbnail?.url ? (
              <div className="relative w-fit">
                <Image
                  src={course?.course?.thumbnail?.url}
                  width={400}
                  height={400}
                  className="object-cover"
                  alt={course?.course?.thumbnail?.name}
                />
                <div
                  onClick={() => setEditExpanded(!editExpanded)}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg absolute top-2 right-2 cursor-pointer"
                >
                  Edit
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {editExpanded && (
            <div>
              <label
                className="text-neutral-600 font-500 font-plus-jakarta-sans"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
                {...skillRegister("image")}
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-primary-600 text-white px-4 py-3 rounded-md"
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCoursePage;
