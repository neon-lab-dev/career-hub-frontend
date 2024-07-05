"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import GetStartedLayout from "./_components/getStartedLayout";
import Image from 'next/image';
import { IMAGES } from '@/assets';
import EducationModel from './_components/EducationModel';
import ProjectDetails from './_components/ProjectDetails';
import CertificateModel from './_components/CertificateModel';
import ExperienceModel from './_components/WorkExp';
import axios from 'axios';
import Successfully from './_components/Successfully';
import updateUserDetails from '@/api/updateUserDetails';
import EducationForm from './_components/EducationForm';
import ResumeUpload from './_components/ResumeUpload';
import SocialLinksSkills from './_components/SocialLInksAndSkills';

const Page = () => {
  const [Step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null); // State to store selected file for resume upload
  const [formData, setFormData] = useState({
    address: {
      street: "",city: "",state: "",postalCode: "",country: "",
    },
    education: [],projects: [],experience: [], // Changed workExperience to experiencecertifications: [],skills: [], // Initialize skills array
    socialLinks: [{ linkedin: '', github: '' }], // Initialize socialLinks array with one object
  });

  // Function to handle file selection for resume upload
  const goToPreviousStep = () => {
    if (Step > 1) {
      setStep(Step - 1);
    }
  };
  const handleContinue = async (e) => {
    e.preventDefault();
    if (Step === 6) {
      try {
        await updateUserDetails(formData);
      } catch (error) {
        console.error('Error updating user details:', error);
      }
    }
    if (Step === 7 && selectedFile) {
      try {
        const fileData = new FormData();
        fileData.append('resume', selectedFile);

        await axios.put('https://carrerhub-backend.vercel.app/api/v1/resumes', fileData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep(Step + 1);
  };
  // Function to add a new project to formData
  const addProject = (project) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projects: [...prevFormData.projects, project],
    }));
  };
  // Function to add new experience to formData
  const addExperience = (experience) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: [...prevFormData.experience, experience],
    }));
  };
  // Function to add new certification to formData
  const addCertification = (certification) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      certifications: [...prevFormData.certifications, certification],
    }));
  };
  console.log(formData)
  return (
    <GetStartedLayout progress={Step * 12.5} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          {Step === 1 && (
           <EducationForm formData={formData} setFormData={setFormData} handleContinue={handleContinue}/>
          )}
          {Step === 2 && (
            <div>
              <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl max-sm:text-lg pr-4 max-sm:mx-2">
                <span>Education</span>
              </div>
              <div className='flex flex-col  justify-center py-4 max-sm:m-2'>
                {formData.education.map((certificate, index) => (
                  <div key={index} className='flex border items-center m-2 max-md:items-end gap-10 max-md:gap-1 max-md:pb-4 p-3 rounded-xl'>
                    <div className='flex flex-col w-[240px]'>
                      <span className='text-xl text-neutral-900 font-bold max-md:text-xs'>{certificate.institutionName}</span>
                      <div className='flex flex-col text-[16px] max-md:text-[12px] text-neutral-500 '>
                        <span>{`${certificate.degree} | ${certificate.fieldOfStudy}`}</span>
                        <span>{`${certificate.startDate} - ${certificate.endDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.pen} alt='pen' />
                    <Image src={IMAGES.bin} alt='bin' />
                  </div>
                ))}
              </div>
              <EducationModel formData={formData} setFormData={setFormData} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5 '>
                <Button variant="primary" type="submit" className='max-md:w-[230px] max-lg:w-[400px]' onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </div>
          )}
          {Step === 3 && (
            <div>
              <div className="flex  jus font-plus-jakarta-sans py-6  font-900 text-3xl max-md:text-xl pr-4">
                <span>Project Details</span>
              </div>
              {formData.projects.map((project, index) => (
                <div key={index} className='flex justify-center py-4'>
                  <div className='flex border items-start max-md:items-end gap-6 max-md:gap-1 p-4 rounded-xl '>
                    <div className=' flex flex-col gap-2 '>
                      <span className=' text-2xl text-neutral-900 font-700 max-md:text-lg'>{project.title}</span>
                      <div className='flex flex-col text-[16px] max-md:text-[12px] text-neutral-500'>
                        <span>{project.description}</span>
                        <span>{`${project.startDate} - ${project.endDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.pen} alt='pen' />
                    <Image src={IMAGES.bin} alt='bin' />
                  </div>
                </div>
              ))}
              <ProjectDetails formData={formData} setFormData={setFormData} addProject={addProject} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button variant="primary" type="submit" className='max-md:w-[230px] max-lg:w-[400px]' onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </div>
          )}
          {Step === 4 && (
            <div>
              <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-xl pr-4 font-700">
                <span>Experience</span>
              </div>
              <div className='flex flex-col justify-center py-4'>
                {formData.experience.map((job, index) => (
                  <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                    <div className='flex flex-col w-[240px]'>
                      <span className='text-xl text-neutral-900 font-bold'>{job.companyName}</span>
                      <div className='flex flex-col text-[16px] text-neutral-500 '>
                        <span>{`${job.title} | ${job.location}`}</span>
                        <span>{`${job.startDate} - ${job.endDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.pen} alt='pen' />
                    <Image src={IMAGES.bin} alt='bin' />
                  </div>
                ))}
              </div>
              <ExperienceModel formData={formData} setFormData={setFormData} addExperience={addExperience} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button variant="primary" type="submit" className='max-md:w-[230px] max-lg:w-[400px]' onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </div>
          )}
          {Step === 5 && (
            <div>
              <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-xl pr-4 font-700">
                <span>Certification</span>
              </div>
              <div className='flex flex-col justify-center py-4'>
                {formData.certifications.map((certification, index) => (
                  <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                    <div className='flex flex-col w-[240px]'>
                      <span className='text-xl text-neutral-900 font-bold'>{certification.name}</span>
                      <div className='flex flex-col text-[16px] text-neutral-500 '>
                        <span>{`${certification.issuingOrganization} | ${certification.credentialID}`}</span>
                        <span>{`${certification.issueDate} - ${certification.expirationDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.pen} alt='pen' />
                    <Image src={IMAGES.bin} alt='bin' />
                  </div>
                ))}
              </div>
              <CertificateModel formData={formData} setFormData={setFormData} addCertification={addCertification} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button variant="primary" type="submit" className='max-md:w-[230px] max-lg:w-[400px]' onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </div>
          )}
          {Step === 6 && (
           <SocialLinksSkills formData={formData} setFormData={setFormData}  handleContinue={handleContinue} />
          )}
          {Step === 7 && (
            <ResumeUpload  handleContinue={handleContinue}/>
          )}
          {Step === 8 && <Successfully />}
        </div>
      </div>
    </GetStartedLayout>
  );
};
export default Page;
