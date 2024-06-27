import React from 'react'
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';



const ProjectDetails = () => {
    return (
        <div>{/* The button to open modal */}
            <div className=' flex justify-end'>
                <label htmlFor="my_modal_7" className=" bg-white">
                    <div className=' flex justify-end gap-2 cursor-pointer'>
                        <span className=' text-primary-500 text-[16px] font-600'>Add More</span>
                        <Image src={IMAGES.circle} alt="circle" />
                    </div>
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog" >
                <div className=" max-w-3xl modal-box">
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="Project Title">Project Title</label>
                        <Input
                            id="Project Title"
                            type="text"
                            placeholder="eg., Online Gaming App"
                        />
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="Project Description">Project Description</label>
                        <textarea
                            id="Project Description"
                            placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
                            className='border p-4 rounded-xl'
                        />
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
                        {"Add Project"}
                    </Button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    )
}

export default ProjectDetails