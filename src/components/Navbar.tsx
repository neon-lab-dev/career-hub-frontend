import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex justify-center  items-center bg-white py-8 gap-[400px]'>
            <div className='flex items-center gap-8 font-Poppins'>
                <span className='text-[24px] font-700'>Logo</span>
                <ul className='font-semibold flex gap-8 text-[16px] text-neutral-600'>
                    <li className=' hover:text-primary-500'><Link href={''}>Home</Link></li>
                    <li className=' hover:text-primary-500'>Internships</li>
                    <li className=' hover:text-primary-500'>Jobs</li>
                    <li className=' hover:text-primary-500'>Programs</li>
                    <li className=' hover:text-primary-500'>Courses</li>
                    <li className=' hover:text-primary-500'>Contact Us</li>
                </ul>
            </div>
            <div className='flex  gap-4 font-plus-jakarta-sans'>
                {/* <Button variant='secondary' children="Login" />
                <Button variant='primary' children="Signup" /> */}
                <button className='text-[16px] bg-neutral-100 rounded-lg px-6 font-400 py-2'>Login</button>
                <button className='text-[16px] bg-primary-500 text-white rounded-lg px-6 font-400 py-2'>SignUp</button>
            </div>
        </div>
    )
}

export default Navbar