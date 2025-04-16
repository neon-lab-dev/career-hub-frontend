const ProjectDetails = () => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold font-600 text-[#37466D]">
        Project Details
      </h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {/* Project card */}
      <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5">
        <h1 className="text-lg font-medium font-500 text-[#383842]">
          Project name
        </h1>
        <a
          href=""
          target="_blank"
          className="text-[#717386] mt-2 underline hover:text-primary-500"
        >
          https://www.figma.com/design/Vv822pdzIbWssPfzdLAZny/Untitled?node-id=0-1&p=f&m=dev
        </a>
        <p className="text-[#717386] mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quas
          nulla? Facere illo recusandae id voluptas itaque porro, adipisci
          pariatur perspiciatis quasi laboriosam distinctio expedita nesciunt
          totam suscipit, sapiente rem.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
