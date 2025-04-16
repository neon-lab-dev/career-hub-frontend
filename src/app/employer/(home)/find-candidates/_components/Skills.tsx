import React from "react";

const Skills = () => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold font-600 text-[#37466D]">Skills</h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {/* Skills card */}
      <div className="flex items-center gap-3">
        <div className="bg-[#37466D] rounded-[10px] px-5 py-[10px] text-[#F5F6FA] text-sm font-medium font-500">
          Reactjs
        </div>
      </div>
    </div>
  );
};

export default Skills;
