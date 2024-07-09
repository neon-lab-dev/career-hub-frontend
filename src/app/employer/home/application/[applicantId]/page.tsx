import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import addCircle from "@/assets/icons/Add Circle.svg";


const Profile = () => {
    const points = [
        'Lorem ipsum dolor sit amet consectetur.',
        'Egestas porttitor dignissim dolor lectus molestie pharetra.',
        'Scelerisque tincidunt iaculis ut sagittis eros.',
        'Eleifend turpis pellentesque molestie condimentum magna felis.',
    ];
    return (
        <div className="pt-10 pb-2 bg-secondary-50">
            <div className=' bg-white p-10 m-10'>
                <div className='flex justify-between my-10 ml-10 items-center'>
                    <div className='flex gap-6 items-center'>
                        <Link href="/employer/home/view"><Image src={IMAGES.arrow} alt={''} /></Link>
                        <h1 className='text-neutral-950 text-[28px] font-700'>Add New Hiring</h1>
                    </div>
                    <div className=' flex  gap-4'>
                        <Link href="/employer/home/add-new-hiring">
                            <Button
                                className="flex items-center gap-[6px] max-w-[150px] justify-center bg-green-500"
                                variant="normal"
                            >
                                {/* <Image src={addCircle} alt="addCircle" /> */}
                                Approve

                            </Button>
                        </Link>
                        <Link href="/employer/home/add-new-hiring">
                            <Button
                                className="flex items-center gap-[6px] max-w-[200px] justify-center"
                                variant="normal"
                            >
                                <Image src={addCircle} alt="addCircle" className=' rotate-45' />
                                Reject

                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="max-width flex">
                    <div className="flex max-lg:flex-col w-full bg-secondary-200 border border-neutral-100 p-6 max-lg:px-2 max-md:py-4 justify-between rounded-2xl items-center gap-5 mx-16 max-md:mx-4  text-center">
                        <div className='flex gap-4 items-center'>
                            <div>
                                <div className=' bg-neutral-100 border-[3px] border-white rounded-full w-[60px] h-[60px]'></div>
                            </div>
                            <div className=' font-plus-jakarta-sans'>
                                <div className='flex gap-2'>
                                    <span className=' text-neutral-950 text-2xl max-md:text-lg font-600'>Salmaan Ahmed</span>
                                    <Image src={ICONS.penResume} alt='pen' />
                                </div>
                                <span className=' text-neutral-600 text-lg max-md:text-xs'>Meenakshi college of engineering</span>
                            </div>
                        </div>
                        <Button variant='normal'>
                            <div className='flex gap-2 p-2'>
                                <span className=' text-xl'>Download Resume</span>
                                <Image src={IMAGES.download} alt='pen' />
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="pt-2 pb-10  mt-10 font-plus-jakarta-sans">
                    <div className="max-width flex">
                        <div className=" w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4  text-center">
                            <div className='flex justify-between  px-2 py-3  rounded-xl'>
                                <div className='flex gap-4 max-md:gap-1 items-center '>
                                    <span className=' text-4xl text-secondary-700 font-600 max-md:text-lg '>Education Details</span>
                                </div>
                            </div>
                            <hr className=' pb-10  mx-2' />
                            <div className='flex max-md:flex-col justify-between border-2 border-neutral-100 p-6 rounded-xl '>
                                <div className='flex gap-4 items-center '>
                                    <div className='flex-col flex justify-start items-start font-plus-jakarta-sans mb-6'>
                                        <div className='flex gap-2'>
                                            <span className=' text-neutral-950 text-xl max-md:text-sm font-600'>Meenakshi College of Engineering</span>
                                            <Image src={ICONS.penResume} alt='pen' className=' max-md:hidden' />
                                        </div>
                                        <span className=' text-neutral-600 text-lg max-md:text-xs'>B.E., Computer Science Engineering | 9.2 CGPA</span>
                                        <span className='text-neutral-600 text-lg max-md:text-xs'>2021-2025</span>
                                    </div>
                                </div>
                                {/* <div className='flex items-center gap-2 max-md:justify-end '>
                                    <span className=' text-xl text-primary-500 max-md:text-sm max-md:hidden'>Edit</span>
                                    <Image src={ICONS.penResume} alt="pen" className='md:hidden' />
                                    <Image src={ICONS.penEdit} alt="pen" className=' max-md:hidden' />
                                    <Image src={IMAGES.bin} alt="pen" className=' md:hidden' />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-10  font-plus-jakarta-sans">
            <div className="max-width flex">
                <div className="w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4 text-center">
                    <div className="flex justify-between px-2 py-3 rounded-xl">
                        <div className="flex gap-4 items-center">
                            <span className="text-4xl text-secondary-700 font-600 max-md:text-base">Project Details</span>
                        </div>
                    </div>
                    <hr className='pb-10 mx-4' />
                    <div className="flex max-md:flex-col max-md:justify-end justify-between items-start border-2 border-neutral-100 p-6 rounded-xl">
                        <div className="flex gap-4 items-center">
                            <div className="font-plus-jakarta-sans">
                                <div className="flex gap-2">
                                    <span className="text-neutral-950 text-xl font-600">Project name</span>
                                </div>
                                <ul className='flex flex-col gap-1 justify-start text-start list-disc text-sm px-1 py-1'>
                                    {points.map((point, index) => (
                                        <li key={index} className="text-neutral-600 ">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* <div className='flex items-center gap-2 ml-auto'>
                            <span className='text-xl text-primary-500 max-md:text-sm max-md:hidden'>Edit</span>
                            <Image src={ICONS.penResume} alt="pen" className='md:hidden' />
                            <Image src={ICONS.penEdit} alt="pen" className='max-md:hidden' />
                            <Image src={IMAGES.bin} alt="pen" className='md:hidden' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}
export default Profile