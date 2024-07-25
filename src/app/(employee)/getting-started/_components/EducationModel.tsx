import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

// Define the Certificate type
type Certificate = {
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
};

// Define the FormData type
interface FormData {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  education: Certificate[];
  projects: any[];
  experience: any[];
  certifications: any[];
  skills: string[];
  socialLinks: {
    linkedin: string;
    github: string;
  }[];
  interests: string[];
}

// Define the prop types
interface EducationModelProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showOnMount: boolean;
}

const EducationModel: React.FC<EducationModelProps> = ({ formData, setFormData, showOnMount }) => {
  const [institutionName, setInstitutionName] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [validationError, setValidationError] = useState('');

  // Function to handle adding a new education entry
  const handleAddEducation = () => {
    // Simple validation
    if (!institutionName || !degree || !fieldOfStudy || !startDate || !endDate) {
      setValidationError('Please fill out all fields.');
      return;
    }

    const newEducation: Certificate = {
      institutionName,
      degree,
      fieldOfStudy,
      startDate,
      endDate
    };

    setFormData(prevFormData => ({
      ...prevFormData,
      education: [...prevFormData.education, newEducation]
    }));

    // Clear input fields after adding
    setInstitutionName('');
    setDegree('');
    setFieldOfStudy('');
    setStartDate('');
    setEndDate('');
    setValidationError('');

    // Close modal after adding education
    const modalCheckbox = document.getElementById('education-modal') as HTMLInputElement | null;
    if (modalCheckbox) {
      modalCheckbox.checked = false;
    }
  };

  // Effect to show modal on mount
  useEffect(() => {
    if (showOnMount) {
      const modalCheckbox = document.getElementById('education-modal') as HTMLInputElement | null;
      if (modalCheckbox) {
        modalCheckbox.checked = true;
      }
    }
  }, [showOnMount]);

  return (
    <div>
      {/* Modal Trigger Button */}
      <label htmlFor="education-modal" className="bg-white cursor-pointer">
        <div className='flex justify-end gap-2'>
          <span className='text-primary-500 text-[16px] font-600'>Add More</span>
          <Image src={IMAGES.circle} alt="circle" />
        </div>
      </label>

      {/* Modal Structure */}
      <input type="checkbox" id="education-modal" className="modal-toggle" />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="max-w-2xl max-md:w-[350px] modal-box">
          <div className="flex max-md:flex-col gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="institution-name">Institution Name</label>
              <Input
                id="institution-name"
                placeholder="e.g., Meenakshi College of Engineering"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                className='w-[310px]'
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="degree">Degree</label>
              <Input
                id="degree"
                placeholder="Degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className='w-[310px]'
              />
            </div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="field-of-study">Field of Study</label>
              <Input
                id="field-of-study"
                placeholder="Field of Study"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                className='w-[310px]'
              />
            </div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="start-date">Start Date</label>
              <Input
                id="start-date"
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className='w-[310px]'
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="end-date">End Date</label>
              <Input
                id="end-date"
                type='date'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className='w-[310px]'
              />
            </div>
          </div>
          {validationError && <p className="text-red-500">{validationError}</p>}
          <Button
            variant="primary"
            type='button'
            className='mt-4'
            onClick={handleAddEducation}
          >
            Add Education
          </Button>
        </div>
        {/* Modal Close Button */}
        <label className="modal-backdrop" htmlFor="education-modal">Close</label>
      </div>
    </div>
  );
};

export default EducationModel;
