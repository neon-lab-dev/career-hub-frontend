import React from "react";

type TInternshipModeProps = {
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
};

const InternshipMode: React.FC<TInternshipModeProps> = ({
  selectedMode,
  setSelectedMode,
}) => {
  // Internship Mode
  const handleInternshipMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMode(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="" className="text-neutral-960 text-base font-500">
        Internship Mode
      </label>

      <div className="flex items-center gap-6">
        {/* Radio select for remote internship */}
        <div className="flex items-center gap-[6px]">
          <input
            type="radio"
            name="internship-mode"
            id="remote-internship"
            value="Remote Internship"
            className="radio radio-error border-[2px] border-neutral-970"
            checked={selectedMode === "Remote Internship"}
            onChange={handleInternshipMode}
          />
          <label
            htmlFor="remote-internship"
            className="text-sm font-500 text-secondary-650 cursor-pointer"
          >
            Remote Internship
          </label>
        </div>

        {/* Radio select for on-field internship */}
        <div className="flex items-center gap-[6px]">
          <input
            type="radio"
            name="internship-mode"
            id="on-field-internship"
            value="On-Field Internship"
            className="radio radio-error border-[2px] border-neutral-970"
            checked={selectedMode === "On-Field Internship"}
            onChange={handleInternshipMode}
          />
          <label
            htmlFor="on-field-internship"
            className="text-sm font-500 text-secondary-650 cursor-pointer"
          >
            On-Field Internship
          </label>
        </div>
      </div>
    </div>
  );
};

export default InternshipMode;
