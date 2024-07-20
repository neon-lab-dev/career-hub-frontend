"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Link from "next/link";

const Page = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        requirements: "",
        requiredSkills: "", // Handle as comma-separated string
        responsibilities: "",
        locationType: "", // Dropdown
        location: "",
        employmentType: "", // Dropdown
        employmentDuration: "",
        salary: "",
        applicationDeadline: "",
        extraBenefits: "",
        experience: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // Use useRouter instead of Router

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const { requiredSkills, ...restData } = formData;
        const payload = {
            ...restData,
            requiredSkills: requiredSkills.split(",").map((skill: string) => skill.trim()),
        };

        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://carrerhub-backend.vercel.app/api/v1/createjob",
                payload,
                { withCredentials: true }
            );

            if (response.status === 201) {
                toast.success("Job created successfully");
                router.push("/employer");
            }
        } catch (error: any) {
            console.error("Error creating job:", error);

            // Check if error response has a message, else use a generic message
            const errorMessage = error.response?.data?.message || "Failed to create job";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Replace with actual valid enum values
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
                {isLoading ? (
                    <div className="flex justify-center items-center h-96">
                        <Oval
                            height={40}
                            width={40}
                            color="#F9533A"
                            visible={true}
                            ariaLabel="oval-loading"
                            secondaryColor="#f4f4f4"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center mt-16 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="title">
                                    <span className="text-lg">Job Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="e.g., Healthcare Operations Project Manager"
                                    className="p-3 border rounded-xl w-[500px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description">
                                    <span className="text-lg">Job Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="e.g., Oversee operational projects within healthcare facilities..."
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="requirements">
                                    <span className="text-lg">Requirements</span>
                                </label>
                                <textarea
                                    name="requirements"
                                    placeholder="e.g., Experience in healthcare operations and project management."
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="requiredSkills">
                                    <span className="text-lg">Required Skills (comma-separated)</span>
                                </label>
                                <input
                                    type="text"
                                    name="requiredSkills"
                                    placeholder="e.g., Healthcare Operations, Project Management"
                                    className="p-3 border rounded-xl w-[500px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="responsibilities">
                                    <span className="text-lg">Roles and Responsibilities</span>
                                </label>
                                <textarea
                                    name="responsibilities"
                                    placeholder="e.g., Implement process improvements and manage operational projects..."
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="locationType">
                                    <span className="text-lg">Location Type</span>
                                </label>
                                <select
                                    name="locationType"
                                    value={formData.locationType}
                                    onChange={handleChange}
                                    className="p-3 border rounded-xl w-[370px]"
                                >
                                    <option value="">Select Location Type</option>
                                    {validLocationTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="location">
                                    <span className="text-lg">Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="e.g., Operations HQ, MediPark, Bangalore"
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="employmentType">
                                    <span className="text-lg">Employment Type</span>
                                </label>
                                <select
                                    name="employmentType"
                                    value={formData.employmentType}
                                    onChange={handleChange}
                                    className="p-3 border rounded-xl w-[370px]"
                                >
                                    <option value="">Select Employment Type</option>
                                    {validEmploymentTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="employmentDuration">
                                    <span className="text-lg">Employment Duration (in years)</span>
                                </label>
                                <input
                                    type="number"
                                    name="employmentDuration"
                                    placeholder="e.g., 3"
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="salary">
                                    <span className="text-lg">Salary</span>
                                </label>
                                <input
                                    type="number"
                                    name="salary"
                                    placeholder="e.g., 10000000"
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="applicationDeadline">
                                    <span className="text-lg">Application Deadline</span>
                                </label>
                                <input
                                    type="date"
                                    name="applicationDeadline"
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="extraBenefits">
                                    <span className="text-lg">Extra Benefits</span>
                                </label>
                                <input
                                    type="text"
                                    name="extraBenefits"
                                    placeholder="e.g., Professional development programs, Health insurance"
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="experience">
                                    <span className="text-lg">Experience Required</span>
                                </label>
                                <input
                                    type="text"
                                    name="experience"
                                    placeholder="e.g., 5+ years"
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-16 gap-6">
                            <Button type="submit">Create Job</Button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};
export default Page;
