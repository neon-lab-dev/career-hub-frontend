import { IMAGES } from '@/assets';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import StatusLabel from "@/components/StatusLabel";
import Link from 'next/link';

const Table = ({ className, jobDetails }) => {
    // Ensure jobDetails.applicants is defined and is an array
    const applicants = jobDetails?.applicants || [];

    return (
        <div className={twMerge(`w-full overflow-x-auto h-[700px] max-w-[1300px] mx-auto px-0 ${className}`)}>
            <div className="rounded-[124px]">
                <table className="table w-full">
                    <thead className="bg-secondary-100 w-full text-secondary-800 font-plus-jakarta-sans font-500">
                        <tr>
                            <td>
                                <div className='flex items-center gap-2 text-lg'>
                                    <Image src={IMAGES.rectangle} alt="Role Icon" />
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
                        {applicants.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="py-4 text-center text-gray-500">No applicants found.</td>
                            </tr>
                        ) : (
                            applicants.map((applicant) => (
                                <tr key={applicant.id}>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <Image src={IMAGES.rectangle} alt="Role Icon" />
                                            <span>{applicant.role}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <span>{applicant.appliedOn}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <StatusLabel key={`${applicant.id}-status`} variant='applied'>{applicant.status}</StatusLabel>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='relative flex items-center gap-2 text-lg'>
                                            <Link href={`/employer/home/application/${applicant.id}`}>
                                                <div className='cursor-pointer'>
                                                    <Image src={IMAGES.view} alt="Menu Icon" className='w-6' />
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
