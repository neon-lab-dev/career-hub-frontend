import NotFound from "@/components/NotFound";

type Props = {
  params: {
    jobType: string;
    jobId: string;
  };
};

const AVAILABLE_JOB_TYPES = ["internships", "jobs"];

export default function Page({ params: { jobType, jobId } }: Props) {
  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;
  if (jobType) return <div>My Post: {jobId}</div>;
}
