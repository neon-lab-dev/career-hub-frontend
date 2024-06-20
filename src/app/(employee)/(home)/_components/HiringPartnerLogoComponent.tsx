import Image from "next/image";

const HiringPartnerLogoComponent = ({ logo }: { logo: string }) => {
  return (
    <div className="flex items-center justify-center bg-white p-5 rounded-3xl w-[257px] h-[133px] ml-9">
      <Image
        src={logo}
        alt="application"
        width={60}
        height={60}
        className="aspect-square"
      />
    </div>
  );
};

export default HiringPartnerLogoComponent;
