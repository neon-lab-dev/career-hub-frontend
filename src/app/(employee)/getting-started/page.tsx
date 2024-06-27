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

const Page = () => {
  const [Step, setStep] = useState(1);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Dob, setDob] = useState('');
  const [Gender, setGender] = useState('');
  const [Loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileClick = () => {
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
      fileUpload.click();
    }
  };
  
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  

  const handleContinue = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async operation, e.g., API call or timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Move to the next step
    setStep(Step + 1);
    setLoading(false);
  };

  const goToPreviousStep = () => {
    if (Step > 1) {
      setStep(Step - 1);
    }
  };
  return (
    <GetStartedLayout progress={Step * 11.3} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          {Step === 1 && (
            <div className=' '>
              <div className="flex py-6 font-plus-jakarta-sans text-3xl max-lg:text-2xl max-sm:text-xl pr-4 font-700">
                <span>Let&apos;s get started</span>
              </div>
              <form onSubmit={handleContinue}>
                <div className="flex max-lg:flex-wrap gap-10 max-lg:gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName">First name</label>
                    <Input
                      id="firstName"
                      value={FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className=' max-md:w-[140px] max-md:placeholder:text-xs max-sm:w-[11  0px]'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Last name</label>
                    <Input
                      id="lastName"
                      value={LastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className=' max-md:w-[140px] max-md:placeholder:text-xs max-sm:w-[110px]'
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="dob">Date of Birth</label>
                  <Input
                    id="dob"
                    type="date"
                    value={Dob}
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
                <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-5 '>
                  <Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[230px] max-lg:w-[400px]'>
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>
          )}
          {Step === 2 && (
            <div>
              <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
                <span>Where do you live currently?</span>
              </div>
              <form onSubmit={handleContinue}>
                <div className="flex flex-col mt-4 gap-2 max">
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
                <div className="flex gap-10 max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="city">City, State</label>
                    <div className=' px-2 border  text-neutral-400 rounded-lg w-[200px] max-md:w-full'>
                      <select
                        id="city"
                        className=" py-4 px-2 border-none text-sm w-full border-neutral-300 max-md:text-xs  "
                      >
                        <option value="" disabled selected className=''>
                          Select Here
                        </option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                        <option value="city3">City 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pinCode">Pin Code</label>
                    <Input
                      id="pinCode"
                      placeholder="Enter Pin Code"
                      className=' max-md:w-[140px] max-md:placeholder:text-[10px] max-sm:w-[120px]'
                    />
                  </div>
                </div>
                 <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-5 '>
                  <Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[230px] max-lg:w-[400px]'>
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>
          )}
          {Step === 3 && (
            <div>
              <div className="flex  font-plus-jakarta-sans  py-6  font-900 text-3xl max-md:text-xl max-sm:text-lg pr-4 max-sm:mx-2">
                <span>Education</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4 max-sm:m-2'>
                <div className='flex border items-center max-md:items-end gap-10 max-md:gap-1 max-md:pb-4 p-3  rounded-xl'>
                  <div className=' flex flex-col '>
                    <span className=' text-xl text-neutral-900 font-bold max-md:text-xs'>Meenakshi College of Engineering</span>
                    <div className='flex flex-col text-[16px] max-md:text-[12px] text-neutral-500 '>
                      <span>B.E., Computer Science Engineering | 9.2 CGPA</span>
                      <span>2021-2025</span>
                    </div>
                  </div>
                  <Image src={IMAGES.pen} alt='pen' />
                  <Image src={IMAGES.bin} alt='bin' />
                </div>
              </div>
              <EducationModel />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5 '>
                <Button variant="primary" type="submit" disabled={Loading} className='max-md:w-[230px] max-lg:w-[400px]' onClick={handleContinue}>
                  {Loading ? 'Loading...' : 'Continue'}
                </Button>
              </div>
            </div>
          )}
          {Step === 4 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl max-md:text-xl pr-4">
                <span>Project Details</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-start max-md:items-end gap-6 max-md:gap-1 p-4 rounded-xl '>
                  <div className=' flex flex-col gap-2 '>
                    <span className=' text-2xl text-neutral-900 font-700 max-md:text-lg'>Project name</span>
                    <span className=' text-[14px] w-[400px] max-md:w-[200px]'>Lorem ipsum dolor sit amet consectetur. Vulputate dui ut aliquam cras etiam. Sed ut ultrices pharetra erat in non.</span>
                  </div>
                  <Image src={IMAGES.pen} className='mt-1' alt='pen' />
                  <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                </div>
              </div>
              <ProjectDetails />
              <div className='flex gap-8 max-lg:flex-col max-md:gap-2 items-center text-xl max-lg:mt-32'>
                <Button variant="primary" type="submit" className='mt-4 max-md:w-[230px] max-lg:w-[400px] ' disabled={Loading} onClick={handleContinue}>
                  {Loading ? 'Loading...' : 'contiune'}
                </Button>
                <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
              </div>
            </div>
          )}
          {Step === 5 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl max-md:text-xl pr-4">
                <span>Work Experience</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-start max-md:items-end max-md:gap-1 gap-6 p-4 max-md:p-1 rounded-xl '>
                  <div className=' flex flex-col gap-2  max-md:gap-1'>
                    <span className=' text-2xl max-md:text-sm text-neutral-900 font-700'>UX Designer @Google, Chennai</span>
                    <span className=' text-[14px] w-[400px] max-md:w-[200px] max-md:text-[10px]'>Apr 2022 - Present (25 months) | Part-time</span>
                    <span className='w-[400px] max-md:w-[200px] max-md:text-xs'>Lorem ipsum dolor sit amet consectetur. Egestas porttitor dignissim dolor </span>
                  </div>
                  <Image src={IMAGES.pen} className='mt-1' alt='bin' />
                  <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                </div>
              </div>
              <WorkExp />
              <div className='flex gap-8 max-lg:flex-col max-md:gap-2 items-center text-xl max-lg:mt-32'>
                <Button variant="primary" type="submit" className='mt-4 max-md:w-[230px] max-lg:w-[400px]' disabled={Loading} onClick={handleContinue}>
                  {Loading ? 'Loading...' : 'contiune'}
                </Button>
                <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
              </div>
            </div>
          )}
          {Step === 6 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl max-md:text-xl pr-4">
                <span>Certifications</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex border items-start gap-10 max-md:gap-1 p-4  rounded-xl '>
                  <div className=' flex gap-1 pr-10 max-md:pr-2 max-md:text-[10px]'>
                    <span className=' text-lg max-md:text-[12px] text-neutral-900 font-700'>Certificate From google </span>
                    <span className=' text-lg max-md:text-[12px] text-neutral-500'> | Apr 2022</span>
                  </div>
                  <Image src={IMAGES.pen} className='mt-1' alt='bin' />
                  <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                </div>
              </div>
              <CertificateModel />
              <div className='flex gap-8 max-lg:flex-col max-md:gap-2 items-center text-xl max-lg:mt-32'>
                <Button variant="primary" type="submit" className='mt-4 max-md:w-[230px] max-lg:w-[400px]' disabled={Loading} onClick={handleContinue}>
                  {Loading ? 'Loading...' : 'contiune'}
                </Button>
                <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
              </div>
            </div>
          )}
          {Step === 7 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6 max-md:text-xl  font-900 text-3xl pr-4">
                <span className=' max-md:px-3'>Skills</span>
              </div>
              {/* Add education form fields here */}
              <div className=' flex justify-center py-4'>
                <div className='flex  items-start gap-10 p-4 rounded-xl '>
                  <div className='flex flex-col gap-3'>
                    <label htmlFor="" className=' text-xl font-700'>Enter your skills</label>
                    <Input className='w-[500px] max-md:w-[250px]' placeholder='eg., Design, Adobe, Figma, etc.,' />
                    <span>Enter comma separated values*</span>
                  </div>
                </div>
              </div>
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-5 '>
                <Button variant="primary" type="submit" disabled={Loading} className='max-md:w-[230px] max-lg:w-[400px]' onClick={handleContinue}>
                  {Loading ? 'Loading...' : 'Continue'}
                </Button>
              </div>
            </div>
          )}
          {Step === 8 && (
           <div className=''>
           <div className="flex jus font-plus-jakarta-sans py-6 max-md:text-xl font-900 text-3xl pr-4">
             <span>Upload your resume</span>
           </div>
           {/* Add education form fields here */}
           <div className='py-4'>
             <div
               className="relative border-2 border-dashed border-gray-400 rounded-lg p-8 bg-white shadow-md w-[600px] max-md:w-[250px] max-lg:w-[400px] h-[200px]"
               onClick={handleFileClick}
             >
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <Image src={IMAGES.papperclip} alt='bin' />
                 {selectedFile ? (
                   <span className="text-lg text-gray-600">{selectedFile.name}</span>
                 ) : (
                   <span className="text-lg text-gray-400">Drag & Drop your file here</span>
                 )}
                 <input
                   id="file-upload"
                   type='file'
                   className='hidden'
                   accept=".pdf,.doc,.docx,.txt"
                   onChange={handleFileChange}
                 />
               </div>
             </div>
           </div>
           <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-5'>
             <Button
               variant="primary"
               type="submit"
               className='max-md:w-[230px] max-lg:w-[400px]'
               onClick={handleContinue}
             >
               {Loading ? 'Loading...' : 'Continue'}
             </Button>
           </div>
         </div>
          )}
          {Step === 9 && (
            <div className=''>
              <div className="flex  justify-center jus font-plus-jakarta-sans py-6  max-md:text-xl font-900 text-3xl max-md:text-center pr-4 max-md:pr-0">
                <span>Your Profile is created successfully</span>
              </div>
              {/* Add education form fields here */}
              <div className='flex justify-center'>
                <Image src={IMAGES.sucess} alt='bin' />
              </div>
              <div className='flex justify-center max-lg:mt-32'>
                <Button variant="primary" type="submit" className='mt-4 mb-10 max-md:w-[230px] max-lg:w-[400px]' disabled={Loading} onClick={handleContinue}>
                  <Link href="/">
                    {Loading ? 'Loading...' : 'Back to home'}
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

export default Page