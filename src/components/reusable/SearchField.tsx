import React from 'react';

import Image from 'next/image';

interface SearchFieldProps {
    searchPlaceholder?: string;
    locationPlaceholder?: string;
    onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleLocation?: () => void;
    className?: string;
    searchIcon: string;
    locationIcon: string;
  }

  const SearchField: React.FC<SearchFieldProps> = ({
    searchPlaceholder,
    locationPlaceholder,
    onSearch,
    handleLocation,
    className,
    searchIcon,
    locationIcon,
  }) => {
    return (
        <>
        
        <div className={`w-[749px] mx-auto flex justify-between border-[1.25px] border-primary-500 rounded-[100px] p-4 bg-white ${className}`}>
      <div className="flex items-center gap-4">
        <div className='w-[55px] h-[55px] bg-primary-500 rounded-full flex justify-center items-center'>
          <Image src={searchIcon} alt="search-icon" className='w-[30px]' />
        </div>
        <input 
          type="text" 
          className='focus:outline-none' 
          placeholder={searchPlaceholder} 
          onChange={onSearch}
        />
      </div>
      <div 
        className='w-[205px] px-5 py-[15px] bg-neutral-100 rounded-[125px] flex items-center gap-1 cursor-pointer'
        onClick={handleLocation}
      >
        <Image src={locationIcon} alt="location-icon" />
        <p className='font-plus-jakarta-sans text-xl text-neutral-700 font-normal'>{locationPlaceholder}</p>
      </div>
    </div>

        </>

    );
};

export default SearchField;