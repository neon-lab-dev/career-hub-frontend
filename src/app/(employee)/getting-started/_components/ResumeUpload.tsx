"use client"
import React, { useState } from 'react';
import Button from '@/components/Button';
import { IMAGES } from '@/assets';
import axios from 'axios';
import Image from 'next/image';
import { toast } from 'sonner';

// Define types for the props
interface ResumeUploadProps {
  setSelectedFile: (file: File | null) => void;
  onUploadSuccess: () => void;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ setSelectedFile, onUploadSuccess }) => {
  const [selectedFile, setLocalSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setLocalSelectedFile(file);
    setSelectedFile(file); // Update the parent state
  };

  const handleFileClick = () => {
    const fileUpload = document.getElementById('file-upload') as HTMLInputElement;
    if (fileUpload) {
      fileUpload.click();
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const fileData = new FormData();
        fileData.append('file', selectedFile); // Use 'file' as the field name

        await axios.put('https://carrerhub-backend.vercel.app/api/v1/resumes', fileData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        });

        toast.success('Resume uploaded successfully');
        onUploadSuccess(); // Notify parent component of success

      } catch (error: any) {
        console.error('Error uploading file:', error);
        toast.error(`Error uploading file: ${error.response?.data?.message || error.message}`);
      }
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
          <div className="flex flex-col">
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
