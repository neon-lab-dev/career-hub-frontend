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
                    <div className=' flex justify-end gap-2 cursor-pointer max-md:mx-4' >
                        <span className=' text-primary-500 text-[16px] font-600 '>Add More</span>
                        <Image src={IMAGES.circle} alt="cricle" />
                    </div>
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog" >
                <div className=" max-w-xl max-md:w-[350px]  modal-box">
                    <div className="flex max-md:flex-col gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Institute Name">Institute Name</label>
                            <Input
                                id="Institute Name"
                                placeholder="eg., Meenakshi college of engineering"
                                className='w-[310px]'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="City, State">City, State</label>
                            <Input
                                id="pinCode"
                                placeholder="mm/yyyy"
                                type='month'
                            />
                        </div>
                    </div>
                    <div className="flex   gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Course">Course</label>
                            <Input
                                id="Course"
                                placeholder="link here"
                                className='w-[250px]  max-md:w-[140px] max-md:placeholder:text-xs'

                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="eg., 9/10">Grade / Percentage</label>
                            <Input
                                id="eg., 9/10"
                                placeholder="eg., 9/10"
                                type='text'
                                className='w-[250px]  max-md:w-[140px] max-md:placeholder:text-xs'
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="From">From</label>
                            <Input
                                id="From"
                                placeholder=""
                                type='month'
                                className='w-[250px]  max-md:w-[140px] max-md:placeholder:text-xs'

                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="to">to</label>
                            <Input
                                id="to"
                                placeholder=""
                                type='month'
                                className='w-[250px]  max-md:w-[140px] max-md:placeholder:text-xs'
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