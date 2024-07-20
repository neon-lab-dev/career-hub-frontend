"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { IMAGES } from "@/assets";
import { toast } from "sonner";
import { Oval } from 'react-loader-spinner';

const JobDetailsPage = ({ params: { viewId } }: { params: { viewId: string } }) => {
    const [formData, setFormData] = useState({
        title: "",
        employmentType: "",
        responsibilities: "",
        description: "",
        applicationDeadline: "",
        employmentDuration: "",
        salary: "",
        requiredSkills: "",
        extraBenefits: "",
        requirements: "",
        experience: "",
        location: "",
        locationType: "",
    });
    const [isEditable, setIsEditable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchJobDetails = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `https://carrerhub-backend.vercel.app/api/v1/job/${viewId}`,
                    { withCredentials: true }
                );
                console.log("Job details response:", response.data);
                const jobData = response.data.jobs;
                if (!jobData) {
                    console.error("Job data is undefined or null.");
                    return;
                }
                setFormData({
                    title: jobData.title,
                    employmentType: jobData.employmentType,
                    responsibilities: jobData.responsibilities,
                    description: jobData.description,
                    applicationDeadline: jobData.applicationDeadline,
                    employmentDuration: jobData.employmentDuration,
                    salary: jobData.salary,
                    requiredSkills: jobData.requiredSkills.join(", "),
                    extraBenefits: jobData.extraBenefits,
                    requirements: jobData.requirements,
                    experience: jobData.experience,
                    location: jobData.location,
                    locationType: jobData.locationType,
                });
            } catch (error: any) {
                const errorMessage = error.response?.data?.message || error.message || "Failed to fetch job details";
                console.error("Error fetching job details:", errorMessage);
                toast.error(`Error: ${errorMessage}`);
            } finally {
                setIsLoading(false);
            }
        };

        if (viewId) {
            fetchJobDetails();
        }
    }, [viewId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { requiredSkills, ...restData } = formData;
        const payload = {
            ...restData,
            requiredSkills: requiredSkills.split(",").map((skill) => skill.trim()),
        };
        setIsLoading(true);
        try {
            const response = await axios.put(
                `https://carrerhub-backend.vercel.app/api/v1/job/${viewId}`,
                payload,
                { withCredentials: true }
            );
            if (response.status === 200) {
                setIsEditable(false);
                toast.success("Job details updated successfully");
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || "Failed to update job details";
            console.error("Error updating job:", errorMessage);
            toast.error(`Error: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 bg-[#f5f6fa]">
            <div className="bg-white p-6 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <Link href="/employer/">
                            <Image src={IMAGES.arrow} alt="Back" />
                        </Link>
                        <h1 className="text-neutral-950 text-[28px] font-700">
                            Job Application
                        </h1>
                    </div>
                    <div className="flex items-center text-2xl gap-4 px-4">
                        {isEditable ? (
                            <Button variant="primary" type="submit" form="job-form">
                                Update
                            </Button>
                        ) : (
                            <>
                                <Image
                                    src={IMAGES.Edit}
                                    alt="Edit"
                                    onClick={handleEditClick}
                                    className="cursor-pointer"
                                />
                                <span
                                    onClick={handleEditClick}
                                    className="cursor-pointer text-red-500 font-700"
                                >
                                    Edit
                                </span>
                            </>
                        )}
                    </div>
                </div>
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Oval
                            height={40}
                            width={40}
                            color="#F9533A"
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#f4f4f4"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </div>
                ) : (
                    <form id="job-form" onSubmit={handleSubmit}>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="title" className="text-lg">Job Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    className="p-3 border rounded-xl w-[500px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="employmentType" className="text-lg">Job Type</label>
                                <input
                                    type="text"
                                    name="employmentType"
                                    value={formData.employmentType}
                                    className="p-3 border rounded-xl w-[250px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="responsibilities" className="text-lg">
                                    Roles and Responsibilities - Job Description
                                </label>
                                <textarea
                                    name="responsibilities"
                                    value={formData.responsibilities}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="text-lg">Job Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="applicationDeadline" className="text-lg">Application Deadline</label>
                                <input
                                    type="date"
                                    name="applicationDeadline"
                                    value={formData.applicationDeadline}
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="employmentDuration" className="text-lg">Employment Duration</label>
                                <input
                                    type="text"
                                    name="employmentDuration"
                                    value={formData.employmentDuration}
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="salary" className="text-lg">Salary</label>
                                <input
                                    type="text"
                                    name="salary"
                                    value={formData.salary}
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="locationType" className="text-lg">Location Type</label>
                                <input
                                    type="text"
                                    name="locationType"
                                    value={formData.locationType}
                                    className="p-3 border rounded-xl w-[370px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="requiredSkills" className="text-lg">Required Skills</label>
                                <input
                                    type="text"
                                    name="requiredSkills"
                                    value={formData.requiredSkills}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="extraBenefits" className="text-lg">Extra Benefits</label>
                                <textarea
                                    name="extraBenefits"
                                    value={formData.extraBenefits}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="requirements" className="text-lg">Requirements</label>
                                <textarea
                                    name="requirements"
                                    value={formData.requirements}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="experience" className="text-lg">Experience</label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="location" className="text-lg">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    className="p-3 border rounded-xl w-[770px]"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default JobDetailsPage;
