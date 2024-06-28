"use client"

import { useState } from 'react';
import Input from "@/components/Input";
import Button from '@/components/Button';
import Chip from '@/components/Chip';

const ResumeWorkExpModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* The button to open modal */}
      <div className='flex'>
        <div onClick={toggleModal} className="bg-white cursor-pointer">
          <Chip variant="add" className="w-[140px] items-center">
            <span>Add New</span>
          </Chip>
        </div>
      </div>

      {isOpen && (
        <div className="modal modal-open">
          <div className="max-w-2xl max-md:w-[350px] modal-box">
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="company-name" className="text-left">Company Name</label>
                <Input
                  id="company-name"
                  placeholder="e.g., Google"
                  className='w-[300px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city-state" className="text-left">City, State</label>
                <Input
                  id="city-state"
                  placeholder="e.g., San Francisco, CA"
                  className='w-[300px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="from" className="text-left">From</label>
                <Input
                  id="from"
                  type='month'
                  className='w-[300px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="to" className="text-left">To</label>
                <Input
                  id="to"
                  type='month'
                  className='w-[300px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="work-description" className="text-left">Work Description</label>
              <textarea
                id="work-description"
                placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
                className='border px-2 py-4 rounded-xl placeholder:text-sm'
              />
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="project-links" className="text-left">Project Links</label>
              <Input
                id="project-links"
                type="text"
                placeholder="Link Here"
              />
            </div>
            <div className='flex mt-6'>
              <Button variant="primary">
                {"Add Work Experience"}
              </Button>
            </div>
          </div>
          <label className="modal-backdrop" onClick={toggleModal}>Close</label>
        </div>
      )}
    </div>
  );
};

export default ResumeWorkExpModel;
