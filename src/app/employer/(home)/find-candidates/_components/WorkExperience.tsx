const WorkExperience = () => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold font-600 text-[#37466D]">
        Work Experience
      </h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {/* Work Experience card */}
      <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5">
        <h1 className="text-lg font-medium font-500 text-[#383842]">
          UX Designer @Google, Chennai
        </h1>
        <p className="text-[#717386] mt-2">
          Apr 2022 - Present (25 months) | Part-time
        </p>
        <p className="text-[#717386] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quas
          nulla? Facere illo recusandae id voluptas itaque porro, adipisci
          pariatur perspiciatis quasi laboriosam distinctio expedita nesciunt
          totam suscipit, sapiente rem.
        </p>

        <h1 className="text-lg font-medium font-500 text-[#383842] mt-5">
          Projects
        </h1>
        {/* Project links */}
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex items-center gap-2">
            <div className="size-[8px] rounded-full bg-[#717386]"></div>
            <a
              href=""
              target="_blank"
              className="text-[#717386] hover:underline"
            >
              https://www.figma.com/design/Vv822pdzIbWssPfzdLAZny/Untitled?node-id=0-1&p=f&m=dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
