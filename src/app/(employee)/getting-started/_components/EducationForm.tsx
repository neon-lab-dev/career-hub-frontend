import React from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

const EducationForm = ({ formData, setFormData, handleContinue }) => {
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          address: {
            ...prevFormData.address,
            [id]: value,
          },
        }));
      };
    return (
        <div>
            <div>
                <div className="flex  py-6 font-plus-jakarta-sans text-3xl max-md:text-xl max-sm:text-lg pr-4 font-700">
                    <span>Where do you live currently?</span>
                </div>
                <form onSubmit={handleContinue}>
                    <div className="flex flex-col mt-4 gap-2 max">
                        <label htmlFor="street">Street</label>
                        <Input id="street" type="text" placeholder="Enter Street" value={formData.address.street} onChange={handleInputChange} />
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="city">City</label>
                        <Input id="city" type="text" placeholder="Enter city" value={formData.address.city} onChange={handleInputChange} />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="country">Country</label>
                        <Input id="country" placeholder="Country" className='' value={formData.address.country} onChange={handleInputChange} />
                    </div>
                    <div className="flex gap-10 max-md:gap-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="state">State</label>
                            <div className=' px-2 border  text-neutral-400 rounded-lg w-[200px] max-md:w-full'>
                                <select id="state" className=" py-4 px-2 border-none text-sm w-full border-neutral-300 max-md:text-xs" value={formData.address.state} onChange={handleInputChange}>
                                    <option value="" disabled selected>Select Here</option>
                                    <option value="state1">State 1</option>
                                    <option value="state2">State 2</option>
                                    <option value="state3">State 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="postalCode">Postal Code</label>
                            <Input id="postalCode" type='number' placeholder="Enter Postal Code" className=' max-md:w-[140px] max-md:placeholder:text-[10px] max-sm:w-[120px]' value={formData.address.postalCode} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='flex max-lg:justify-center justify-start max-lg:mt-32 mt-5 max-lg:mb-5 '>
                        <Button variant="primary" type="submit" className=' max-md:w-[230px] max-lg:w-[400px]'>
                            Continue
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EducationForm;
