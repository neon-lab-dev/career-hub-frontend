import React from 'react';
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import ResumeCertificationModel from './ResumeCertificationModel';

const Certifcation = () => {
  return (
    <div className="pt-2 pb-10 bg-secondary-50 font-plus-jakarta-sans">
            <div className="max-width flex">
                <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 max-md:mx-4 max-lg:mx-10 mx-[120px] text-center">
                    <div className="flex justify-between px-2 py-3  rounded-xl">
                        <div className="flex gap-4 items-center">
                            <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Certifications</span>
                        </div>
                        <ResumeCertificationModel/>
                    </div>
                    <hr className='pb-10 mx-4' />
                    <div className="flex justify-between items-start max-md:items-center border-2 border-neutral-100 p-6 max-md:p-3 rounded-xl">
                        <div className="flex gap-4 items-center">
                            <div className="font-plus-jakarta-sans">
                                <div className="flex gap-2">
                                    <div className='flex  items-center gap-3 max-md:gap-1'>
                                    <span className="text-neutral-950 text-xl font-600 max-md:text-xs">Certificate From google </span>
                                    <span className=' text-sm text-neutral-500 max-md:text-xs'>Apr 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl text-primary-500 max-md:text-lg">Edit</span>
                            <Image src={ICONS.penEdit} alt="pen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Certifcation