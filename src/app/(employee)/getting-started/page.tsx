"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import GetStartedLayout from "./_components/getStartedLayout";
import Image from 'next/image';
import { IMAGES } from '@/assets';
import EducationModel from './_components/EducationModel';
import ProjectDetails from './_components/ProjectDetails';
import CertificateModel from './_components/CertificateModel';
import ExperienceModel from './_components/WorkExp';
import axios from 'axios';
import updateUserDetails from '@/api/updateUserDetails';
import EducationForm from './_components/EducationForm';
import ResumeUpload from './_components/ResumeUpload';
import SocialLinksSkills from './_components/SocialLInksAndSkills';
import Successfully from './_components/Successfully';
import { toast } from 'sonner'; 


// Define FormData interface
interface FormData {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  education: any[];
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

const Page: React.FC = () => {
  const [Step, setStep] = useState<number>(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    address: [{
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    }],
    education: [],
    projects: [],
    experience: [],
    certifications: [],
    skills: [],
    socialLinks: [{ linkedin: '', github: '' }],
    interests: [],
  });

  const [showProjectModal, setShowProjectModal] = useState<any>(false);;

  const goToPreviousStep = () => {
    if (Step > 1) {
      setStep(Step - 1);
    }
  };

  const handleContinue: (e: any) => Promise<void> = async (e: any) => {
    e.preventDefault();

    if (Step === 6) {
      try {
        await updateUserDetails(formData);
        toast.success('User details updated successfully!');
      } catch (error: any) {
        console.error('Error updating user details:', error);
        toast.error(`Error updating user details: ${error.response?.data?.message || error.message}`);
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
          withCredentials: true
        });
        toast.success('File uploaded successfully!');
      } catch (error: any) {
        console.error('Error uploading file:', error);
        toast.error(`Error uploading file: ${error.response?.data?.message || error.message}`);
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep(Step + 1);

    if (Step === 1) {
      setShowProjectModal(true);
    }
  };

  const addProject = (project: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projects: [...prevFormData.projects, project],
    }));
  };

  const addCertification = (certification: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      certifications: [...prevFormData.certifications, certification],
    }));
  };

  const deleteEducation = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: prevFormData.education.filter((_, i) => i !== index),
    }));
  };

  const deleteProject = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projects: prevFormData.projects.filter((_, i) => i !== index),
    }));
  };

  const deleteExperience = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: prevFormData.experience.filter((_, i) => i !== index),
    }));
  };

  const deleteCertification = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      certifications: prevFormData.certifications.filter((_, i) => i !== index),
    }));
  };

  const handleResumeUploadSuccess = () => {
    setStep(8); // Move to Step 8
  };

  return (
    <GetStartedLayout progress={Step * 12.5} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          {Step === 1 && (
            <EducationForm formData={formData} setFormData={setFormData} handleContinue={handleContinue} />
          )}
          {Step === 2 && (
            <div>
              <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl pr-4">
                <span>Education</span>
              </div>
              {formData.education.map((certificate: any, index: number) => (
                <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                  <div className='flex flex-col w-[240px]'>
                    <span className='text-xl text-neutral-900 font-bold'>{certificate.institutionName}</span>
                    <div className='flex flex-col text-[16px] text-neutral-500'>
                      <span>{`${certificate.degree} | ${certificate.fieldOfStudy}`}</span>
                      <span>{`${certificate.startDate} - ${certificate.endDate}`}</span>
                    </div>
                  </div>
                  <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteEducation(index)} className='cursor-pointer' />
                </div>
              ))}
              <EducationModel formData={formData} setFormData={setFormData} showOnMount={showProjectModal} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button
                  variant="primary"
                  type="button"
                  className='max-md:w-[230px] max-lg:w-[400px]'
                  onClick={handleContinue}
                  disabled={formData.education.length === 0} // Disable if no education data
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {Step === 3 && (
            <div>
              <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl pr-4">
                <span>Project Details</span>
              </div>
              {formData.projects.map((project: any, index: number) => (
                <div key={index} className='flex justify-center py-4'>
                  <div className='flex border items-start max-md:items-end gap-6 max-md:gap-1 p-4 rounded-xl'>
                    <div className=' flex flex-col gap-2'>
                      <span className=' text-2xl text-neutral-900 font-700 max-md:text-lg'>{project.title}</span>
                      <div className='flex flex-col text-[16px] max-md:text-[12px] text-neutral-500'>
                        <span>{project.description}</span>
                        <span>{`${project.startDate} - ${project.endDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteProject(index)} className='cursor-pointer' />
                  </div>
                </div>
              ))}
              <ProjectDetails addProject={addProject} showOnMount={showProjectModal} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button
                  variant="primary"
                  type="button"
                  className='max-md:w-[230px] max-lg:w-[400px]'
                  onClick={handleContinue}
                  disabled={formData.projects.length === 0} // Disable if no project data
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {Step === 4 && (
            <div>
              <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-xl pr-4 font-700">
                <span>Experience</span>
              </div>
              <div className='flex flex-col justify-center py-4'>
                {formData.experience.map((job: any, index: number) => (
                  <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                    <div className='flex flex-col w-[240px]'>
                      <span className='text-xl text-neutral-900 font-bold'>{job.companyName}</span>
                      <div className='flex flex-col text-[16px] text-neutral-500'>
                        <span>{job.position}</span>
                        <span>{`${job.startDate} - ${job.endDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteExperience(index)} className='cursor-pointer' />
                  </div>
                ))}
              </div>
              <ExperienceModel formData={formData} setFormData={setFormData} showOnMount={setShowProjectModal} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button
                  variant="primary"
                  type="button"
                  className='max-md:w-[230px] max-lg:w-[400px]'
                  onClick={handleContinue}
                  disabled={formData.experience.length === 0} // Disable if no experience data
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {Step === 5 && (
            <div>
              <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-xl pr-4 font-700">
                <span>Certifications</span>
              </div>
              <div className='flex flex-col justify-center py-4'>
                {formData.certifications.map((certification: any, index: number) => (
                  <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                    <div className='flex flex-col w-[240px]'>
                      <span className='text-xl text-neutral-900 font-bold'>{certification.name}</span>
                      <div className='flex flex-col text-[16px] text-neutral-500'>
                        <span>{certification.issuingOrganization}</span>
                        <span>{`${certification.issueDate} - ${certification.expirationDate}`}</span>
                      </div>
                    </div>
                    <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteCertification(index)} className='cursor-pointer' />
                  </div>
                ))}
              </div>
              <CertificateModel addCertification={addCertification} showOnMount={showProjectModal} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button
                  variant="primary"
                  type="button"
                  className='max-md:w-[230px] max-lg:w-[400px]'
                  onClick={handleContinue}
                  disabled={formData.certifications.length === 0} // Disable if no certification data
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {Step === 6 && (
            <SocialLinksSkills formData={formData} setFormData={setFormData} handleContinue={handleContinue} />
          )}

          {Step === 7 && (
         <ResumeUpload setSelectedFile={setSelectedFile} onUploadSuccess={handleResumeUploadSuccess} />
          )}

          {Step === 8 && <Successfully />}
        </div>
      </div>
    </GetStartedLayout>
  );
};

export default Page;
