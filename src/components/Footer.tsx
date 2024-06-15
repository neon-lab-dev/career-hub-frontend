import React from 'react'

const Footer = () => {
    return (
        <div className='bg-secondary-900 p-16'>
            <div className='flex justify-center gap-[250px] items-center'>
                <div className='w-[400px] flex flex-col gap-4 text-white'>
                    <span className='font-bold text-5xl'>Logo</span>
                    <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur. Accumsan sed dolor scelerisque massa amet convallis bibendum. Feugiat egestas euismod feugiat scelerisque aliquet. At porttitor viverra sapien.</p>
                </div>
                <div className='flex flex-col gap-1 font-poppins'>
                    <span className='text-white font-semibold text-[22px]'>Other Links</span>
                    <ul className=' text-secondary-400 text-[22px] font-semibold flex flex-col gap-2'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1 font-Poppins '>
                    <span className='text-white font-semibold text-[22px]'>Other Links</span>
                    <ul className=' text-secondary-400 text-[22px] font-semibold flex flex-col gap-2'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col mx-[110px] my-10'>
                <div className=' bg-secondary-700  h-[2px]'/>
            </div>
            <div className='flex flex-col mx-[110px] my-10'>
                <span className='text-[20px] text-white'>Lorem ipsum dolor sit amet consectetu</span>
            </div>
        </div>
    )
}
export default Footer