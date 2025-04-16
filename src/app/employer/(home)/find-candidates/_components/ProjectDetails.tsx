export type TProjectDetails = {
  _id: string;
  title: string;
  description: string;
  link: string;
  startDate: string;
  endDate: string;
};

const ProjectDetails = ({ projects }: { projects: TProjectDetails[] }) => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2x font-600 text-[#37466D]">
        Project Details
      </h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {/* Project card list */}
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div key={project._id} className="bg-white border border-[#F7F7F8] rounded-[20px] p-5">
            <h1 className="text-lg font-500 text-[#383842]">
              {project.title}
            </h1>
            <a
              href={project.link}
              target="_blank"
              className="text-[#717386] mt-2 underline hover:text-primary-500"
            >
              {project.link}
            </a>
            <p className="text-[#717386] mt-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
