import React, { ReactNode } from 'react';
import Image from 'next/image';
import twMerge from 'tailwindcss-classnames'; // Import twMerge for class merging
import AddIcon from "@/assets/images/Add Circle.svg"; // Adjust path as necessary
import CloseIcon from "@/assets/images/Close Circle.svg"; // Adjust path as necessary

interface ChipProps {
    variant: 'add' | 'close';
    children: ReactNode;
    className?: string; // Allow custom class names to be passed
}

const Chip: React.FC<ChipProps> = ({ variant, children, className }) => {
    const baseStyles = ['px-4', 'pb-[10px]', 'pt-2', 'rounded-[5px]', 'font-semibold'];
    
    const variantStyles = {
        add: 'bg-secondary-50 text-secondary-600 border border-secondary-200',
        close: 'bg-secondary-700 text-white',
    };

    const buttonClass = twMerge([baseStyles, variantStyles[variant], className]);

    // Define the image source based on variant
    const getImageSource = () => {
        switch (variant) {
            case 'add':
                return AddIcon;
            case 'close':
                return CloseIcon;
            default:
                return ''; // Handle default case if needed
        }
    };

    return (
        <div className={`w-[170px] flex gap-2 m-2 py-[20px] ${buttonClass}`}>
            <button className='text-[16px] font-semibold font-plus-jakarta-sans'>
                {children}
            </button>
            <Image src={getImageSource()} alt="Button Icon" width={24} height={24} />
        </div>
    );
};

export default Chip;
