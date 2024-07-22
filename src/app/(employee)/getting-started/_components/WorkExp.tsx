import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface FormData {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  education: any[];
  projects: any[];
  experience: Experience[];
  certifications: any[];
  skills: string[];
  socialLinks: {
    linkedin: string;
    github: string;
  }[];
  interests: string[];
}

interface WorkExperienceModelProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showOnMount: any;
}

const WorkExperienceModel: React.FC<WorkExperienceModelProps> = ({ formData, setFormData, showOnMount }) => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddExperience = () => {
        const newExperience: Experience = {
            title,
            company,
            location,
            startDate,
            endDate,
            description
        };

        setFormData(prevFormData => ({
            ...prevFormData,
            experience: [...prevFormData.experience, newExperience]
        }));

        // Clear input fields after adding
        setTitle('');
        setCompany('');
        setLocation('');
        setStartDate('');
        setEndDate('');
        setDescription('');

        // Close modal after adding experience
        const modal = document.getElementById('work_experience_modal') as HTMLInputElement | null;
        if (modal) {
            modal.checked = false;
        }
    };

    // Effect to show modal on mount
    useEffect(() => {
        if (showOnMount) {
            const modal = document.getElementById('work_experience_modal') as HTMLInputElement | null;
            if (modal) {
                modal.checked = true;
            }
        }
    }, [showOnMount]);

    return (
        <div>
            <div className='flex justify-end'>
                <label htmlFor="work_experience_modal" className="bg-white">
                    <div className='flex justify-end gap-2 cursor-pointer max-md:mx-4'>
                        <span className='text-primary-500 text-[16px] font-600'>Add More </span>
                        <Image src={IMAGES.circle} alt="circle" />
                    </div>
                </label>
            </div>

            <input type="checkbox" id="work_experience_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="max-w-2xl max-md:w-[350px] modal-box">
                    <div className="flex max-md:flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title">Title</label>
                            <Input
                                id="title"
                                placeholder="e.g., Software Developer"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="company">Company</label>
                            <Input
                                id="company"
                                placeholder="Company Name"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location">Location</label>
                            <Input
                                id="location"
                                placeholder="City, State"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="startDate">Start Date</label>
                            <Input
                                id="startDate"
                                placeholder="Start Date"
                                type='date'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="endDate">End Date</label>
                            <Input
                                id="endDate"
                                placeholder="End Date"
                                type='date'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                placeholder="Describe your role and responsibilities"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className='border p-4 rounded-xl w-[310px]'
                            />
                        </div>
                    </div>
                    <Button variant="primary" className='mt-4' onClick={handleAddExperience}>
                        {"Add Experience"}
                    </Button>
                </div>
                <label className="modal-backdrop" htmlFor="work_experience_modal">Close</label>
            </div>
        </div>
    );
}

export default WorkExperienceModel;
