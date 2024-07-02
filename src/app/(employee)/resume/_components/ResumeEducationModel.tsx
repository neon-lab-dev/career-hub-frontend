"use client"
import { useState } from 'react';
import Input from "@/components/Input";
import Button from '@/components/Button';
import Chip from '@/components/Chip';

const ResumeEducationModel = () => {
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
          <div className="max-w-xl max-md:w-[350px] modal-box">
            <div className="flex max-md:flex-col gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="Institute Name">Institute Name</label>
                <Input
                  id="Institute Name"
                  placeholder="eg., Meenakshi college of engineering"
                  className='w-[310px]'
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="City, State">City, State</label>
                <Input
                  id="pinCode"
                  placeholder="mm/yyyy"
                  type='month'
                />
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="Course">Course</label>
                <Input
                  id="Course"
                  placeholder="link here"
                  className='w-[250px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="eg., 9/10">Grade / Percentage</label>
                <Input
                  id="eg., 9/10"
                  placeholder="eg., 9/10"
                  type='text'
                  className='w-[250px] max-md:w-[140px] max-md:placeholder:text-xs'
                />
              </div>
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
              {"Add Certificate"}
            </Button>
          </div>
          <label className="modal-backdrop" onClick={toggleModal}>Close</label>
        </div>
      )}
    </div>
  );
};

export default ResumeEducationModel;
