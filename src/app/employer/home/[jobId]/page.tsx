"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { IMAGES } from '@/assets';

const JobDetailsPage = ({ params }: { params: { jobId: string } }) => {
    const { jobId } = params;
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

    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`https://carrerhub-backend.vercel.app/api/v1/job/${jobId}`);
                console.log('Job details response:', response.data);
                setFormData(response.data.job || {});
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        if (jobId) {
            fetchJobDetails();
        }
    }, [jobId]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const { requiredSkills, ...restData } = formData;
        const payload = {
            ...restData,
            requiredSkills: requiredSkills.split(',').map(skill => skill.trim()),
        };
        try {
            const response = await axios.put(`https://carrerhub-backend.vercel.app/api/v1/job/${formData.id}`, payload);
            if (response.status === 200) {
                setIsEditable(false);
            }
        } catch (error) {
            console.error('Error updating job:', error);
          
        }
    };

    return (
        <div className='p-6 bg-[#f5f6fa]'>
            <div className='bg-white p-6 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-6 items-center'>
                        <Link href="/employer/home">
                            <Image src={IMAGES.arrow} alt='' />
                        </Link>
                        <h1 className='text-neutral-950 text-[28px] font-700'>Job Application</h1>
                    </div>
                    <div className='flex items-center text-2xl gap-4 px-4 text-red-500 font-700'>
                        <Image src={IMAGES.Edit} alt='' />
                        <span onClick={handleEditClick} className='cursor-pointer'>Edit</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="title"><span className='text-lg'>Job Title</span></label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                className='p-3 border rounded-xl w-[500px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="employmentType"><span className='text-lg'>Job Type</span></label>
                            <input
                                type="text"
                                name="employmentType"
                                value={formData.employmentType}
                                className='p-3 border rounded-xl w-[250px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="responsibilities"><span className='text-lg'>Roles and Responsibilities - Job Description</span></label>
                            <textarea
                                name="responsibilities"
                                value={formData.responsibilities}
                                className='p-3 border rounded-xl w-[770px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="description"><span className='text-lg'>Job Description</span></label>
                            <textarea
                                name="description"
                                value={formData.description}
                                className='p-3 border rounded-xl w-[770px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="applicationDeadline"><span className='text-lg'>Application Deadline</span></label>
                            <input
                                type="date"
                                name="applicationDeadline"
                                value={formData.applicationDeadline}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="employmentDuration"><span className='text-lg'>Employment Duration</span></label>
                            <input
                                type="text"
                                name="employmentDuration"
                                value={formData.employmentDuration}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="salary"><span className='text-lg'>Salary</span></label>
                            <input
                                type="text"
                                name="salary"
                                value={formData.salary}
                                className='p-3 border rounded-xl w-[750px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="requiredSkills"><span className='text-lg'>Skills Required</span></label>
                            <input
                                type="text"
                                name="requiredSkills"
                                value={formData.requiredSkills}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="extraBenefits"><span className='text-lg'>Extra Benefits</span></label>
                            <input
                                type="text"
                                name="extraBenefits"
                                value={formData.extraBenefits}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="requirements"><span className='text-lg'>Requirements</span></label>
                            <textarea
                                name="requirements"
                                value={formData.requirements}
                                className='p-3 border rounded-xl w-[750px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="experience"><span className='text-lg'>Experience</span></label>
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="location"><span className='text-lg'>Location</span></label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="locationType"><span className='text-lg'>Location Type</span></label>
                            <input
                                type="text"
                                name="locationType"
                                value={formData.locationType}
                                className='p-3 border rounded-xl w-[370px]'
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center w-[600px]'>
                        <Button variant='primary' className='mt-4' type='submit' disabled={!isEditable}>Update Job</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobDetailsPage;
