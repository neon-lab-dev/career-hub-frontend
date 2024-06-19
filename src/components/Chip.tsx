import React, { ReactNode } from 'react';
import Image from 'next/image';
import AddIcon from "@/assets/icons/Add Square.svg" // Replace with actual path
import CloseIcon from "@/assets/icons/Close Circle.svg"

interface ChipProps {
    variant: 'add' | 'close';
    children: ReactNode;
}

const Button: React.FC<ChipProps> = ({ variant, children }) => {
    const baseStyles = 'px-4 pb-[10px] pt-2 rounded-[5px] font-semibold';

    const variantStyles = {
        add: 'bg-secondary-50 text-secondary-600 border broder-secondary-200',
        close: 'bg-secondary-700 text-white',
    };

    const buttonClass = `${baseStyles} ${variantStyles[variant]}`;

    // Define the image source based on variant
    const getImageSource = () => {
        switch (variant) {
            case 'add':
                return AddIcon; // Replace with actual import
            case 'close':
                return CloseIcon; // Replace with actual import
            default:
                return ''; // Handle default case if needed
        }
    };

    return (
        <div className={`w-[150px] flex gap-2 m-2 py-[20px] ${buttonClass} `}>
            <button className='text-[20px]' >
                {children}
            </button>
            <Image src={getImageSource()} alt="Button Icon"  />
        </div>
    );
};

export default Button;
