import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className="pt-10 pb-2 bg-secondary-50">
            <div className="max-width flex">
                <div className="flex max-lg:flex-col w-full bg-secondary-200 border border-neutral-100 p-6 max-lg:px-2 max-md:py-4 justify-between rounded-2xl items-center gap-5 max-lg:mx-10  mx-[120px] max-md:mx-4  text-center">
                    <div className='flex gap-4 items-center'>
                        <div>
                            <div className=' bg-neutral-100 border-[3px] border-white rounded-full w-[60px] h-[60px]'></div>
                        </div>
                        <div className=' font-plus-jakarta-sans'>
                            <div className='flex gap-2'>
                                <span className=' text-neutral-950 text-2xl max-md:text-lg font-600'>Salmaan Ahmed</span>
                                <Image src={ICONS.penResume} alt='pen' />
                            </div>
                            <span className=' text-neutral-600 text-lg max-md:text-xs'>Meenakshi college of engineering</span>
                        </div>
                    </div>
                    <Button variant='normal'>
                        <div className='flex gap-2 p-2'>
                            <span className=' text-xl'>Download Resume</span>
                            <Image src={IMAGES.download} alt='pen' />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Profile