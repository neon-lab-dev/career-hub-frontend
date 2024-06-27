import React from 'react'
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';



const CertificateModel = () => {
    return (
        <div>{/* The button to open modal */}
            <div className=' flex justify-end'>
                <label htmlFor="my_modal_7" className=" bg-white">
                    <div className=' flex justify-end gap-2 cursor-pointer'>
                        <span className=' text-primary-500 text-[16px] font-600'>Add More</span>
                        <Image src={IMAGES.circle} alt='circle' />
                    </div>
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog" >
                <div className="modal-box w-[700px] max-md:w-[349px]">
                    <div className="flex flex-col mt-4 gap-2 ">
                        <label htmlFor="Certificate Name">Certificate Name</label>
                        <Input
                            id="Certificate Name"
                            type="text"
                            placeholder="eg., UI UX Design Certificate"
                            className='max-md:placeholder:text-xs'
                        />
                    </div>
                    <div className="flex max-md:flex-wrap gap-6 max-md:gap-2 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Certificate link / ID">Certificate link / ID</label>
                            <Input
                                id="Certificate link / ID"
                                placeholder="link here"
                                className=' max-md:w-[140px] max-md:placeholder:text-xs'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pinCode">Month</label>
                            <Input
                                id="pinCode"
                                placeholder="mm/yyyy"
                                type='month'
                                className=' max-md:w-[140px] max-md:placeholder:text-xs'
                            />
                        </div>
                    </div>
                    <Button variant="primary" className='mt-4'>
                        {"Add Certificate"}
                    </Button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    )
}

export default CertificateModel