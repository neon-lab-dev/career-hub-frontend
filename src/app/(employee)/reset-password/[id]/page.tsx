"use client";

import ChangePassword from "@/components/AuthModal/ChangePassword";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ResetPassword = ({ params: { id } }: Props) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <ChangePassword token={id} />
    </div>
  );
};

export default ResetPassword;
