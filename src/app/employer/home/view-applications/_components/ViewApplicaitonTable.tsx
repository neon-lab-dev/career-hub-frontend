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
                                    <span>Applied on</span>
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
                                    <span>12 Dec 2024 - 11AM</span>
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
                                        <Image src={IMAGES.view} alt="Menu Icon" className='w-6' />
                                    </div>
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
