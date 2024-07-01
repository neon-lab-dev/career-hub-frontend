"use client"

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface SearchInputProps {
  placeholder: string;
  icon: StaticImageData;
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, icon, onSearch }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(value);
  };

  return (
    <div className="bg-neutral-450 border border-neutral-550 rounded-[10px] max-w-[240px] px-4 py-[14px] flex justify-between items-center">
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={handleInputChange}
        className="bg-neutral-450 focus:outline-none w-[170px]" 
      />
      <Image 
        src={icon} 
        alt="search-icon" 
        className="w-[18px] cursor-pointer"
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default SearchInput;