import React from 'react';
import { ICONS, IMAGES } from '@/assets';
import Chip from '@/components/Chip';
import Image from 'next/image';

const WorkExp = () => {
    const points = [
        'Lorem ipsum dolor sit amet consectetur.',
        'Egestas porttitor dignissim dolor lectus molestie pharetra.',
        'Scelerisque tincidunt iaculis ut sagittis eros.',
        'Eleifend turpis pellentesque molestie condimentum magna felis.',
    ];

    return (
        <div className="pt-2 pb-10 bg-secondary-50 font-plus-jakarta-sans">
            <div className="max-width flex">
                <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                    <div className="flex justify-between px-2 py-3 rounded-xl">
                        <div className="flex gap-4 items-center">
                            <span className="text-4xl text-secondary-700 font-600 max-md:text-lg">Work Experience</span>
                        </div>
                        <Chip variant="add" className="w-[140px] items-center">
                            <span>Add New</span>
                        </Chip>
                    </div>
                    <hr className='pb-10 mx-4' />
                    <div className="flex justify-between max-md:flex-col items-start border-2 border-neutral-100 p-6 rounded-xl">
                        <div className="flex gap-4 items-center">
                            <div className="font-plus-jakarta-sans">
                                <div className="flex gap-2">
                                    <div className='flex flex-col items-start'>
                                        <span className="text-neutral-950 text-xl font-600 max-md:text-sm">UX Designer @Google, Chennai</span>
                                        <span className='text-sm text-neutral-500 max-md:text-xs'>Apr 2022 - Present (25 months) | Part-time</span>
                                    </div>
                                </div>
                                <ul className='flex flex-col gap-1 justify-start text-start list-disc text-md max-md:text-sm px-4 py-2'>
                                    {points.map((point, index) => (
                                        <li key={index} className="text-neutral-600 ">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 ml-auto'>
                            <span className='text-xl text-primary-500 max-md:text-sm max-md:hidden'>Edit</span>
                            <Image src={ICONS.penResume} alt="pen" className='md:hidden' />
                            <Image src={ICONS.penEdit} alt="pen" className='max-md:hidden' />
                            <Image src={IMAGES.bin} alt="pen" className='md:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp;
