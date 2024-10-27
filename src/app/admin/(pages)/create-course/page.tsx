"use client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type VideoFormData = {
  title: string;
  video: FileList;
};

type CourseFormData = {
  name: string;
  description: string;
  image: FileList;
};

const CreateCourse = () => {
  const [videoIds, setVideoIds] = useState<string[]>([]);
  console.log(videoIds);

  // Video Upload Form Handling
  const { register: videoRegister, handleSubmit: videoHandleSubmit, formState: { errors: videoErrors } } = useForm<VideoFormData>();

  const videoMutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        console.log('FormData being sent:', data);

        const response = await axios.post(
          "https://carrerhub-backend.vercel.app/api/v1/video/create", 
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
      setVideoIds((prev) => [...prev, data?.video?._id]);
      toast.success("Video uploaded successfully!");
    },
    onError: (error) => {
      console.error('Mutation error:', error);
      toast.error("Failed to upload video.");
    },
  });

  const onSubmitVideo = async (data: VideoFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("video", data.video[0]);

    toast.promise(
      videoMutation.mutateAsync(formData),
      {
        loading: 'Uploading video...',
        success: 'Video uploaded successfully!',
        error: 'Failed to upload video.',
      }
    );
  };

  // Course Creation Form Handling
  const { register: courseRegister, handleSubmit: courseHandleSubmit, formState: { errors: courseErrors } } = useForm<CourseFormData>();

  const courseMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post(
        "https://carrerhub-backend.vercel.app/api/v1/courses/create",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Course created successfully!");
    },
    onError: () => {
      toast.error("Failed to create course.");
    },
  });

  const onSubmitCourse = (data: CourseFormData) => {
    if (videoIds.length === 0) {
      toast.error("Please upload videos first.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    videoIds.forEach((id) => formData.append("videos[]", id));

    toast.promise(
      courseMutation.mutateAsync(formData),
      {
        loading: 'Creating course...',
        success: 'Course created successfully!',
        error: 'Failed to create course.',
        }
    );
  };

  // Alert on page refresh
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (videoIds.length > 0) {
        const confirmationMessage = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [videoIds]);

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-[51px]">

      {/* Video Upload Form */}
      <form onSubmit={videoHandleSubmit(onSubmitVideo)} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto">
        <h3 className="text-xl font-semibold">Upload Videos</h3>
        <div>
          <label className="text-neutral-600 font-500 font-plus-jakarta-sans" htmlFor="title">
            Video Title
          </label>
          <input
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
          Upload Videos
        </button>
      </form>

      {/* Course Creation Form */}
      <form onSubmit={courseHandleSubmit(onSubmitCourse)} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-[800px] w-full mx-auto">
        <h3 className="text-xl font-semibold">Create Course</h3>
        <div>
          <label htmlFor="name" className="text-neutral-600 font-500 font-plus-jakarta-sans">
            Course Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
            {...courseRegister("name", { required: "Course name is required" })}
          />
          {courseErrors.name && <span className="text-red-500">{courseErrors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="description" className="text-neutral-600 font-500 font-plus-jakarta-sans">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
            {...courseRegister("description", { required: "Description is required" })}
          />
          {courseErrors.description && <span className="text-red-500">{courseErrors.description.message}</span>}
        </div>

        <div>
          <label htmlFor="image" className="text-neutral-600 font-500 font-plus-jakarta-sans">
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            className="bg-neutral-450 border border-neutral-550 rounded-[10px] px-4 py-2 focus:outline-none w-full"
            {...courseRegister("image", { required: "Image is required" })}
          />
          {courseErrors.image && <span className="text-red-500">{courseErrors.image.message}</span>}
        </div>

        <button type="submit" className="bg-primary-600 text-white px-4 py-3 rounded-md">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
