// @ts-nocheck
"use client"
import { ICONS, IMAGES } from '@/assets';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import StatusLabel from "@/components/StatusLabel";
import Link from 'next/link';

const Table = ({ className }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMenuClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={twMerge(`w-full overflow-x-auto h-[700px] max-w-[1300px] mx-auto px-0 ${className}`)}>
            <div className="rounded-[124px]">
                <table className="table w-full">
                    <thead className="bg-secondary-100 w-full text-secondary-800 font-plus-jakarta-sans font-500">
                        <tr>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <Image src={ICONS.rectangle} alt="Role Icon" />
                                    <span>Role</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>Stipend Offered</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>Total Applications</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>Job Type</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>Status</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>Action</span>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="bg-white w-full">
                        <tr>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <Image src={ICONS.rectangle} alt="Role Icon" />
                                    <span>Product Designer</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>15000</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>100 <span className='text-red-500 underline cursor-pointer'>View Applications</span></span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <span>Full-Time</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <StatusLabel key="status" variant='applied'>Under Review</StatusLabel>
                                </div>
                            </td>
                            <td>
                                <div className='relative flex items-center gap-2 text-lg'>
                                    <div onClick={handleMenuClick} className='cursor-pointer'>
                                        <Image src={IMAGES.menudots} alt="Menu Icon" />
                                    </div>
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-48 w-48 p-4 rounded-xl bg-white border  shadow-lg z-10">
                                            <Link href="/employer/home/view-applcations" >
                                                <div className='flex items-center gap-2 text-sm p-2'>
                                                    <Image src={ICONS.doc} alt="Role Icon" />
                                                    <span>View Applications</span>
                                                </div>
                                            </Link>
                                            <Link href="/employer/home/view-applcations" >
                                                <div className='flex items-center gap-2 text-sm p-2'>
                                                    <Image src={IMAGES.view} alt="Role Icon" />
                                                    <span>View</span>
                                                </div>
                                            </Link>
                                            <div className='flex items-center gap-2 text-sm p-2'>
                                                <Image src={IMAGES.bin} alt="Role Icon" />
                                                <span className=' text-red-500'>delete</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Table;
