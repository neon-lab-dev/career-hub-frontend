import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Input from '@/components/Input';
import Button from '@/components/Button';

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface FormData {
  address: Address[];
  education: any[];
  projects: any[];
  experience: any[];
  certifications: any[];
  skills: string[];
  socialLinks: {
    linkedin: string;
    github: string;
  }[];
  interests: string[];
}

interface EducationFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleContinue: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ formData, setFormData, handleContinue }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: [{
        ...prevFormData.address[0],
        [id]: value,
      }],
    }));
  };

  const handleCountryChange = (val: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: [{
        ...prevFormData.address[0],
        country: val,
        state: '', // Reset state when country changes
      }],
    }));
  };

  const handleStateChange = (val: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: [{
        ...prevFormData.address[0],
        state: val,
      }],
    }));
  };

  return (
    <div>
      <div>
        <div className="flex py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
          <span>Where do you live currently?</span>
        </div>
        <form onSubmit={handleContinue}>
          <div className="flex flex-col mt-4 gap-2 max">
            <label htmlFor="street">Street</label>
            <Input
              id="street"
              type="text"
              placeholder="Enter Street"
              value={formData.address[0]?.street || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="city">City</label>
            <Input
              id="city"
              type="text"
              placeholder="Enter city"
              value={formData.address[0]?.city || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="country">Country</label>
            <CountryDropdown
              id="country"
              value={formData.address[0]?.country || ''}
              onChange={handleCountryChange}
              classes="py-2 px-3 border rounded-lg w-full text-sm"
            />
          </div>
          <div className="flex gap-10 max-md:gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="state">State</label>
              <RegionDropdown
                id="state"
                country={formData.address[0]?.country || ''}
                value={formData.address[0]?.state || ''}
                onChange={handleStateChange}
                classes="py-2 px-3 border rounded-lg w-[200px] max-md:w-full text-sm"
                disableWhenEmpty={true}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="postalCode">Postal Code</label>
              <Input
                id="postalCode"
                type='number'
                placeholder="Enter Postal Code"
                className='max-md:w-[140px] max-md:placeholder:text-[10px] max-sm:w-[120px]'
                value={formData.address[0]?.postalCode || ''}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mt-5 max-lg:mb-5'>
            <Button variant="primary" type="submit" className='max-md:w-[230px] max-lg:w-[400px]'>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;