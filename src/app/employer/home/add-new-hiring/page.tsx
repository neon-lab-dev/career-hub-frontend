// @ts-nocheck
import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import menuDots from '@/assets/icons/menu-dots.svg';


const page = () => {
    return (
        <div className=' p-6 bg-[#f5f6fa]'>
            <div className=' bg-white p-6 rounded-xl '>
                <div className='flex justify-between'>
                    <div className=' flex gap-6 items-center'>
                        <Link href="/employer/home" ><Image src={IMAGES.arrow} />
                        </Link>
                        <h1 className=' text-neutral-950 text-[28px] font-700'>Add New Hiring</h1>
                    </div>
                </div>
                <div className='flex justify-center mt-16 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>Job Title</span></label>
                        <input type="text" placeholder='eg., UX Designer' className='p-3 border rounded-xl w-[500px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>Job Type</span></label>
                        <input type="text" placeholder='eg., UX Designer' className='p-3 border rounded-xl w-[250px]' />
                    </div>
                </div>
                <div className='flex justify-center mt-8 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>Roles and Responsibilities - Job Description</span></label>
                        <textarea type="text" placeholder='eg., UX Designer' className='p-3 border rounded-xl w-[770px]' />
                    </div>
                </div>
                <div className='flex justify-center mt-8 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>From</span></label>
                        <input type="date" placeholder='' className='p-3 border rounded-xl w-[370px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>To</span></label>
                        <input type="date" placeholder='' className='p-3 border rounded-xl w-[370px]' />
                    </div>
                </div>
                <div className='flex justify-center mt-8 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>Salary</span></label>
                        <input type="text" placeholder='' className='p-3 border rounded-xl w-[750px]' />
                    </div>
                </div>
                <div className='flex justify-center mt-8 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>Skills Required</span></label>
                        <input type="text" placeholder='eg., UI, UX, Design' className='p-3 border rounded-xl w-[370px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""><span className=' text-lg'>Extra Benefits</span></label>
                        <input type="text" placeholder='eg., Hehe' className='p-3 border rounded-xl w-[370px]' />
                    </div>
                </div>
                <div className='flex justify-center w-[600px]'>
                    <Button variant='primary' className='mt-4' >Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default page