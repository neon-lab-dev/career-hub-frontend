"use client"
import React, { useState } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import GetStartedLayout from '../../(employee)/getting-started/_components/getStartedLayout'
import Image from 'next/image';
import { IMAGES } from '@/assets';
import Link from 'next/link';


const Page = () => {
  const [Step, setStep] = useState(1);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Dob, setDob] = useState('');
  const [Gender, setGender] = useState('');
  const [Loading, setLoading] = useState(false);

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
    <GetStartedLayout progress={Step * 25} goToPreviousStep={goToPreviousStep}>
      <div className="flex justify-center w-full">
        <div className="flex justify-center gap-4">
          {Step === 1 && (
            <div className=' max-md:p-2'>
              <div className="flex pt-6 font-plus-jakarta-sans text-3xl max-lg:text-2xl max-md:text-xl pr-4 font-700">
                <span>What is Your Name?</span>
              </div>
              <form onSubmit={handleContinue}>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="Full Name">Full Name</label>
                  <Input
                    id="Full Name"
                    type="text"
                    value={Dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="placeholder:uppercase w-[450px] max-md:w-[250px]"
                    placeholder='John'
                  />
                </div>
                <div className='flex max-md:justify-center justify-start max-md:mt-32 mb-5 mt-5 '>
                  <Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[250px]'>
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>
          )}
          {Step === 2 && (
            <div>
              <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-xl pr-4 font-700">
                <span>Company Information</span>
              </div>
              <form onSubmit={handleContinue}>
              <div className="flex gap-10 max-md:flex-col max-md:gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Company Name">Company Name</label>
                    <Input
                      id="Company Name"
                      placeholder="eg., Google"
                      className='  max-md:placeholder:text-xs'

                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pinCode">Pin Code</label>
                    <Input
                      id="pinCode"
                      placeholder="Enter Pin Code"
                      className='  max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="addressLine2">Company Bio</label>
                  <textarea
                    id="addressLine2"
                    placeholder="Bio Here"
                    className=' border border-neutral-300 p-4 h-[80px] rounded-xl'
                  />
                </div>
                <div className="flex max-md:flex-col max-md:gap-4 gap-10 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="city">City, State</label>
                    <Input
                      id="city"
                      placeholder="Enter city"
                      className='  max-md:placeholder:text-xs'

                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Website Link">Website Link</label>
                    <Input
                      id="Website Link"
                      placeholder="eg., google.com"
                      className='  max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
                <div className='flex max-md:justify-center justify-start max-md:mt-32 mb-10 mt-5 '>
                  <Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[230px]'>
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>
          )}
          {Step === 3 && (
            <div>
              <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-lg max-md:pr-0 pr-4 font-700">
                <span>Company Contact Information</span>
              </div>
              <form onSubmit={handleContinue}>
              <div className="flex gap-10  max-md:flex-col max-md:gap-5 mt-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email id">Company Email</label>
                    <Input
                      id="email id"
                      placeholder="email id"
                      className='  max-md:placeholder:text-xs'
                      type='email'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Company Phone Number">Company Phone Number</label>
                    <Input
                      id="Company Phone Number"
                      placeholder="phone number"
                      className='  max-md:placeholder:text-xs'
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <label htmlFor="Linked In">Linked In</label>
                  <Input
                    id="Linked In"
                    type="text"
                    placeholder="GitHub Link"
                    className=' border border-neutral-300  rounded-xl'
                  />
                </div>
                <div className='flex max-md:justify-center justify-start max-md:mt-32 mb-10 mt-5 '>
                  <Button variant="primary" type="submit" disabled={Loading} className=' max-md:w-[250px]'>
                    {Loading ? 'Loading...' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>
          )}
          {Step === 4 && (
            <div className=''>
              <div className="flex  justify-center jus font-plus-jakarta-sans py-6  max-md:text-xl font-900 text-3xl max-md:text-center pr-4 max-md:pr-0">
                <span>Your Profile is created successfully</span>
              </div>
              {/* Add education form fields here */}
              <div className='flex justify-center'>
                <Image src={IMAGES.sucess} alt='bin' />
              </div>
              <div className='flex justify-center max-md:mt-32'>
                <Button variant="primary" type="submit" className='mt-4 max-md:w-[250px] max-md:mb-4' disabled={Loading} onClick={handleContinue}>
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