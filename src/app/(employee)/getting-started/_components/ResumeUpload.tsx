"use client";
import React, { useState } from 'react';
import Button from '@/components/Button';
import { IMAGES } from '@/assets';
import Image from 'next/image';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { uploadResume } from '@/api/employee';

// Define types for the props
interface ResumeUploadProps {
  setSelectedFile: (file: File | null) => void;
  handleResumeUploadSuccess: () => void;
}

// ResumeUpload component
const ResumeUpload: React.FC<ResumeUploadProps> = ({ setSelectedFile, handleResumeUploadSuccess }) => {
  const [selectedFile, setLocalSelectedFile] = useState<File | null>(null);

  // Define the mutation for uploading resume
  const { mutate: uploadResumeMutation, isError, error } = useMutation({
    mutationFn: uploadResume,
    onSuccess: () => {
      toast.success('Resume uploaded successfully');
      handleResumeUploadSuccess();
    },
    onError: (error: any) => {
      toast.error(`Error uploading file: ${error.response?.data?.message || error.message}`);
    },
  });

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setLocalSelectedFile(file);
    setSelectedFile(file); // Update the parent state
  };

  // Trigger file input click
  const handleFileClick = () => {
    const fileUpload = document.getElementById('file-upload') as HTMLInputElement;
    fileUpload?.click();
  };

  // Handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      uploadResumeMutation(selectedFile);
    } else {
      toast.error('Please select a file to upload');
    }
  };

  return (
    <div>
      <div className="flex flex-col py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
        <span>Upload Resume</span>
      </div>
      <div>
        <input
          type="file"
          id="file-upload"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button
          className="border border-dashed border-gray-400 rounded-lg w-full h-48 flex flex-col justify-center items-center"
          onClick={handleFileClick}
        >
          <div className="flex flex-col p-10 max-lg:p-0 max-md:w-[250px]">
            <div className="flex justify-center">
              <Image src={IMAGES.papperclip} alt="resume" />
            </div>
            <span className="text-gray-400 p-4">Drag & drop your file here or click to upload</span>
            {selectedFile && <span className="mt-2 text-blue-500">{selectedFile.name}</span>}
          </div>
        </button>
      </div>
      <div className="flex max-lg:justify-center justify-start max-lg:mt-32 mb-5 mt-5">
        <Button variant="primary" type="button" onClick={handleUpload} className="max-md:w-[230px] max-lg:w-[400px]">
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ResumeUpload;
