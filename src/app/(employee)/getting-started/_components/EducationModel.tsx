import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

const EducationModel = () => {
    const [certificates, setCertificates] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        instituteName: '',
        cityState: '',
        course: '',
        gradePercentage: '',
        fromDate: '',
        toDate: ''
    });

    
    // Function to fetch and set data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('certificates');
        if (storedData) {
          try {
            const parsedData = JSON.parse(storedData);
            setCertificates(parsedData);
          } catch (error) {
            console.error('Error parsing stored certificates:', error);
            // Handle error gracefully, e.g., clear invalid localStorage data
            localStorage.removeItem('certificates');
          }
        }
      }, []);
      

    // Handler to update form data and store in localStorage
    const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleAddCertificate = () => {
        const newCertificate = {
            ...formData
        };

        // Get existing certificates from localStorage or initialize an empty array
        const storedCertificates = JSON.parse(localStorage.getItem('certificates')) || [];

        // Update certificates array in localStorage
        const updatedCertificates = [...storedCertificates, newCertificate];
        localStorage.setItem('certificates', JSON.stringify(updatedCertificates));

        // Clear form data after adding
        setFormData({
            instituteName: '',
            cityState: '',
            course: '',
            gradePercentage: '',
            fromDate: '',
            toDate: ''
        });
    };

    return (
        <div>
            {/* The button to open modal */}
            <div className='flex justify-end'>
                <label htmlFor="my_modal_7" className="bg-white">
                    <div className='flex justify-end gap-2 cursor-pointer max-md:mx-4'>
                        <span className='text-primary-500 text-[16px] font-600'>Add More</span>
                        <Image src={IMAGES.circle} alt="circle" />
                    </div>
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="max-w-2xl max-md:w-[350px] modal-box">
                    <div className="flex max-md:flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="instituteName">Institute Name</label>
                            <Input
                                id="instituteName"
                                placeholder="eg., Meenakshi College of Engineering"
                                className='w-[310px]'
                                onChange={handleInputChange}
                                value={formData.instituteName}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cityState">City, State</label>
                            <Input
                                id="cityState"
                                placeholder="City, State"
                                className='w-[310px]'
                                onChange={handleInputChange}
                                value={formData.cityState}
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="course">Course</label>
                            <Input
                                id="course"
                                placeholder="Course"
                                className='w-[250px]'
                                onChange={handleInputChange}
                                value={formData.course}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="gradePercentage">Grade / Percentage</label>
                            <Input
                                id="gradePercentage"
                                placeholder="eg., 9/10"
                                className='w-[250px]'
                                onChange={handleInputChange}
                                value={formData.gradePercentage}
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fromDate">From</label>
                            <Input
                                id="fromDate"
                                placeholder=""
                                type='month'
                                className='w-[250px]'
                                onChange={handleInputChange}
                                value={formData.fromDate}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="toDate">To</label>
                            <Input
                                id="toDate"
                                placeholder=""
                                type='month'
                                className='w-[250px]'
                                onChange={handleInputChange}
                                value={formData.toDate}
                            />
                        </div>
                    </div>
                    <Button variant="primary" className='mt-4' onClick={handleAddCertificate}>
                        {"Add Certificate"}
                    </Button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default EducationModel;
