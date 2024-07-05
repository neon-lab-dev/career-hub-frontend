import React, { useState } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

const CertificateModel = ({ addCertification }) => {
  const [certification, setCertification] = useState({
    name: '',
    issuingOrganization: '',
    issueDate: '',
    expirationDate: '',
    credentialID: '',
    credentialURL: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCertification((prev) => ({ ...prev, [id]: value }));
  };

  const handleAdd = () => {
    addCertification(certification);
    setCertification({
      name: '',
      issuingOrganization: '',
      issueDate: '',
      expirationDate: '',
      credentialID: '',
      credentialURL: '',
    });
  };

  return (
    <div>
      {/* The button to open modal */}
      <div className='flex justify-end'>
        <label htmlFor="my_modal_7" className="bg-white">
          <div className='flex justify-end gap-2 cursor-pointer'>
            <span className='text-primary-500 text-[16px] font-600'>Add More</span>
            <Image src={IMAGES.circle} alt='circle' />
          </div>
        </label>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[700px] max-md:w-[349px]">
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="name">Certificate Name</label>
            <Input
              id="name"
              type="text"
              placeholder="e.g., UI UX Design Certificate"
              value={certification.name}
              onChange={handleChange}
              className='max-md:placeholder:text-xs'
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="issuingOrganization">Issuing Organization</label>
            <Input
              id="issuingOrganization"
              type="text"
              placeholder="e.g., Coursera"
              value={certification.issuingOrganization}
              onChange={handleChange}
              className='max-md:placeholder:text-xs'
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="issueDate">Issue Date</label>
            <Input
              id="issueDate"
              type="date"
              value={certification.issueDate}
              onChange={handleChange}
              className='max-md:placeholder:text-xs'
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="expirationDate">Expiration Date</label>
            <Input
              id="expirationDate"
              type="date"
              value={certification.expirationDate}
              onChange={handleChange}
              className='max-md:placeholder:text-xs'
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="credentialID">Credential ID</label>
            <Input
              id="credentialID"
              type="text"
              placeholder="e.g., ABCD-1234"
              value={certification.credentialID}
              onChange={handleChange}
              className='max-md:placeholder:text-xs'
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="credentialURL">Credential URL</label>
            <Input
              id="credentialURL"
              type="url"
              placeholder="e.g., https://example.com"
              value={certification.credentialURL}
              onChange={handleChange}
              className='max-md:placeholder:text-xs'
            />
          </div>
          <Button variant="primary" className='mt-4' onClick={handleAdd}>
            {"Add Certificate"}
          </Button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  );
};

export default CertificateModel;
