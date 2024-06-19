import NotFound from "@/components/NotFound";
import { AVAILABLE_JOB_TYPES } from "@/constants/jobTypes";

type Props = {
  params: {
    jobType: string;
  };
};

export default function Page({ params: { jobType } }: Props) {
  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;
  if (jobType) return <div>My Post: {jobType}</div>;
}
