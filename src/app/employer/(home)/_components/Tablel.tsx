import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { toast } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import { IMAGES } from '@/assets';
import StatusLabel from '@/components/StatusLabel';
import Link from 'next/link';

interface Job {
    _id: string;
    title: string;
    salary: string;
    applicants: any[]; // Adjust the type as per your data structure
    employmentType: string;
    status: string;
    // Add other fields as per your job object structure
}

interface Props {
    className: string;
}

const Table: React.FC<Props> = ({ className }) => {
    const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    const handleMenuClick = (id: string) => {
        setDropdownOpenId(dropdownOpenId === id ? null : id);
    };

    const handleDelete = async (id: string) => {
        try {
            const response = await axios.delete(`https://carrerhub-backend.vercel.app/api/v1/job/${id}`, {
                withCredentials: true
            });
            if (response.data.success) {
                setJobs(jobs.filter(job => job._id !== id));
                toast.success("Job deleted successfully");
            } else {
                toast.error(`Failed to delete job: ${response.data.message}`);
            }
        } catch (error :any) {
            const errorMessage = error.response?.data?.message || error.message || "Failed to delete job";
            console.error("Error deleting job:", errorMessage);
            toast.error(`Error: ${errorMessage}`);
        }
    };

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://carrerhub-backend.vercel.app/api/v1/employeer/job', {
                    withCredentials: true // Include credentials with the request
                });
                setJobs(response.data.jobs);
                setLoading(false);
            } catch (error:any) {
                const errorMessage = error.response?.data?.message || error.message || "Failed to fetch jobs";
                console.error("Error fetching jobs:", errorMessage);
                toast.error(`Error: ${errorMessage}`);
            }
        };
        fetchJobs();
    }, []);
    
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
                        {loading ? (
                            <tr>
                                <td colSpan={6} className="py-4">
                                    <div className="flex justify-center items-center h-96">
                                        <Oval
                                            height={40}
                                            width={40}
                                            color="#F9533A"
                                            visible={true}
                                            ariaLabel='oval-loading'
                                            secondaryColor="#f4f4f4"
                                            strokeWidth={2}
                                            strokeWidthSecondary={2}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ) : jobs.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="py-4 text-center text-3xl">No data found.</td>
                            </tr>
                        ) : (
                            jobs.map((job) => (
                                <tr key={job._id}>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <Image src={IMAGES.rectangle} alt="Role Icon" />
                                            <span>{job.title}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <span>{job.salary}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <span>{job.applicants.length}  <Link href={`/employer/dashboard/${job._id}`}><span className='text-red-500 underline cursor-pointer'>View Applications</span></Link> </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <span>{job.employmentType}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-2 text-lg'>
                                            <StatusLabel key="status" variant='applied'>{job.status}</StatusLabel>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='relative flex items-center gap-2 text-lg'>
                                            <div onClick={() => handleMenuClick(job._id)} className='cursor-pointer'>
                                                <Image src={IMAGES.menudots} alt="Menu Icon" />
                                            </div>
                                            {dropdownOpenId === job._id && (
                                                <div className="absolute right-0 mt-48 w-48 p-4 rounded-xl bg-white border shadow-lg z-10">
                                                    <Link href={`/employer/dashboard/${job._id}`}>
                                                        <div className='flex items-center gap-2 text-sm p-2'>
                                                            <Image src={IMAGES.doc} alt="Role Icon" />
                                                            <span>View Applications</span>
                                                        </div>
                                                    </Link>
                                                    <Link href={`/employer/${job._id}`}>
                                                        <div className='flex items-center gap-2 text-sm p-2'>
                                                            <Image src={IMAGES.view} alt="Role Icon" />
                                                            <span>View</span>
                                                        </div>
                                                    </Link>
                                                    <div onClick={() => handleDelete(job._id)} className='flex items-center gap-2 text-sm p-2 cursor-pointer'>
                                                        <Image src={IMAGES.bin} alt="Role Icon" />
                                                        <span className='text-red-500'>Delete</span>
                                                    </div>
                                                </div>
                                            )}
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
