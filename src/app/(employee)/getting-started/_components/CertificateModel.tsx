import React, { useState, useEffect } from 'react';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';

interface Certification {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate: string;
  credentialID: string;
  credentialURL: string;
}

interface CertificateModelProps {
  addCertification: (certification: Certification) => void;
  showOnMount: boolean;
}

const CertificateModel: React.FC<CertificateModelProps> = ({ addCertification, showOnMount }) => {
  const [certification, setCertification] = useState<Certification>({
    name: '',
    issuingOrganization: '',
    issueDate: '',
    expirationDate: '',
    credentialID: '',
    credentialURL: '',
  });

  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (showOnMount) {
      const modalElement = document.getElementById('my_modal_7') as HTMLInputElement | null;
      if (modalElement) {
        modalElement.checked = true;
      }
    }
  }, [showOnMount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setCertification((prev) => ({ ...prev, [id]: value }));
  };

  const handleAdd = () => {
    // Simple validation
    if (!certification.name || !certification.issuingOrganization || !certification.issueDate || !certification.expirationDate) {
      setValidationError('Please fill out all required fields.');
      return;
    }

    addCertification(certification);
    setCertification({
      name: '',
      issuingOrganization: '',
      issueDate: '',
      expirationDate: '',
      credentialID: '',
      credentialURL: '',
    });

    // Clear validation error
    setValidationError('');

    // Close modal after adding
    const modalElement = document.getElementById('my_modal_7') as HTMLInputElement | null;
    if (modalElement) {
      modalElement.checked = false;
    }
  };

  return (
    <div>
      {/* Modal Trigger Button */}
      <div className='flex justify-end'>
        <label htmlFor="my_modal_7" className="bg-white">
          <div className='flex justify-end gap-2 cursor-pointer'>
            <span className='text-primary-500 text-[16px] font-600'>Add More </span>
            <Image src={IMAGES.circle} alt='circle' />
          </div>
        </label>
      </div>

      {/* Modal Structure */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-xl max-md:w-[349px]">
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
          <div className='flex gap-10 items-center'>
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
          {validationError && <p className="text-red-500">{validationError}</p>}
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
