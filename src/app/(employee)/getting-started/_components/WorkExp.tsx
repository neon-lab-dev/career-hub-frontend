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
  showOnMount: boolean;
}

const WorkExperienceModel: React.FC<WorkExperienceModelProps> = ({ formData, setFormData, showOnMount }) => {
  const [experience, setExperience] = useState<Experience>({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setExperience(prev => ({ ...prev, [id]: value }));
  };

  const handleAddExperience = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      experience: [...prevFormData.experience, experience]
    }));

    // Clear input fields after adding
    setExperience({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    });

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
        <label htmlFor="work_experience_modal" className="bg-white cursor-pointer">
          <div className='flex items-center gap-2'>
            <span className='text-primary-500 text-[16px] font-semibold'>Add More</span>
            <Image src={IMAGES.circle} alt="Add Experience" />
          </div>
        </label>
      </div>

      <input type="checkbox" id="work_experience_modal" className="modal-toggle" />
      <div className="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <div className="max-w-2xl modal-box p-6 bg-white shadow-lg rounded-lg">
          <h2 id="modal-title" className="text-xl font-semibold mb-4">Add Work Experience</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
              <Input
                id="title"
                placeholder="e.g., Software Developer"
                value={experience.title}
                onChange={handleChange}
                className='w-full'
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
              <Input
                id="company"
                placeholder="Company Name"
                value={experience.company}
                onChange={handleChange}
                className='w-full'
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
              <Input
                id="location"
                placeholder="City, State"
                value={experience.location}
                onChange={handleChange}
                className='w-full'
              />
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="startDate" className="text-sm font-medium text-gray-700">Start Date</label>
                <Input
                  id="startDate"
                  type="date"
                  value={experience.startDate}
                  onChange={handleChange}
                  className='w-full'
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="endDate" className="text-sm font-medium text-gray-700">End Date</label>
                <Input
                  id="endDate"
                  type="date"
                  value={experience.endDate}
                  onChange={handleChange}
                  className='w-full'
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                placeholder="Describe your role and responsibilities"
                value={experience.description}
                onChange={handleChange}
                className='border p-4 rounded-lg w-full'
              />
            </div>
            <Button variant="primary" className='mt-4 w-full' onClick={handleAddExperience}>
              Add Experience
            </Button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="work_experience_modal">Close</label>
      </div>
    </div>
  );
}

export default WorkExperienceModel;
