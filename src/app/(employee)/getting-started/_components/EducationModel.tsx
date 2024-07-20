import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

const CertificateModel = ({ formData, setFormData, showOnMount }) => {
    const [institutionName, setInstitutionName] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [validationError, setValidationError] = useState('');

    // Function to handle adding a new certificate
    const handleAddCertificate = () => {
        // Simple validation
        if (!institutionName || !degree || !fieldOfStudy || !startDate || !endDate) {
            setValidationError('Please fill out all fields.');
            return;
        }

        const newCertificate = {
            institutionName,
            degree,
            fieldOfStudy,
            startDate,
            endDate
        };

        setFormData(prevFormData => ({
            ...prevFormData,
            education: [...prevFormData.education, newCertificate]
        }));

        // Clear input fields after adding
        setInstitutionName('');
        setDegree('');
        setFieldOfStudy('');
        setStartDate('');
        setEndDate('');
        setValidationError('');

        // Close modal after adding certificate
        document.getElementById('my_modal_7').checked = false;
    };

    // Effect to show modal on mount
    useEffect(() => {
        if (showOnMount) {
            document.getElementById('my_modal_7').checked = true;
        }
    }, [showOnMount]);

    return (
        <div>
            {/* Modal Trigger Button */}
            <label htmlFor="my_modal_7" className="bg-white cursor-pointer">
                <div className='flex justify-end gap-2'>
                    <span className='text-primary-500 text-[16px] font-600'>Add More</span>
                    <Image src={IMAGES.circle} alt="circle" />
                </div>
            </label>

            {/* Modal Structure */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className="max-w-2xl  max-md:w-[350px] modal-box">
                    <div className="flex max-md:flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="institutionName">Institution Name</label>
                            <Input
                                id="institutionName"
                                placeholder="eg., Meenakshi college of engineering"
                                value={institutionName}
                                onChange={(e) => setInstitutionName(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="degree">Degree</label>
                            <Input
                                id="degree"
                                placeholder="Degree"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fieldOfStudy">Field of Study</label>
                            <Input
                                id="fieldOfStudy"
                                placeholder="Field of Study"
                                value={fieldOfStudy}
                                onChange={(e) => setFieldOfStudy(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="startDate">Start Date</label>
                            <Input
                                id="startDate"
                                placeholder="Start Date"
                                type='date'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="endDate">End Date</label>
                            <Input
                                id="endDate"
                                placeholder="End Date"
                                type='date'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className='w-[310px]'
                            />
                        </div>
                    </div>
                    {validationError && <p className="text-red-500">{validationError}</p>}
                    <Button
                        variant="primary"
                        type='button'
                        className='mt-4'
                        onClick={handleAddCertificate}
                    >
                        Add 
                    </Button>
                </div>
                {/* Modal Close Button */}
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default CertificateModel;
