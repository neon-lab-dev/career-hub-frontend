// components/Profile.tsx
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { TailSpin } from 'react-loader-spinner';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import addCircle from "@/assets/icons/Add Circle.svg";
import { ICONS, IMAGES } from '@/assets';
import Chip from '@/components/Chip';

// Card Component
interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
    return (
        <div className={`w-full bg-white border border-neutral-100 p-6 rounded-2xl items-center gap-5 mx-10 text-center ${className}`}>
            <div className="flex justify-between px-2 py-3 rounded-xl">
                <div className="flex gap-4 items-center">
                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">{title}</span>
                </div>
            </div>
            <hr className='pb-10 mx-4' />
            {children}
        </div>
    );
};

// Profile Component
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
    const [profileData, setProfileData] = useState < any > (null);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`https://carrerhub-backend.vercel.app/api/v1/employeer/employee/${applicantId}`, {
                    withCredentials: true,
                });
                setProfileData(response.data.emp);
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
                withCredentials: true,
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
                withCredentials: true,
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

    const { full_name, education, projects, avatar, experience, certifications, skills, resumes, socialLinks, interests } = profileData;

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
                                {avatar ? (
                                    <Image src={avatar.url} alt="avatar" width={100} height={100} className="rounded-full" />
                                ) : (
                                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                                        No Avatar
                                    </div>
                                )}
                            </div>
                            <div className='font-plus-jakarta-sans'>
                                <div className='flex gap-2'>
                                    <span className='text-neutral-950 text-2xl max-md:text-lg font-600'>{full_name}</span>
                                    <Image src={ICONS.penResume} alt='pen' />
                                </div>
                                {education && education.length > 0 ? (
                                    <span className='text-neutral-600 text-lg max-md:text-xs'>{education[0]?.institutionName}</span>
                                ) : (
                                    <span className='text-neutral-600 text-lg max-md:text-xs'>No education details available</span>
                                )}
                            </div>
                        </div>
                        {resumes ? (
                            <a href={resumes.url} download target='blank' className='flex items-center justify-center gap-2'>
                                <Button variant='primary' className="flex items-center gap-[6px] max-w-[150px] justify-center bg-blue-500">
                                    <span className='text-xl'>Download</span>
                                    <Image src={IMAGES.download} alt='download' />
                                </Button>
                            </a>
                        ) : (
                            <p>No resume available</p>
                        )}
                    </div>
                </div>
                <div className="pt-2 pb-10 mt-10 font-plus-jakarta-sans">
                    <Card title="Project Details">
                        {projects && projects.length > 0 ? (
                            projects.map((project: Project) => (
                                <div key={project._id} className="flex flex-col max-md:gap-3 p-4 border border-neutral-100 rounded-xl my-2 text-left">
                                    <div className='text-neutral-950 text-3xl max-md:text-sm font-900 mb-5'>
                                        {project.title}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs mb-5'>
                                        <li className='list-disc'>
                                            {project.description}
                                        </li>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <Link href={project.link} target="_blank" className='text-blue-500 text-lg max-md:text-xs'>
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No project details available</p>
                        )}
                    </Card>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <Card title="Experience">
                        {experience && experience.length > 0 ? (
                            experience.map((exp: Experience) => (
                                <div key={exp._id} className="flex flex-col p-4 border border-neutral-100 rounded-xl my-2 text-left">
                                    <div className='text-neutral-950 text-3xl max-md:text-sm font-600'>
                                        {exp.title} @ {exp.company}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        {exp.startDate} - {exp.endDate}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs mt-5'>
                                        {exp.description}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No experience details available</p>
                        )}
                    </Card>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <Card title="Certifications">
                        {certifications && certifications.length > 0 ? (
                            certifications.map((cert: Certification) => (
                                <div key={cert._id} className="flex flex-col p-4 border border-neutral-100 rounded-xl my-2 text-left">
                                    <div className='text-neutral-950 text-3xl max-md:text-sm font-600'>
                                        {cert.name} @ {cert.issuingOrganization}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs'>
                                        {cert.issueDate} - {cert.expirationDate}
                                    </div>
                                    <div className='text-neutral-600 text-lg max-md:text-xs mt-5'>
                                        <a href={cert.credentialURL} target="_blank" className='text-blue-500 text-lg max-md:text-xs'>
                                            View Credential
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No certifications available</p>
                        )}
                    </Card>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <Card title="Skills">
                        {skills && skills.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill: string, index: number) => (
                                    <Chip key={index}  variant='close'>{skill}</Chip>
                                ))}
                            </div>
                        ) : (
                            <div className='flex  justify-center text-center'>
                                    <p className='text-center'>No Skills links available</p>
                                </div>
                        )}
                    </Card>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <Card title="Social Links">
                        <div className="flex gap-2 flex-wrap ">
                            {socialLinks ? (
                                Object.keys(socialLinks).map((key) => (
                                    <a key={key} href={socialLinks[key]} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                        <Chip key={key} variant='close'>{key}</Chip>
                                    </a>
                                ))
                            ) : (
                                <div className='flex ml-[480px] justify-center text-center'>
                                    <p className='text-center'>No social links available</p>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
                <div className="pt-2 pb-10 font-plus-jakarta-sans">
                    <Card title="Interests">
                        {interests && interests.length > 0 ? (
                            <div className="flex gap-2 flex-wrap justify-center">
                                {interests.map((interest: string) => (
                                    <Chip key={interest}  variant='close'>{interest}</Chip>
                                ))}
                            </div>
                        ) : (
                            <p>No interests available</p>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
