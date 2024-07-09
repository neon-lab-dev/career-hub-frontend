"use client";

import { handleApplyJobService } from "@/api/jobs";
import Button from "@/components/Button";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

const ApplyJob = ({ jobId }: { jobId: string }) => {
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
      <Button onClick={() => mutate(jobId)} className="w-full sm:w-auto">
        {isPending ? "Applying..." : "Apply Now"}
      </Button>
    </>
  );
};

export default ApplyJob;
