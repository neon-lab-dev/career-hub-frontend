"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, UseMutationResult, useQueryClient, } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Link from "next/link";
import api from "@/api";

type FormData = {
    title: string;
    description: string;
    requirements: string;
    requiredSkills: string;
    responsibilities: string;
    locationType: string;
    location: string;
    employmentType: string;
    employmentDuration: number;
    salary: number;
    applicationDeadline: string;
    extraBenefits: string;
    experience: string;
};

// Function to format form data
const formatFormData = (data: FormData) => {
    const { requiredSkills, ...restData } = data;
    return {
        ...restData,
        requiredSkills: requiredSkills.split(",").map((skill) => skill.trim()),
    };
};

// Function to handle job creation request
const createJobRequest = async (data: FormData) => {
    const payload = formatFormData(data);
    const response = await axios.post(
        api.creatrjob,
        payload,
        { withCredentials: true }
    );

    if (response.status !== 201) {
        throw new Error("Failed to create job");
    }
    return response.data;
};

// Custom hook for job creation mutation
const useCreateJobMutation = (): UseMutationResult<any, Error, FormData> => {
    const router = useRouter();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createJobRequest,
        onSuccess: () => {
            toast.success("Job created successfully");
            queryClient.invalidateQueries({ queryKey: ['jobs-employer-job'] });
            queryClient.invalidateQueries({ queryKey: ['jobs'] });

            router.push("/employer");
        },
        onError: (error: Error) => {
            console.error("Error creating job:", error);
            toast.error(error.message || "Failed to create job");
        },
    });
};

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm < FormData > ();
    const mutation = useCreateJobMutation();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        mutation.mutate(data);
    };

    const validLocationTypes = ["Hybrid", "Remote", "On-Site"];
    const validEmploymentTypes = ["Full-Time", "Part-Time", "Contract"];

    return (
        <div className="p-6 bg-[#f5f6fa]">
            <div className="bg-white p-6 rounded-xl">
                <div className="flex justify-between">
                    <div className="flex gap-6 items-center">
                        <Link href="/employer/">
                            <Image src={IMAGES.arrow} alt={""} />
                        </Link>
                        <h1 className="text-neutral-950 text-[28px] font-700">Add New Hiring</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center mt-16 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title">
                                <span className="text-lg">Job Title</span>
                            </label>
                            <input
                                type="text"
                                {...register("title", { required: "Job title is required" })}
                                placeholder="e.g., Healthcare Operations Project Manager"
                                className="p-3 border rounded-xl w-[770px]"
                            />
                            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">
                                <span className="text-lg">Job Description</span>
                            </label>
                            <textarea
                                {...register("description", { required: "Job description is required" })}
                                placeholder="e.g., Oversee operational projects within healthcare facilities..."
                                className="p-3 border rounded-xl w-[770px]"
                            />
                            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="requirements">
                                <span className="text-lg">Requirements</span>
                            </label>
                            <textarea
                                {...register("requirements", { required: "Requirements are required" })}
                                placeholder="e.g., Experience in healthcare operations and project management."
                                className="p-3 border rounded-xl w-[770px]"
                            />
                            {errors.requirements && <p className="text-red-500">{errors.requirements.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="requiredSkills">
                                <span className="text-lg">Required Skills (comma-separated)</span>
                            </label>
                            <textarea
                                {...register("requiredSkills", { required: "Required skills are required" })}
                                placeholder="e.g., Healthcare Operations, Project Management"
                                className="p-3 border rounded-xl w-[770px]"
                            />
                            {errors.requiredSkills && <p className="text-red-500">{errors.requiredSkills.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="responsibilities">
                                <span className="text-lg">Roles and Responsibilities</span>
                            </label>
                            <textarea
                                {...register("responsibilities", { required: "Roles and responsibilities are required" })}
                                placeholder="e.g., Implement process improvements and manage operational projects..."
                                className="p-3 border rounded-xl w-[770px]"
                            />
                            {errors.responsibilities && <p className="text-red-500">{errors.responsibilities.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="locationType">
                                <span className="text-lg">Location Type</span>
                            </label>
                            <select
                                {...register("locationType", { required: "Location type is required" })}
                                className="p-3 border rounded-xl w-[370px]"
                            >
                                <option value="">Select Location Type</option>
                                {validLocationTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.locationType && <p className="text-red-500">{errors.locationType.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location">
                                <span className="text-lg">Location</span>
                            </label>
                            <input
                                type="text"
                                {...register("location", { required: "Location is required" })}
                                placeholder="e.g., Operations HQ, MediPark, Bangalore"
                                className="p-3 border rounded-xl w-[370px]"
                            />
                            {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="employmentType">
                                <span className="text-lg">Employment Type</span>
                            </label>
                            <select
                                {...register("employmentType", { required: "Employment type is required" })}
                                className="p-3 border rounded-xl w-[370px]"
                            >
                                <option value="">Select Employment Type</option>
                                {validEmploymentTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.employmentType && <p className="text-red-500">{errors.employmentType.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="employmentDuration">
                                <span className="text-lg">Employment Duration (in years)</span>
                            </label>
                            <input
                                type="number"
                                {...register("employmentDuration", { required: "Employment duration is required", valueAsNumber: true })}
                                placeholder="e.g., 3"
                                className="p-3 border rounded-xl w-[370px]"
                            />
                            {errors.employmentDuration && <p className="text-red-500">{errors.employmentDuration.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="salary">
                                <span className="text-lg">Salary</span>
                            </label>
                            <input
                                type="number"
                                {...register("salary", { required: "Salary is required", valueAsNumber: true })}
                                placeholder="e.g., 10000000"
                                className="p-3 border rounded-xl w-[370px]"
                            />
                            {errors.salary && <p className="text-red-500">{errors.salary.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="applicationDeadline">
                                <span className="text-lg">Application Deadline</span>
                            </label>
                            <input
                                type="date"
                                {...register("applicationDeadline", { required: "Application deadline is required" })}
                                className="p-3 border rounded-xl w-[370px]"
                            />
                            {errors.applicationDeadline && <p className="text-red-500">{errors.applicationDeadline.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="extraBenefits">
                                <span className="text-lg">Extra Benefits</span>
                            </label>
                            <input
                                type="text"
                                {...register("extraBenefits")}
                                placeholder="e.g., Professional development programs, Health insurance"
                                className="p-3 border rounded-xl w-[370px]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="experience">
                                <span className="text-lg">Experience Required</span>
                            </label>
                            <input
                                type="text"
                                {...register("experience")}
                                placeholder="e.g., 5+ years"
                                className="p-3 border rounded-xl w-[370px]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-10 gap-6">
                        <Button type="submit" className="px-10">Create Job</Button>
                    </div>
                </form>
                {mutation.isError && (
                    <div className="mt-6">
                        <p className="text-red-500">An error occurred: {mutation.error.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Page;
