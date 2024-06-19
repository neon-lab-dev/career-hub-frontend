
import { IMAGES } from '@/assets';
import Image from 'next/image';
import Input from "@/components/Input";
import Button from '@/components/Button';



const WorkExp = () => {
    return (
        <div>{/* The button to open modal */}
            <div className=' flex justify-end'>
                <label htmlFor="my_modal_7" className=" bg-white">
                    <div className=' flex justify-end gap-2 cursor-pointer' htmlFor="my_modal_7">
                        <span className=' text-primary-500 text-[16px] font-600'>Add More</span>
                        <Image src={IMAGES.circle} />
                    </div>
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog" >
                <div className=" max-w-3xl modal-box">
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Company Name">Company Name</label>
                            <Input
                                id="Company Name"
                                placeholder="eg., Google"
                                className='w-[350px]'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="City, State">City, State</label>
                            <Input
                                id="pinCode"
                                placeholder="mm/yyyy"
                                className='w-[350px]'
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
                                className='w-[350px]'

                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="to">to</label>
                            <Input
                                id="to"
                                placeholder=""
                                type='month'
                                className='w-[350px]'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="Work Description">Work Description</label>
                        <textarea
                            id="Work Description"
                            type="text"
                            placeholder="You can write about what was the goal of this project? How did you develop this project? and What are some important features of the project?"
                            className='border p-4 rounded-xl'
                        />
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="Project Links">Project Links</label>
                        <Input
                            id="Project Links"
                            type="text"
                            placeholder="Link Here"
                        />
                    </div>
                    <Button variant="primary" className='mt-4'>
                        {"Add Work Experience"}
                    </Button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    )
}

export default WorkExp