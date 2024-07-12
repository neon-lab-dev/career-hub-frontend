"use client";

import { handleApplyJobService } from "@/api/jobs";
import Button from "@/components/Button";
import { useAppSelector } from "@/hooks/store";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

const ApplyJob = ({
  jobId,
  isApplied,
  disabled = false,
}: {
  jobId: string;
  isApplied: boolean;
  disabled?: boolean;
}) => {
  const { studentProfile } = useAppSelector((state) => state.auth);
  const { mutate, isPending } = useMutation({
    mutationFn: handleApplyJobService,
    onSuccess: (msg) => {
      toast.success(msg);
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });
  return (
    <>
      <Button
        disabled={isApplied || disabled}
        onClick={() => {
          if (!studentProfile) {
            toast.error("Login to apply for the job");
            return;
          }
          mutate(jobId);
        }}
        className="w-full sm:w-auto"
      >
        {isApplied ? "Applied" : isPending ? "Applying..." : "Apply Now"}
      </Button>
    </>
  );
};

export default ApplyJob;
