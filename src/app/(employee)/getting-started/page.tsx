"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import GetStartedLayout from "./_components/getStartedLayout";
import Image from 'next/image';
import { IMAGES } from '@/assets';
import CertificateModel from './_components/CertificateModel';
import EducationModel from './_components/EducationModel';
import ProjectDetails from './_components/ProjectDetails';
import WorkExp from './_components/WorkExp';
import Link from 'next/link';

const GettingStarted = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContinue = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async operation, e.g., API call or timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Move to the next step
    setStep(step + 1);
    setLoading(false);
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <GetStartedLayout progress={step * 11.3} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          {step === 1 && (
            <div>
              <div className="flex py-6 font-plus-jakarta-sans text-3xl pr-4 font-700">
                <span>Let's get started</span>
              </div>
              <form onSubmit={handleContinue}>
                <div className="flex gap-10">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName">First name</label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Last name</label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="dob">Date of Birth</label>
                  <Input
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="placeholder:uppercase"
                  />
                </div>
                <div className="flex flex-col mb-4 mt-4 gap-2">
                  <label>Gender</label>
                  <div className="flex gap-4">
                    <button
                      className="border border-secondary-100 text-secondary-300 px-2 py-1 text-sm rounded-lg"
                      onClick={() => setGender('male')}
                    >
                      Male
                    </button>
                    <button
                      className="border border-secondary-100 text-secondary-300 px-2 py-1 text-sm rounded-lg"
                      onClick={() => setGender('female')}
                    >
                      Female
                    </button>
                  </div>
                </div>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Loading...' : 'Continue'}
                </Button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="flex  py-6 font-plus-jakarta-sans text-3xl pr-4 font-700">
                <span>Where do you live currently?</span>
              </div>
              <form onSubmit={handleContinue}>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="addressLine1">Address Line 1</label>
                  <Input
                    id="addressLine1"
                    type="text"
                    placeholder="Enter address line 1"
                  />
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <Input
                    id="addressLine2"
                    type="text"
                    placeholder="Enter address line 2"
                  />
                </div>
                <div className="flex gap-10 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="city">Select City</label>
                    <Input
                      id="city"
                      placeholder="Enter city"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pinCode">Pin Code</label>
                    <Input
                      id="pinCode"
                      placeholder="Enter Pin Code"
                    />
                  </div>
                </div>
                <Button variant="primary" type="submit" className='mt-4' disabled={loading}>
                  {loading ? 'Loading...' : 'Continue'}
                </Button>
              </form>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="flex  font-plus-jakarta-sans  py-6  font-900 text-3xl pr-4">
                <span>Education</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-center gap-10 p-3 rounded-xl'>
                  <div className=' flex flex-col '>
                    <span className=' text-xl text-neutral-900 font-bold'>Meenakshi College of Engineering</span>
                    <div className='flex flex-col text-[16px] text-neutral-500'>
                      <span>B.E., Computer Science Engineering | 9.2 CGPA</span>
                      <span>2021-2025</span>
                    </div>
                  </div>
                  <Image src={IMAGES.pen} alt='pen' />
                  <Image src={IMAGES.bin} alt='bin' />
                </div>
              </div>
              <EducationModel />
              <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                {loading ? 'Loading...' : 'contiune'}
              </Button>
            </div>
          )}
          {step === 4 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl pr-4">
                <span>Project Details</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-start gap-6 p-4 rounded-xl '>
                  <div className=' flex flex-col gap-2 '>
                    <span className=' text-2xl text-neutral-900 font-700'>Project name</span>
                    <span className=' text-[14px] w-[400px]'>Lorem ipsum dolor sit amet consectetur. Vulputate dui ut aliquam cras etiam. Sed ut ultrices pharetra erat in non.</span>
                  </div>
                  <Image src={IMAGES.pen} className='mt-1' alt='pen' />
                  <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                </div>
              </div>
              <ProjectDetails />
              <div className='flex gap-8 items-center text-xl'>
                <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                  {loading ? 'Loading...' : 'contiune'}
                </Button>
                <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
              </div>
            </div>
          )}
          {step === 5 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl pr-4">
                <span>Work Experience</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-start gap-6 p-4 rounded-xl '>
                  <div className=' flex flex-col gap-2 '>
                    <span className=' text-2xl text-neutral-900 font-700'>UX Designer @Google, Chennai</span>
                    <span className=' text-[14px] w-[400px]'>Apr 2022 - Present (25 months) | Part-time</span>
                    <span className='w-[400px]'>Lorem ipsum dolor sit amet consectetur. Egestas porttitor dignissim dolor </span>
                  </div>
                  <Image src={IMAGES.pen} className='mt-1' alt='bin' />
                  <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                </div>
              </div>
              <WorkExp />
              <div className='flex gap-8 items-center text-xl'>
                <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                  {loading ? 'Loading...' : 'contiune'}
                </Button>
                <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
              </div>
            </div>
          )}
          {step === 6 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl pr-4">
                <span>Certifications</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-start gap-10 p-4 rounded-xl '>
                  <div className=' flex gap-1 pr-10'>
                    <span className=' text-lg text-neutral-900 font-700'>Certificate From google </span>
                    <span className=' text-lg text-neutral-500'> | Apr 2022</span>
                  </div>
                  <Image src={IMAGES.pen} className='mt-1' alt='bin'/>
                  <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                </div>
              </div>
              {/* <div className=' flex justify-end gap-2 cursor-pointer' htmlFor="my_modal_7">
                <span className=' text-primary-500 text-[16px] font-600'>Add More</span>
                <Image src={IMAGES.circle} />
              </div> */}
              <CertificateModel />
              <div className='flex gap-8 items-center text-xl'>
                <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                  {loading ? 'Loading...' : 'contiune'}
                </Button>
                <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
              </div>
            </div>
          )}
          {step === 7 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl pr-4">
                <span>Skills</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex  items-start gap-10 p-4 rounded-xl '>
                  <div className='flex flex-col gap-3'>
                    <label htmlFor="" className=' text-xl font-700'>Enter your skills</label>
                    <Input className='w-[500px]' placeholder='eg., Design, Adobe, Figma, etc.,' />
                    <span>Enter comma separated values*</span>
                  </div>
                </div>
              </div>
              <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                {loading ? 'Loading...' : 'contiune'}
              </Button>
            </div>
          )}
          {step === 8 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl pr-4">
                <span>Upload your resume</span>
              </div>
              {/* Add education form fields here */}
              <div className=' py-4'>
                <div className="relative border-2 border-dashed border-gray-400 rounded-lg p-8 bg-white shadow-md w-[600px] h-[200px]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Image src={IMAGES.papperclip} alt='bin' />
                    <span className="text-lg text-gray-400">Drag & Drop your file here</span>
                    <input
                      id="file-upload"
                      type='file'
                      className='hidden'
                      accept=".pdf,.doc,.docx,.txt" // Specify accepted file types if needed
                    />
                  </div>
                </div>
              </div>
              <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                {loading ? 'Loading...' : 'contiune'}
              </Button>
            </div>
          )}
          {step === 9 && (
            <div className=''>
              <div className="flex  justify-center jus font-plus-jakarta-sans py-6  font-900 text-3xl pr-4">
                <span>Your Profile is created successfully</span>
              </div>
              {/* Add education form fields here */}
              <div className='flex justify-center'>
                <Image src={IMAGES.sucess} alt='bin' />
              </div>
              <div className='flex justify-center'>
                <Button variant="primary" type="submit" className='mt-4' disabled={loading} onClick={handleContinue}>
                  <Link href="/">                  {loading ? 'Loading...' : 'Back to home'}
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </GetStartedLayout>
  );
};

export default GettingStarted;
