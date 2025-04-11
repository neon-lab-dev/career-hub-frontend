"use client";
import { useEffect, useState } from "react";
import ISO6391 from "iso-639-1";
import { ICONS } from "@/assets";
import Chip from "@/components/Chip";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type TLanguagePreferenceProps = {
  selectedLanguages: string[];
  setSelectedLanguages: Dispatch<SetStateAction<string[]>>;
};

const LanguagePreference: React.FC<TLanguagePreferenceProps> = ({
  selectedLanguages,
  setSelectedLanguages,
}) => {
  const [languageList, setLanguageList] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLanguageList(ISO6391.getAllNames());
  }, []);

  const handleAddLanguage = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleRemoveLanguage = (language: string) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
  };

  const filteredLanguages = languageList.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-9 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading">
        What Languages do you speak?
      </h1>

      {/* Search Input */}
      <div className="relative max-w-[633px] w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Select a language or enter keyword"
          className="pl-12 pr-4 py-4 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary-500 transition duration-300 w-full"
        />
        <Image
          src={ICONS.searchGray}
          alt="search-icon"
          className="size-6 absolute top-[14px] left-4"
        />
      </div>

      {/* Selected Languages */}
      <div className="flex flex-wrap gap-2">
        {selectedLanguages?.length > 0 ? (
          selectedLanguages?.map((lang) => (
            <Chip
              key={lang}
              onClick={() => handleRemoveLanguage(lang)}
              variant="close"
            >
              {lang}
            </Chip>
          ))
        ) : (
          <Chip variant="close">No language selected</Chip>
        )}
      </div>

      {/* All Languages */}
      <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto">
        {filteredLanguages?.map((lang) => (
          <Chip
            key={lang}
            onClick={() => handleAddLanguage(lang)}
            variant="add"
          >
            {lang}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default LanguagePreference;
