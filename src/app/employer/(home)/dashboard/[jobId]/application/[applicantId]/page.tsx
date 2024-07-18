"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import addCircle from "@/assets/icons/Add Circle.svg";
import { ICONS, IMAGES } from '@/assets';
import Chip from '@/components/Chip';

interface ProfileProps {
    params: {
        applicantId: string;
        jobId: string;
    };
}

interface Project {
    _id: string;
    title: string;
    description: string;
    link: string;
}

interface Experience {
    _id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Certification {
    _id: string;
    name: string;
    issuingOrganization: string;
    issueDate: string;
    expirationDate: string;
    credentialURL: string;
}

const Profile = ({ params: { applicantId, jobId } }: ProfileProps) => {
    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            // Mock data
            const mockData = {
                employee: {
                    full_name: "John Doe",
                    education: [{ institutionName: "University of Example" }],
                    projects: [
                        {
                            _id: "1",
                            title: "Project One",
                            description: "Description for project one.",
                            link: "http://example.com/project-one"
                        },
                        {
                            _id: "2",
                            title: "Project Two",
                            description: "Description for project two.",
                            link: "http://example.com/project-two"
                        }
                    ],
                    experience: [
                        {
                            _id: "1",
                            title: "Software Engineer",
                            company: "Example Corp",
                            location: "New York, NY",
                            startDate: "2020-01-01",
                            endDate: "2022-01-01",
                            description: "Worked on various projects."
                        },
                        {
                            _id: "2",
                            title: "Senior Developer",
                            company: "Another Corp",
                            location: "San Francisco, CA",
                            startDate: "2022-02-01",
                            endDate: "Present",
                            description: "Leading development teams."
                        }
                    ],
                    certifications: [
                        {
                            _id: "1",
                            name: "Certified Developer",
                            issuingOrganization: "Certification Authority",
                            issueDate: "2021-01-01",
                            expirationDate: "2023-01-01",
                            credentialURL: "http://example.com/credential"
                        }
                    ],
                    skills: ["JavaScript", "React", "Node.js"],
                    resumes: { url: "/path/to/resume.pdf" }
                }
            };

            try {
                // Simulate API call with mock data
                setProfileData(mockData.employee);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                toast.error('Failed to fetch profile data');
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [applicantId]);

    const handleApprove = async () => {
        setActionLoading(true);
        try {
            await axios.put('https://carrerhub-backend.vercel.app/api/v1/jobs/manage', {
                jobId: jobId,
                applicantId: applicantId,
                status: 'HIRED'
            }, {
                withCredentials: true, // Include credentials in the request
            });
            toast.success('Applicant approved successfully.');
        } catch (error: any) {
            toast.error(`Error: ${error.message}`);
        } finally {
            setActionLoading(false);
        }
    };

    const handleReject = async () => {
        setActionLoading(true);
        try {
            await axios.put('https://carrerhub-backend.vercel.app/api/v1/jobs/manage', {
                jobId: jobId,
                applicantId: applicantId,
                status: 'REJECTED'
            }, {
                withCredentials: true, // Include credentials in the request
            });
            toast.success('Applicant rejected successfully.');
        } catch (error: any) {
            toast.error(`Error: ${error.message}`);
        } finally {
            setActionLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
        );
    }

    if (!profileData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>No profile data available.</p>
            </div>
        );
    }

    const { full_name, education, projects, avatar, experience, certifications, skills, resumes } = profileData;

    return (
        <div className="pt-10 pb-2 bg-secondary-50">
            <div className='bg-white p-10 m-10'>
                <div className='flex justify-between my-10 ml-10 items-center'>
                    <div className='flex gap-6 items-center'>
                        <Link href={`/employer/dashboard/${jobId}`}>
                            <Image src={IMAGES.arrow} alt={''} />
                        </Link>
                        <h1 className='text-neutral-950 text-[28px] font-700'>Application</h1>
                    </div>
                    <div className='flex gap-4'>
                        <Button onClick={handleApprove} className="flex items-center gap-[6px] max-w-[150px] justify-center bg-green-500" variant="normal" disabled={actionLoading}>
                            Approve
                        </Button>
                        <Button onClick={handleReject} className="flex items-center gap-[6px] max-w-[200px] justify-center" variant="normal" disabled={actionLoading}>
                            <Image src={addCircle} alt="addCircle" className='rotate-45' />
                            Reject
                        </Button>
                    </div>
                </div>
                <div className="max-width flex">
                    <div className="flex max-lg:flex-col w-full bg-secondary-200 border border-neutral-100 p-6 max-lg:px-2 max-md:py-4 justify-between rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                        <div className='flex gap-4 items-center'>
                            <div>
                             
                            </div>
                            <div className='font-plus-jakarta-sans'>
                                <div className='flex gap-2'>
                                    <span className='text-neutral-950 text-2xl max-md:text-lg font-600'>{full_name}</span>
                                    <Image src={ICONS.penResume} alt='pen' />
                                </div>
                                <span className='text-neutral-600 text-lg max-md:text-xs'>{education[0]?.institutionName}</span>
                            </div>
                        </div>
                        <Button variant='normal'>
                            <div className='flex gap-2 p-2'>
                                <span className='text-xl'>Download Resume</span>
                                <a href={resumes?.url} download target="_blank" rel="noopener noreferrer">
                                    <Image src={IMAGES.download} alt='download' />
                                </a>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="pt-2 pb-10 mt-10 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Project Details</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            {projects.map((project: Project) => (
                                <div key={project._id} className="flex max-md:flex-col max-md:gap-3 justify-between items-center p-4 border border-neutral-100 rounded-xl my-2 text-left">
                                    <div className='text-neutral-950 text-lg max-md:text-sm font-600'>
                                        {project.title}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        {project.description}
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <Link href={project.link} target="_blank" className='text-blue-500 text-lg max-md:text-xs'>
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Experience</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            {experience.map((exp: Experience) => (
                                <div key={exp._id} className="flex max-md:flex-col max-md:gap-3 justify-between items-center p-4 border border-neutral-100 rounded-xl my-2 text-left">
                                    <div className='text-neutral-950 text-lg max-md:text-sm font-600'>
                                        {exp.title} - {exp.company}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        {exp.startDate} - {exp.endDate}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        {exp.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Certifications</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            {certifications.map((cert: Certification) => (
                                <div key={cert._id} className="flex max-md:flex-col max-md:gap-3 justify-between items-center p-4 border border-neutral-100 rounded-xl my-2 text-left">
                                    <div className='text-neutral-950 text-lg max-md:text-sm font-600'>
                                        {cert.name} - {cert.issuingOrganization}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        {cert.issueDate} - {cert.expirationDate}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        <Link href={cert.credentialURL} target="_blank" className='text-blue-500 text-lg max-md:text-xs'>
                                            View Credential
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Skills</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill: string, index: number) => (
                                    <Chip key={index} variant='close'>
                                        {skill}
                                        </Chip>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
