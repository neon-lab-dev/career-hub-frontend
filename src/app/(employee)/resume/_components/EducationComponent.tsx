import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Button'
import Chip from '@/components/Chip'
import Image from 'next/image'
import React from 'react'

const EducationComponent = () => {
    return (
        <div className="pt-2 pb-10 bg-secondary-50 font-plus-jakarta-sans">
            <div className="max-width flex">
                <div className=" w-full bg-white border border-neutral-100 p-6 max-md:p-2 rounded-2xl items-center gap-5 mx-16 max-md:mx-4  text-center">
                    <div className='flex justify-between  px-2 py-3  rounded-xl'>
                        <div className='flex gap-4 max-md:gap-1 items-center '>
                            <span className=' text-4xl text-secondary-700 font-600 max-md:text-lg '>Education Details</span>
                        </div>
                        <Chip  variant='add' className='w-[140px] max-md:text-md items-center'><span>Add New</span></Chip>
                    </div>
                    <hr className=' pb-10  mx-2'/>
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
                        <div className='flex items-center gap-2 max-md:justify-end '>
                            <span className=' text-xl text-primary-500 max-md:text-sm max-md:hidden'>Edit</span>
                            <Image src={ICONS.penResume} alt="pen" className='md:hidden' />
                            <Image src={ICONS.penEdit} alt="pen" className=' max-md:hidden' />
                            <Image src={IMAGES.bin} alt="pen" className=' md:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EducationComponent