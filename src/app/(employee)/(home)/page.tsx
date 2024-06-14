import Input from "@/components/Input";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex gap-6 p-12 flex-wrap">
      <Input placeholder="Default" />
      <Input placeholder="Filled" variant="filled" />

      <Input placeholder="Error" isError />
      <Input placeholder="Filled Error" variant="filled" isError />

      <Input placeholder="Disabled" disabled />
      <Input placeholder="Filled Disabled" variant="filled" disabled />
    </div>
  );
};

export default HomePage;
