const Certification = () => {
  return (
    <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold font-600 text-[#37466D]">
        Certifications
      </h1>
      <hr className="border border-[#F7F7F8] w-full" />

      {/* Certifications card */}
      <div className="bg-white border border-[#F7F7F8] rounded-[20px] p-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-medium font-500 text-[#4A4A5A]">
            Certificate From google
          </h1>
          <p className="text-[#717386]">Apr 2022</p>
        </div>
        <a
          href=""
          target="_blank"
          className="text-[#f9533a] mt-2 underline hover:text-primary-500"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Certification;
