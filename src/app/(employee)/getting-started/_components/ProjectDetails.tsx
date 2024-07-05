import React, { useState } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

const ProjectDetails = ({ addProject }) => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    link: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addProject(project);
    setProject({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      link: '',
    });
  };

  

  return (
    <div>
      {/* The button to open modal */}
      <div className=' flex justify-end'>
        <label htmlFor="my_modal_7" className=" bg-white">
          <div className=' flex justify-end gap-2 cursor-pointer'>
            <span className=' text-primary-500 text-[16px] font-600'>Add More</span>
            <Image src={IMAGES.circle} alt="circle" />
          </div>
        </label>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className=" max-w-3xl modal-box">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="title">Project Title</label>
              <Input
                id="title"
                type="text"
                value={project.title}
                onChange={handleChange}
                placeholder="eg., Online Gaming App"
              />
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="description">Project Description</label>
              <textarea
                id="description"
                value={project.description}
                onChange={handleChange}
                placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
                className='border p-4 rounded-xl'
              />
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="startDate">From</label>
                <Input
                  id="startDate"
                  type='date'
                  value={project.startDate}
                  onChange={handleChange}
                  className='w-[250px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="endDate">To</label>
                <Input
                  id="endDate"
                  type='date'
                  value={project.endDate}
                  onChange={handleChange}
                  className='w-[250px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="link">Project Link</label>
              <Input
                id="link"
                type="text"
                value={project.link}
                onChange={handleChange}
                placeholder="Enter project link"
              />
            </div>
            <Button variant="primary" className='mt-4' type="submit">
              {"Add Project"}
            </Button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  );
};

export default ProjectDetails;
