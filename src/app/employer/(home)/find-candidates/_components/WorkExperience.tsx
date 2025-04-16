
import { convertDate } from "@/helpers/convertDate";

export type TWorkExperience = {
  _id: string;
  companyName: string;
  designation: string;
  description: string;
  startDate: string;
  endDate: string;
  workType: string;
  projectLinks: string[];
};


const WorkExperience = ({ experiences }: { experiences: TWorkExperience[] }) => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-600 text-[#37466D]">Work Experience</h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {experiences?.map((exp) => (
        <div key={exp?._id} className="bg-white border border-[#F7F7F8] rounded-[20px] p-5">
          <h1 className="text-lg font-500 text-[#383842]">
            {exp?.designation} @{exp?.companyName}
          </h1>
          <p className="text-[#717386] mt-2">
            {convertDate(exp?.startDate)} - {convertDate(exp?.endDate)} | {exp?.workType}
          </p>
          <p className="text-[#717386] mt-2">{exp?.description}</p>

          <h1 className="text-lg font-500 text-[#383842] mt-5">Projects</h1>
          <div className="flex flex-col gap-1 mt-1">
            {exp?.projectLinks.map((link, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="size-[8px] rounded-full bg-[#717386]"></div>
                <a href={link} target="_blank" className="text-[#717386] hover:underline">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
