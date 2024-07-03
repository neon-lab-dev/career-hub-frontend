"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "@/components/Button";
import Input from "@/components/Input";
import GetStartedLayout from '../../(employee)/getting-started/_components/getStartedLayout';
import Image from 'next/image';
import { IMAGES } from '@/assets';
import Link from 'next/link';

const Page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: [
      {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      },
    ],
    companyDetails: [
      {
        companyName: '',
        industryType: '',
        websiteLink: '',
        contactEmail: '',
        contactPhone: '',
        companyLocation: '',
        bio: '',
        socialLink: {
          linkedin: '',
          github: '',
        },
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployerDetails();
  }, []);

  const fetchEmployerDetails = async () => {
    try {
      const response = await axios.get('https://carrerhub-backend.vercel.app/api/v1/employeer/details');
      if (!response.data) {
        throw new Error('No data received');
      }
      setFormData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const [section, field] = id.split('.');

    if (section === 'socialLink') {
      const subField = field.split('.')[1]; // Get 'linkedin' or 'github'
      setFormData(prevFormData => ({
        ...prevFormData,
        companyDetails: [
          {
            ...prevFormData.companyDetails[0],
            socialLink: {
              ...prevFormData.companyDetails[0].socialLink,
              [subField]: value,
            }
          }
        ]
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [section]: [
          {
            ...prevFormData[section][0],
            [field]: value,
          },
        ],
      }));
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep(step + 1);
    setLoading(false);
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put('https://carrerhub-backend.vercel.app/api/v1/employeer/details', formData);
      // Handle success (optional)
      setStep(step + 1); // Move to next step after successful submission
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GetStartedLayout progress={step * 25} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          <form onSubmit={step === 3 ? onSubmit : handleContinue}>
            {step === 1 && (
              <>
                <div className="flex pt-6 font-plus-jakarta-sans text-3xl max-lg:text-2xl max-md:text-xl pr-4 font-700">
                  <span>Enter Your Address</span>
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.street">Street</label>
                    <Input
                      id="address.street"
                      value={formData.address[0].street}
                      onChange={handleChange}
                      placeholder="Street"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.city">City</label>
                    <Input
                      id="address.city"
                      value={formData.address[0].city}
                      onChange={handleChange}
                      placeholder="City"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.state">State</label>
                    <Input
                      id="address.state"
                      value={formData.address[0].state}
                      onChange={handleChange}
                      placeholder="State"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.postalCode">Postal Code</label>
                    <Input
                      id="address.postalCode"
                      value={formData.address[0].postalCode}
                      onChange={handleChange}
                      placeholder="Postal Code"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="address.country">Country</label>
                  <Input
                    id="address.country"
                    value={formData.address[0].country}
                    onChange={handleChange}
                    placeholder="Country"
                    className='max-md:placeholder:text-xs'
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-xl pr-4 font-700">
                  <span>Company Information</span>
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyDetails.companyName">Company Name</label>
                    <Input
                      id="companyDetails.companyName"
                      value={formData.companyDetails[0].companyName}
                      onChange={handleChange}
                      placeholder="eg., Google"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyDetails.industryType">Industry Type</label>
                    <div className='px-2 border text-neutral-400 rounded-lg w-[200px] max-md:w-full'>
                      <select
                        id="companyDetails.industryType"
                        value={formData.companyDetails[0].industryType}
                        onChange={handleChange}
                        className="py-4 px-2 border-none text-sm w-full border-neutral-300 max-md:text-xs"
                      >
                        <option value="">Select Here</option>
                        <option value="industry1">Industry 1</option>
                        <option value="industry2">Industry 2</option>
                        <option value="industry3">Industry 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="companyDetails.bio">Company Bio</label>
                  <textarea
                    id="companyDetails.bio"
                    value={formData.companyDetails[0].bio}
                    onChange={handleChange}
                    placeholder="Bio Here"
                    className='border border-neutral-300 p-4 h-[80px] rounded-xl'
                  />
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="companyDetails.websiteLink">Website Link</label>
                    <Input
                      id="companyDetails.websiteLink"
                      value={formData.companyDetails[0].websiteLink}
                      onChange={handleChange}
                      placeholder="eg., google.com"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="companyDetails.companyLocation">Location</label>
                    <Input
                      id="companyDetails.companyLocation"
                      value={formData.companyDetails[0].companyLocation}
                      onChange={handleChange}
                      placeholder="Location"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-lg max-md:pr-0 pr-4 font-700">
                  <span>Company Contact Information</span>
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-5 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyDetails.contactEmail">Contact Email</label>
                    <Input
                      id="companyDetails.contactEmail"
                      value={formData.companyDetails[0].contactEmail}
                      onChange={handleChange}
                      placeholder="Email"
                      className='max-md:placeholder:text-xs'
                      type='email'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyDetails.contactPhone">Contact Phone</label>
                    <Input
                      id="companyDetails.contactPhone"
                      value={formData.companyDetails[0].contactPhone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className='max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="companyDetails.socialLink.linkedin">LinkedIn</label>
                  <Input
                    id="companyDetails.socialLink.linkedin"
                    value={formData.companyDetails[0].socialLink.linkedin}
                    onChange={handleChange}
                    type="text"
                    placeholder="LinkedIn Link"
                    className='border border-neutral-300 rounded-xl'
                  />
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="companyDetails.socialLink.github">GitHub</label>
                  <Input
                    id="companyDetails.socialLink.github"
                    value={formData.companyDetails[0].socialLink.github}
                    onChange={handleChange}
                    type="text"
                    placeholder="GitHub Link"
                    className='border border-neutral-300 rounded-xl'
                  />
                </div>
              </>
            )}
            <div className="flex justify-center mt-8">
              {step === 3 ? (
                <Button type="submit" onClick={onSubmit} loading={loading} disabled={loading}>
                  Submit
                </Button>
              ) : (
                <Button type="submit" onClick={handleContinue} loading={loading} disabled={loading}>
                  Continue
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </GetStartedLayout>
  );
};

export default Page;
