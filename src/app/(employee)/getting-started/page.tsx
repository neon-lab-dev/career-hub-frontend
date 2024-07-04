"use client";
import React, { useState, useEffect } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import GetStartedLayout from "./_components/getStartedLayout";
import Image from 'next/image';
import { IMAGES } from '@/assets';
import EducationModel from './_components/EducationModel'; // Updated import
import ProjectDetails from './_components/ProjectDetails';
import Certifcation from '../resume/_components/Certifcation';
import WorkExp from './_components/WorkExp';
import Link from 'next/link';
import axios from 'axios';
import Certifcations from './_components/CertificateModel';

const Page = () => {
  const [Step, setStep] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const [certificates, setCertificates] = useState([]);

  // Function to fetch and set data from localStorage on component mount
  useEffect(() => {
    const storedCertificates = JSON.parse(localStorage.getItem('certificates')) || [];
    setCertificates(storedCertificates);
  }, []);

  // Handler to update form data and store in localStorage
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleDeleteCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
    localStorage.setItem('certificates', JSON.stringify(updatedCertificates));
  };

  const handleFileClick = () => {
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
      fileUpload.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Handle resume upload step
    if (Step === 7 && selectedFile) {
      try {
        const formData = new FormData();
        formData.append('resume', selectedFile);

        // Make API call to upload resume
        await axios.put('https://carrerhub-backend.vercel.app/api/v1/resumes', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }

    // Simulate async operation (e.g., API call or timeout)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Move to the next step only if not on step 7
    if (Step !== 7) {
      setStep(Step + 1);
    }

    setLoading(false);
  };

  const goToPreviousStep = () => {
    if (Step > 1) {
      setStep(Step - 1);
    }
  };
  return (
    <GetStartedLayout progress={Step * 12.5} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          <form onSubmit={handleContinue}>
            {/* Step 1: Address Details */}
            {Step === 1 && (
              <div>
                <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
                  <span>Where do you live currently?</span>
                </div>
                <div className="flex flex-col mt-4 gap-2 max">
                  <label htmlFor="street">Street</label>
                  <Input id="street" type="text" placeholder="Enter street" value={formData.street} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="city">City</label>
                  <Input id="city" type="text" placeholder="Enter city" value={formData.city} onChange={handleInputChange} />
                </div>
                <div className="flex gap-10 max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="state">State</label>
                    <Input id="state" type="text" placeholder="Enter state" value={formData.state} onChange={handleInputChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="postalCode">Postal Code</label>
                    <Input id="postalCode" type="text" placeholder="Enter postal code" value={formData.postalCode} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="country">Country</label>
                  <Input id="country" type="text" placeholder="Enter country" value={formData.country} onChange={handleInputChange} />
                </div>
                <div className="flex max-lg:justify-center justify-start max-lg:mt-32 mt-5">
                  <Button variant="primary" type="submit" disabled={Loading} className="max-md:w-[230px] max-lg:w-[400px]">
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Education Details */}
            {Step === 2 && (
              <div>
                <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
                  <span>Education</span>
                </div>
                <div className="flex flex-col justify-center py-4">
                  {/* Render existing certificates */}
                  {certificates.map((certificate, index) => (
                    <div key={index} className="flex border items-center max-md:items-end m-2 gap-10 max-md:gap-1 max-md:pb-4 p-3 rounded-xl">
                      <div className="flex flex-col">
                        <span className="text-xl text-neutral-900 font-bold max-md:text-xs">{certificate.instituteName}</span>
                        <div className="flex flex-col text-[16px] max-md:text-[12px] text-neutral-500">
                          <span>{certificate.course} | {certificate.gradePercentage}</span>
                          <span>{certificate.fromDate} - {certificate.toDate}</span>
                        </div>
                      </div>
                      {/* Delete button with image */}
                      <button
                        className="ml-auto"
                        onClick={() => handleDeleteCertificate(index)}
                      >
                        <Image src={IMAGES.bin} alt="Delete" />
                      </button>
                    </div>
                  ))}
                  {/* Button to add new certificate entry */}
                  <EducationModel />
                  {/* Continue button */}
                  <div className="flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5">
                    <Button
                      variant="primary"
                      type="button"
                      disabled={Loading}
                      className="max-md:w-[230px] max-lg:w-[400px]"
                      onClick={handleContinue}
                    >
                      {Loading ? 'Loading...' : 'Continue'}
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {Step === 3 && (
              <div>
                <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl max-md:text-xl pr-4">
                  <span>Project Details</span>
                </div>
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
            {Step === 4 && (
              <div>
                <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl max-md:text-xl pr-4">
                  <span>Work Experience</span>
                </div>
                <div className=' flex justify-center py-4'>
                  <div className='flex border items-start max-md:items-end gap-6 max-md:gap-1 p-4 rounded-xl '>
                    <div className=' flex flex-col gap-2 '>
                      <span className=' text-2xl text-neutral-900 font-700 max-md:text-lg'>Software Developer Intern</span>
                      <span className=' text-[14px] w-[400px] max-md:w-[200px]'>Lorem ipsum dolor sit amet consectetur. Vulputate dui ut aliquam cras etiam. Sed ut ultrices pharetra erat in non.</span>
                    </div>
                    <Image src={IMAGES.pen} className='mt-1' alt='pen' />
                    <Image src={IMAGES.bin} className='mt-1' alt='bin' />
                  </div>
                </div>
                <WorkExp />
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
                <Certifcation />
                <div className='flex gap-8 max-lg:flex-col max-md:gap-2 items-center text-xl max-lg:mt-32'>
                  <Button variant="primary" type="submit" className='mt-4 max-md:w-[230px] max-lg:w-[400px] ' disabled={Loading} onClick={handleContinue}>
                    {Loading ? 'Loading...' : 'contiune'}
                  </Button>
                  <button className=' text-primary-500 mt-4 text-[16px]' onClick={handleContinue}>skip</button>
                </div>
              </div>
            )}
            {Step === 6 && (
              <div>
                <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
                  <span>Skills and Social links</span>
                </div>
                <div className="flex flex-col mt-4 gap-2 max">
                  <label htmlFor="FirstName">FirstName</label>
                  <Input id="FirstName" type="text" placeholder="Enter first name" className='w-[500px] max-md:w-[250px] max-lg:w-[350px]' />
                </div>
                <span className='mx-2 mt-2'>Enter comma separated values*</span>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="LastName">Linkedin</label>
                  <Input id="LastName" type="text" placeholder="Enter last name" />
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="LastName">Github</label>
                  <Input id="LastName" type="text" placeholder="Enter last name" />
                </div>
                <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-5 mt-5 '>
                  <Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[230px] max-lg:w-[400px]'>
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </div>
            )}
            {Step === 7 && (
              <div>
                <div className="flex flex-col py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
                  <span>Resume Upload</span>
                  <span className=' text-neutral-400 text-sm font-500 py-4'>Lorem ipsum dolor sit amet consectetur. Vulputate dui ut aliquam cras etiam.</span>
                </div>
                <div className=''>
                  <input
                    type="file"
                    id="file-upload"
                    accept=".pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <button
                    className="border border-dashed border-gray-400 rounded-lg w-full h-48 flex flex-col justify-center items-center"
                    onClick={handleFileClick}
                  >
                    <span className="text-gray-400">Drag & drop your file here or click to upload</span>
                    {selectedFile && <span className="mt-2 text-blue-500">{selectedFile.name}</span>}
                  </button>
                </div>
                <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-5 mt-5 '>
                  <Button variant="primary" type="submit" onClick={handleContinue} disabled={Loading} className=' max-md:w-[230px] max-lg:w-[400px]'>
                    {Loading ? 'Uploading...' : 'Upload'}
                  </Button>
                </div>
              </div>
            )}
            {Step === 8 && (
              <div className='flex flex-col gap-5'>
                <div className=' text-xl flex justify-center'>
                  <span className=' text-xl font-800'>Yay! You’re done</span>
                </div>
                <div className="flex justify-center w-full ">
                  <Image src={IMAGES.sucess} alt='completed' />
                </div>
                <div className=' flex justify-center'>
                  <Link href='/'><Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[230px] max-lg:w-[400px]'>
                    {Loading ? 'Loading...' : 'Go to Homepage'}
                  </Button>
                  </Link>
                </div>
              </div>
            )}
          </form>

        </div>
      </div>
    </GetStartedLayout>
  );
};
export default Page;
