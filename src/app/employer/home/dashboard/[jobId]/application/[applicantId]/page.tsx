"use client";
import { ICONS, IMAGES } from '@/assets';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import addCircle from "@/assets/icons/Add Circle.svg";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import Chip from '@/components/Chip';

const Profile = ({ params: { applicantId, jobId } }) => {
    const points = [
        'Lorem ipsum dolor sit amet consectetur.',
        'Egestas porttitor dignissim dolor lectus molestie pharetra.',
        'Scelerisque tincidunt iaculis ut sagittis eros.',
        'Eleifend turpis pellentesque molestie condimentum magna felis.',
    ];
    const skillsData = [
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' },
        { id: 1, name: 'React' },
        { id: 2, name: 'next' },
        { id: 3, name: 'Express js' },
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' },
        { id: 1, name: 'React' },
        { id: 2, name: 'next' },
        { id: 3, name: 'Express js' },
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' },
        { id: 1, name: 'React' },
        { id: 2, name: 'next' },
        { id: 3, name: 'Express js' },
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' },
        { id: 1, name: 'React' },
        { id: 2, name: 'next' },
        { id: 3, name: 'Express js' },
        // Add more skills as needed
    ];
    // const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);

    // useEffect(() => {
    //     const fetchProfileData = async () => {
    //         try {
    //             const response = await axios.get(`https://carrerhub-backend.vercel.app/api/v1/admin/employee/${applicantId}`);
    //             setProfileData(response.data.employee);
    //         } catch (err) {
    //             console.error('Error fetching profile data:', err);
    //             toast.error('Failed to fetch profile data');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProfileData();
    // }, [applicantId]);

    const handleApprove = async () => {
        setActionLoading(true);
        try {
            await axios.put('https://carrerhub-backend.vercel.app/api/v1/jobs/manage', {
                jobId: jobId,
                applicantId: applicantId,
                status: 'HIRED'
            });
            toast.success(` ${error.message}`);
        } catch (error) {
            toast.error(` ${error.message}`);
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
            });
            toast.success('Applicant rejected successfully.');
        } catch (error) {
            toast.error(` ${error.message}`);
        } finally {
            setActionLoading(false);
        }
    };

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <TailSpin color="#00BFFF" height={80} width={80} />
    //         </div>
    //     );
    // }

    // const { full_name, education, projects, avatar } = profileData;

    return (
        <div className="pt-10 pb-2 bg-secondary-50">
            <ToastContainer />
            <div className='bg-white p-10 m-10'>
                <div className='flex justify-between my-10 ml-10 items-center'>
                    <div className='flex gap-6 items-center'>
                        <Link href={`/employer/home/dashboard/${jobId}`}>
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
                            {/* <div>
                                <div className='bg-neutral-100 border-[3px] border-white rounded-full w-[60px] h-[60px]'>
                                    <Image src={avatar.url} alt="avatar" className='rounded-full' />
                                </div>
                            </div>
                            <div className='font-plus-jakarta-sans'>
                                <div className='flex gap-2'>
                                    <span className='text-neutral-950 text-2xl max-md:text-lg font-600'>{full_name}</span>
                                    <Image src={ICONS.penResume} alt='pen' />
                                </div>
                                <span className='text-neutral-600 text-lg max-md:text-xs'>{education[0].institutionName}</span>
                            </div> */}
                        </div>
                        <Button variant='normal'>
                            <div className='flex gap-2 p-2'>
                                <span className='text-xl'>Download Resume</span>
                                <Image src={IMAGES.download} alt='download' />
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="pt-2 pb-10 mt-10 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-base">Project Details</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            <div className="flex max-md:flex-col max-md:justify-end justify-between items-start border-2 border-neutral-100 p-6 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <div className="font-plus-jakarta-sans">
                                        <div className="flex gap-2">
                                            <span className="text-neutral-950 text-xl font-600">Project name</span>
                                        </div>
                                        <ul className='flex flex-col gap-1 justify-start text-start list-disc text-sm px-1 py-1'>
                                            {points.map((point, index) => (
                                                <li key={index} className="text-neutral-600 ">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10 mt-8 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Work Experience</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            <div className="flex justify-between max-md:flex-col items-start border-2 border-neutral-100 p-6 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <div className="font-plus-jakarta-sans">
                                        <div className="flex gap-2">
                                            <div className='flex flex-col items-start'>
                                                <span className="text-neutral-950 text-xl font-600 max-md:text-sm">UX Designer @Google, Chennai</span>
                                                <span className='text-sm text-neutral-500 max-md:text-xs'>Apr 2022 - Present (25 months) | Part-time</span>
                                            </div>
                                        </div>
                                        <ul className='flex flex-col gap-1 justify-start text-start list-disc text-md max-md:text-sm px-4 py-2'>
                                            {points.map((point, index) => (
                                                <li key={index} className="text-neutral-600 ">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10  font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 max-md:mx-4 mx-16 text-center">
                            <div className="flex justify-between px-2 py-3  rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Certifications</span>
                                </div>
                            </div>
                            <hr className='pb-10 mx-4' />
                            <div className="flex justify-between items-start max-md:items-center border-2 border-neutral-100 p-6 max-md:p-3 rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <div className="font-plus-jakarta-sans">
                                        <div className="flex gap-2">
                                            <div className='flex  items-center gap-3 max-md:gap-1'>
                                                <span className="text-neutral-950 text-xl font-600 max-md:text-xs">Certificate From google </span>
                                                <span className=' text-sm text-neutral-500 max-md:text-xs'>Apr 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10  font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                            <div className="flex justify-between px-2 py-3  rounded-xl">
                                <div className="flex gap-4 items-center">
                                    <span className="text-4xl text-secondary-700 font-600">Skills</span>
                                </div>
                            </div>
                            <hr className=' pb-10 mx-4' />
                            <div className="flex justify-start flex-wrap items-start border-2 border-neutral-100 p-6 max-md:p-1 rounded-xl">
                                {skillsData.map((skill) => (
                                    <div key={skill.id} className='flex items-center gap-3'>
                                        <Chip variant="close" className="items-center ">
                                            <span>{skill.name}</span>
                                        </Chip>
                                    </div>
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
