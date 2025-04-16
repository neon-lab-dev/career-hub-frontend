import React from "react";

const EducationDetails = () => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold font-600 text-[#37466D]">
        Education Details
      </h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {/* Education card */}
      <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5">
        <h1 className="text-lg font-medium font-500 text-[#383842]">
          Meenakshi College of Engineering
        </h1>
        <p className="text-[#717386] mt-2">
          B.E., Computer Science Engineering | 9.2 CGPA
        </p>
        <p className="text-[#717386] mt-[2px]">2021-2025</p>
      </div>
    </div>
  );
};

export default EducationDetails;
