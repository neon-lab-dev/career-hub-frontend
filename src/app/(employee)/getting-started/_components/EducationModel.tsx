import React, { useState } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

const CertificateModel = ({ formData, setFormData }) => {
    const [institutionName, setInstitutionName] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleAddCertificate = () => {
        // Create a new certificate object
        const newCertificate = {
            institutionName: institutionName,
            degree: degree,
            fieldOfStudy: fieldOfStudy,
            startDate: startDate,
            endDate: endDate
        };

        // Update formData state with new certificate
        setFormData({
            ...formData,
            education: [...formData.education, newCertificate]
        });

        // Clear input fields after adding
        setInstitutionName('');
        setDegree('');
        setFieldOfStudy('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <div>
            <div className='flex justify-end'>
                <label htmlFor="my_modal_7" className="bg-white">
                    <div className='flex justify-end gap-2 cursor-pointer max-md:mx-4'>
                        <span className='text-primary-500 text-[16px] font-600'>Add More</span>
                        <Image src={IMAGES.circle} alt="circle" />
                    </div>
                </label>
            </div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
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
                    <Button variant="primary" className='mt-4' onClick={handleAddCertificate}>
                        {"Add Certificate"}
                    </Button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
}

export default CertificateModel;
