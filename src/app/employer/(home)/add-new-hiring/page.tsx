"use client"
import { useState } from 'react';
import axios from 'axios';
import { ICONS, IMAGES } from '@/assets';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const Page = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        requirements: '',
        requiredSkills: '',
        responsibilities: '',
        locationType: '',
        location: '',
        employmentType: '',
        employmentDuration: '',
        salary: '',
        applicationDeadline: '',
        extraBenefits: '',
        experience: '',
    });
    const [isLoading, setIsLoading] = useState(false);

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
            requiredSkills: requiredSkills.split(',').map(skill => skill.trim()),
        };

        setIsLoading(true);

        try {
            const response = await axios.post('https://carrerhub-backend.vercel.app/api/v1/createjob', payload);
            if (response.status === 200) {
                toast.success('Job created successfully');
            }
        } catch (error) {
            console.error('Error creating job:', error);
            toast.error(error.response?.data?.message || 'Failed to create job');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='p-6 bg-[#f5f6fa]'>
            <ToastContainer />
            <div className='bg-white p-6 rounded-xl'>
                <div className='flex justify-between'>
                    <div className='flex gap-6 items-center'>
                        <Link href="/employer/"><Image src={IMAGES.arrow} alt={''} /></Link>
                        <h1 className='text-neutral-950 text-[28px] font-700'>Add New Hiring</h1>
                    </div>
                </div>
                {isLoading ? (
                    <div className="flex justify-center items-center h-96">
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
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-center mt-16 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="title"><span className='text-lg'>Job Title</span></label>
                                <input type="text" name="title" placeholder='eg., UX Designer' className='p-3 border rounded-xl w-[500px]' onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="employmentType"><span className='text-lg'>Job Type</span></label>
                                <input type="text" name="employmentType" placeholder='eg., Full-Time' className='p-3 border rounded-xl w-[250px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="responsibilities"><span className='text-lg'>Roles and Responsibilities - Job Description</span></label>
                                <textarea name="responsibilities" placeholder='eg., UX Designer' className='p-3 border rounded-xl w-[770px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="description"><span className='text-lg'>Job Description</span></label>
                                <textarea name="description" placeholder='Analyze and interpret complex data.' className='p-3 border rounded-xl w-[770px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="applicationDeadline"><span className='text-lg'>Application Deadline</span></label>
                                <input type="date" name="applicationDeadline" className='p-3 border rounded-xl w-[370px]' onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="employmentDuration"><span className='text-lg'>Employment Duration</span></label>
                                <input type="number" name="employmentDuration" placeholder='eg., 2 years' className='p-3 border rounded-xl w-[370px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="salary"><span className='text-lg'>Salary</span></label>
                                <input type="number" placeholder='eg.,10000' name="salary" className='p-3 border rounded-xl w-[380px]' onChange={handleChange} />
                            </div>
                            <div className='flex justify-center  gap-6'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="locationType"><span className='text-lg'>Location Type</span></label>
                                    <input type="text" name="locationType" placeholder='eg., Onsite' className='p-3 border rounded-xl w-[370px]' onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="requiredSkills"><span className='text-lg'>Skills Required</span></label>
                                <input type="text" name="requiredSkills" placeholder='eg., UI, UX, Design' className='p-3 border rounded-xl w-[370px]' onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="extraBenefits"><span className='text-lg'>Extra Benefits</span></label>
                                <input type="text" name="extraBenefits" placeholder='eg., Hehe' className='p-3 border rounded-xl w-[370px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="requirements"><span className='text-lg'>Requirements</span></label>
                                <textarea name="requirements" placeholder='Experience with statistical analysis.' className='p-3 border rounded-xl w-[750px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="experience">
                                    <span className='text-lg'>Experience</span>
                                </label>
                                <select
                                    name="experience"
                                    className='p-3 border rounded-xl w-[370px]'
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected>Select your experience</option>
                                    
                                    {[...Array(11).keys()].map(year => (
                                        <option key={year + 1} value={`${year + 1} year${year + 1 > 1 ? 's' : ''}`}>
                                            {year } year{year + 1 > 1 ? 's' : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="location"><span className='text-lg'>Location</span></label>
                                <input type="text" name="location" placeholder='eg., 505 Data Center, Koregaon Park, Pune, Maharashtra, India, 411001' className='p-3 border rounded-xl w-[370px]' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex justify-center w-[750px]'>
                            <Button variant='primary' className='mt-4'>Submit</Button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Page;