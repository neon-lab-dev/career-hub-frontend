"use client";
import React, { useState } from 'react';
import Button from "@/components/Button";
import GetStartedLayout from "./_components/getStartedLayout";
import Image from 'next/image';
import { IMAGES } from '@/assets';
import EducationModel from './_components/EducationModel';
import ProjectDetails from './_components/ProjectDetails';
import CertificateModel from './_components/CertificateModel';
import ExperienceModel from './_components/WorkExp';
import EducationForm from './_components/EducationForm';
import ResumeUpload from './_components/ResumeUpload';
import SocialLinksSkills from './_components/SocialLInksAndSkills';
import Successfully from './_components/Successfully';
import { toast } from 'sonner'; 
import {  useUpdateUserDetails } from '@/api/updateUserDetails';

interface CustomFormData {
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
  const [formData, setFormData] = useState<CustomFormData>({
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

  const [showProjectModal, setShowProjectModal] = useState<any>(false);

  const { mutate: updateUserDetails } = useUpdateUserDetails();


  const goToPreviousStep = () => {
    if (Step > 1) {
      setStep(Step - 1);
    }
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Step === 6) {
      try {
        updateUserDetails(formData);
        toast.success('User details updated successfully!');
      } catch (error: any) {
        console.error('Error updating user details:', error);
        toast.error(`Error updating user details: ${error.response?.data?.message || error.message}`);
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
                <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                  <div className='flex flex-col w-[240px]'>
                    <span className='text-xl text-neutral-900 font-bold'>{project.title}</span>
                    <div className='flex flex-col text-[16px] text-neutral-500'>
                      <span>{project.description}</span>
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                  </div>
                  <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteProject(index)} className='cursor-pointer' />
                </div>
              ))}
              <ProjectDetails addProject={addProject} showOnMount={showProjectModal} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button
                  variant="primary"
                  type="button"
                  className='max-md:w-[230px] max-lg:w-[400px]'
                  onClick={handleContinue}
                  disabled={formData.projects.length === 0} // Disable if no projects
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {Step === 4 && (
            <div>
              <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl pr-4">
                <span>Work Experience</span>
              </div>
              {formData.experience.map((exp: any, index: number) => (
                <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                  <div className='flex flex-col w-[240px]'>
                    <span className='text-xl text-neutral-900 font-bold'>{exp.companyName}</span>
                    <div className='flex flex-col text-[16px] text-neutral-500'>
                      <span>{exp.role}</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteExperience(index)} className='cursor-pointer' />
                </div>
              ))}
              <ExperienceModel formData={formData} setFormData={setFormData} showOnMount={showProjectModal} />
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
              <div className="flex font-plus-jakarta-sans py-6 font-900 text-3xl max-md:text-xl pr-4">
                <span>Certifications</span>
              </div>
              {formData.certifications.map((certification: any, index: number) => (
                <div key={index} className='flex border items-center m-2 gap-10 p-3 rounded-xl'>
                  <div className='flex flex-col w-[240px]'>
                    <span className='text-xl text-neutral-900 font-bold'>{certification.name}</span>
                    <div className='flex flex-col text-[16px] text-neutral-500'>
                      <span>{certification.issuingOrganization}</span>
                      <span>{certification.issueDate} - {certification.expirationDate}</span>
                    </div>
                  </div>
                  <Image src={IMAGES.bin} alt='Delete' onClick={() => deleteCertification(index)} className='cursor-pointer' />
                </div>
              ))}
              <CertificateModel addCertification={addCertification} showOnMount={showProjectModal} />
              <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mb-10 mt-5'>
                <Button
                  variant="primary"
                  type="button"
                  className='max-md:w-[230px] max-lg:w-[400px]'
                  onClick={handleContinue}
                  disabled={formData.certifications.length === 0} // Disable if no certifications data
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {Step === 6 && (
            <div>
              <SocialLinksSkills formData={formData} setFormData={setFormData} handleContinue={handleContinue} />
            </div>
          )}
          {Step === 7 && (
            <div>
              <ResumeUpload setSelectedFile={setSelectedFile} handleResumeUploadSuccess={handleResumeUploadSuccess} />
            </div>
          )}
          {Step === 8 && (
            <Successfully />
          )}
        </div>
      </div>
    </GetStartedLayout>
  );
};
export default Page;
