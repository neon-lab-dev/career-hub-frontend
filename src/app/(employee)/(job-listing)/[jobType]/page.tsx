import NotFound from "@/components/NotFound";

type Props = {
  params: {
    jobType: string;
  };
};

export const AVAILABLE_JOB_TYPES = ["internships", "jobs"];

export default function Page({ params: { jobType } }: Props) {
  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;
  if (jobType) return <div>My Post: {jobType}</div>;
}
