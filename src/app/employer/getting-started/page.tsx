// @ts-nocheck
"use client"
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Button from "@/components/Button";
import Input from "@/components/Input";
import GetStartedLayout from '../../(employee)/getting-started/_components/getStartedLayout';
import { toast } from 'sonner';

const Page = () => {
  const { handleSubmit, control } = useForm();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleContinue = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.put('https://carrerhub-backend.vercel.app/api/v1/employeer/details', data, {
        withCredentials: true,
      });
      toast.success('Your details have been submitted successfully!');
      setStep(step + 1); // Move to next step after successful submission
    } catch (error) {
      setError(error.message);
      toast.error('Failed to submit your details. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <GetStartedLayout progress={step * 25} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <>
                <div className="flex pt-6 font-plus-jakarta-sans text-3xl max-lg:text-2xl max-md:text-xl pr-4 font-700">
                  <span>Enter Your Address</span>
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.street">Street</label>
                    <Controller
                      name="address[0].street"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Street"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.city">City</label>
                    <Controller
                      name="address[0].city"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="City"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.state">State</label>
                    <Controller
                      name="address[0].state"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="State"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address.postalCode">Postal Code</label>
                    <Controller
                      name="address[0].postalCode"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Postal Code"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="address.country">Country</label>
                  <Controller
                    name="address[0].country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Country"
                        className='max-md:placeholder:text-xs'
                      />
                    )}
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
                    <Controller
                      name="companyDetails[0].companyName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="eg., Google"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyDetails.industryType">Industry Type</label>
                    <div className='px-2 border text-neutral-400 rounded-lg w-[200px] max-md:w-full'>
                      <Controller
                        name="companyDetails[0].industryType"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <select
                            {...field}
                            className="py-4 px-2 border-none text-sm w-full border-neutral-300 max-md:text-xs"
                          >
                            <option value="">Select Here</option>
                            <option value="industry1">Industry 1</option>
                            <option value="industry2">Industry 2</option>
                            <option value="industry3">Industry 3</option>
                          </select>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="companyDetails.bio">Company Bio</label>
                  <Controller
                    name="companyDetails[0].bio"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <textarea
                        {...field}
                        placeholder="Bio Here"
                        className='border border-neutral-300 p-4 h-[80px] rounded-xl'
                      />
                    )}
                  />
                </div>
                <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="companyDetails.websiteLink">Website Link</label>
                    <Controller
                      name="companyDetails[0].websiteLink"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="eg., google.com"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="companyDetails.companyLocation">Location</label>
                    <Controller
                      name="companyDetails[0].companyLocation"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Location"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
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
                    <Controller
                      name="companyDetails[0].contactEmail"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Email"
                          className='max-md:placeholder:text-xs'
                          type='email'
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyDetails.contactPhone">Contact Phone</label>
                    <Controller
                      name="companyDetails[0].contactPhone"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Phone"
                          className='max-md:placeholder:text-xs'
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="companyDetails.socialLink.linkedin">LinkedIn</label>
                  <Controller
                    name="companyDetails[0].socialLink.linkedin"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="LinkedIn Link"
                        className='border border-neutral-300 rounded-xl'
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="companyDetails.socialLink.github">GitHub</label>
                  <Controller
                    name="companyDetails[0].socialLink.github"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="GitHub Link"
                        className='border border-neutral-300 rounded-xl'
                      />
                    )}
                  />
                </div>
              </>
            )}
            <div className="flex justify-center mt-8">
              {step === 3 ? (
                <Button type="submit" loading={loading} disabled={loading}>
                  Submit
                </Button>
              ) : (
                <Button type="button" onClick={handleContinue} disabled={loading}>
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
