"use client"
import React, { useState } from 'react';
import Input from "@/components/Input";
import Button from '@/components/Button';
import Chip from '@/components/Chip';

const ResumeProjectDetailsModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* The button to open modal */}
      <div className='flex justify-end'>
        <div onClick={toggleModal} className="bg-white cursor-pointer">
          <Chip variant="add" className="w-[140px] items-center">
            <span>Add New</span>
          </Chip>
        </div>
      </div>
      {isOpen && (
        <div className="modal modal-open">
          <div className="max-w-xl modal-box">
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="Project Title">Project Title</label>
              <Input
                id="Project Title"
                type="text"
                placeholder="eg., Online Gaming App"
              />
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="Project Description">Project Description</label>
              <textarea
                id="Project Description"
                placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
                className='border px-2 py-4 rounded-xl placeholder:text-sm'
              />
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="From">From</label>
                <Input
                  id="From"
                  placeholder=""
                  type='month'
                  className='w-[250px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="to">to</label>
                <Input
                  id="to"
                  placeholder=""
                  type='month'
                  className='w-[250px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
            </div>
            <Button variant="primary" className='mt-4'>
              {"Add Project"}
            </Button>
          </div>
          <label className="modal-backdrop" onClick={toggleModal}>Close</label>
        </div>
      )}
    </div>
  );
}

export default ResumeProjectDetailsModel;
