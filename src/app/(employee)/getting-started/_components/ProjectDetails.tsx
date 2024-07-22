import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from '@/components/Input';
import Button from '@/components/Button';

// Define the type for the project
type Project = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
};

// Define the props type
interface ProjectDetailsProps {
  addProject: (project: Project) => void;
  showOnMount: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ addProject, showOnMount }) => {
  const [project, setProject] = useState<Project>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    link: '',
  });
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (showOnMount) {
      const modalCheckbox = document.getElementById('my_modal_7') as HTMLInputElement;
      if (modalCheckbox) {
        modalCheckbox.checked = true;
      }
    }
  }, [showOnMount]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    if (!project.title || !project.description || !project.startDate || !project.endDate) {
      setValidationError('Please fill out all required fields.');
      return;
    }

    // Call addProject function passed from props
    addProject(project);

    // Clear form fields after submitting
    setProject({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      link: '',
    });

    // Clear validation error
    setValidationError('');

    // Close modal after submitting
    const modalCheckbox = document.getElementById('my_modal_7') as HTMLInputElement;
    if (modalCheckbox) {
      modalCheckbox.checked = false;
    }
  };

  return (
    <div>
      {/* Modal Trigger Button */}
      <label htmlFor="my_modal_7" className="bg-white cursor-pointer">
        <div className='flex justify-end gap-2'>
          <span className='text-primary-500 text-[16px] font-600'>Add More</span>
          <Image src={IMAGES.circle} alt="circle" />
        </div>
      </label>

      {/* Modal Structure */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="max-w-3xl modal-box p-6 bg-white shadow-md rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-4 gap-4">
              <label htmlFor="title" className="text-sm font-medium text-gray-600">Project Title</label>
              <Input
                id="title"
                type="text"
                value={project.title}
                onChange={handleChange}
                placeholder="e.g., Online Gaming App"
                className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col mt-4 gap-4">
              <label htmlFor="description" className="text-sm font-medium text-gray-600">Project Description</label>
              <textarea
                id="description"
                value={project.description}
                onChange={handleChange}
                placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={4}
              />
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="startDate" className="text-sm font-medium text-gray-600">From</label>
                <Input
                  id="startDate"
                  type='date'
                  value={project.startDate}
                  onChange={handleChange}
                  className='border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 w-48'
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="endDate" className="text-sm font-medium text-gray-600">To</label>
                <Input
                  id="endDate"
                  type='date'
                  value={project.endDate}
                  onChange={handleChange}
                  className='border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 w-48'
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-4">
              <label htmlFor="link" className="text-sm font-medium text-gray-600">Project Link</label>
              <Input
                id="link"
                type="text"
                value={project.link}
                onChange={handleChange}
                placeholder="Enter project link"
                className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            {validationError && <p className="text-red-500">{validationError}</p>}
            <div className="flex justify-start mt-6 gap-2">
              <Button variant="primary" type="submit">
                Add Project
              </Button>
            </div>
          </form>
        </div>
        {/* Modal Close Button */}
        <label className="modal-backdrop" htmlFor="my_modal_7" >Close</label>
      </div>
    </div>
  );
};

export default ProjectDetails;
