"use client";

import { deleteVideoById, getSingleSkill } from "@/api/admin";
import Loading from "@/components/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TVideo = {
  _id: string;
  name: string;
  url: string;
  createdAt: string;
};

type VideoFormData = {
  title: string;
  video: FileList;
};

type SkillFormData = {
  name: string;
  description: string;
  skillCovered: string;
  videoId: string;
  image: FileList;
};

const SkillsProgrammesPageEmployer = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    register: videoRegister,
    handleSubmit: videoHandleSubmit,
    formState: { errors: videoErrors },
  } = useForm<VideoFormData>();

  const { isLoading, data: skill } = useQuery({
    queryKey: ["skillProgramme", id],
    queryFn: () => getSingleSkill(id),
  });

  const [videoId, setVideoId] = useState<string | null>("");
  useEffect(() => {
    if (skill?.skill?.video) {
      setVideoId(skill?.skill?.video._id);
    }
  }, [skill]);

  const [editExpanded, setEditExpanded] = useState<boolean>(false);
  const [videoEditExpanded, setVideoEditExpanded] = useState<boolean>(false);

  const updateVideoWithNewVideo = (videoId: string) => {
    if (!videoId) {
      toast.error("Please upload a video first.");
      return;
    }

    const formData = new FormData();
    formData.append("videoId", videoId);
    axios
      .put(`http://localhost:7000/api/v1/skills/${id}`, formData, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("Updated with new video.");
        setVideoEditExpanded(false);
        window.location.reload();
        queryClient.invalidateQueries({ queryKey: ["courses"] });
      })
      .catch(() => {
        toast.error("Failed to update skill programme with new video.");
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
      setVideoId(newVideoId);
      toast.success("Video uploaded successfully!");

      // Call the Edit Course API to update the course with the new video ID
      updateVideoWithNewVideo(newVideoId);
    },
    onError: () => {
      toast.error("Failed to upload video.");
    },
  });

  const onSubmitVideo = async (data: VideoFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("video", data.video[0]);

    toast.promise(videoMutation.mutateAsync(formData), {
      loading: "Updating video...",
      success: "Video updated successfully!",
      error: "Failed to update video.",
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
        `http://localhost:7000/api/v1/skills/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Skill programme updated successfully!");
      router.push("/admin/skill-programmes");
    },
    onError: () => {
      toast.error("Failed to update skill programme.");
    },
  });

  console.log(skill);

  const onSubmitSkill = (data: SkillFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("skillCovered", data.skillCovered);
    formData.append("videoId", skill?.skill?.video?._id);
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    toast.promise(skillMutation.mutateAsync(formData), {
      loading: "Updating skill programme...",
      success: "Skill programme updated successfully!",
      error: "Failed to update skill programme.",
    });
  };

  // Delete course
  const { mutate: deleteVideo } = useMutation({
    mutationFn: (id: string) => deleteVideoById(id),
    onMutate: () => {
      // Show loading toast when the mutation is triggered
      toast.loading("Deleting video...");
    },
    onSuccess: () => {
      // Remove the loading toast and show success
      toast.success("Video deleted successfully");
      // Invalidate the query to refresh the video list
      queryClient.invalidateQueries({ queryKey: ["video"] });
    },
    onError: (error: string) => {
      // Remove the loading toast and show error
      toast.error(error);
    },
  });

  // Delete course video
  const handleDeleteVideo = (id: string) => {
    deleteVideo(id);
    setVideoId("");
  };

  if (isLoading) return <Loading className="h-[60vh] w-full" />;
  return (
    <div className="w-full">
      <div className="bg-[#f5f6fa] p-6 flex flex-col gap-[51px]">
        {/* Course videos */}

        {skill?.skill?.video && (
          <div className="max-w-[800px] w-full mx-auto h-[300px] rounded-lg relative">
            <video
              src={skill?.skill?.video?.url}
              controls
              autoPlay
              className="w-full h-[300px] rounded-lg"
            />
            <div
              onClick={() => {
                handleDeleteVideo(skill?.skill?.video._id);
              }}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg absolute top-2 right-2 cursor-pointer"
            >
              Delete
            </div>
          </div>
        )}

        {videoId === "" && (
          <button
            onClick={() => {
              setVideoEditExpanded(!videoEditExpanded);
            }}
            type="submit"
            className="bg-primary-600 text-white px-4 py-3 rounded-md max-w-[800px] w-full mx-auto"
          >
            Add New Video
          </button>
        )}

        {/* Video Update Form */}
        {videoEditExpanded && (
          <form
            onSubmit={videoHandleSubmit(onSubmitVideo)}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto"
          >
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
              Upload Video
            </button>
          </form>
        )}

        {/* Skill Update Form */}
        <form
          onSubmit={skillHandleSubmit(onSubmitSkill)}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto"
        >
          <div>
            <label
              className="text-neutral-600 font-500 font-plus-jakarta-sans"
              htmlFor="name"
            >
              Skill Name
            </label>
            <input
              defaultValue={skill?.skill?.name}
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
              defaultValue={skill?.skill?.description}
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
            <label
              className="text-neutral-600 font-500 font-plus-jakarta-sans"
              htmlFor="skillCovered"
            >
              Skills Covered
            </label>
            <input
              defaultValue={skill?.skill?.skillCovered}
              id="skillCovered"
              type="text"
              className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
              {...skillRegister("skillCovered", {
                required: "Skills covered are required",
              })}
            />
            {skillErrors.skillCovered && (
              <span className="text-red-500">
                {skillErrors.skillCovered.message}
              </span>
            )}
          </div>

          <div>
            {skill?.skill?.thumbnail?.url ? (
              <div className="relative w-fit">
                <Image
                  src={skill?.skill?.thumbnail?.url}
                  width={400}
                  height={400}
                  className="object-cover"
                  alt={skill?.skill?.thumbnail?.name}
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
            Update Skill Programme
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillsProgrammesPageEmployer;
