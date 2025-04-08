import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type TEventCardProps = {
    wrapperClassName?: string;
}
const EventCard:React.FC<TEventCardProps> = ({ wrapperClassName }) => {
  return (
    <div
      className={twMerge(
        "max-w-[340px] h-auto font-plus-jakarta-sans rounded-2xl group",
        wrapperClassName
      )}
    >
      <div className="max-h-[348px] w-full rounded-2xl border border-neutral-400/40">
        <Image
          src={IMAGES.eventImg}
          alt=""
          className="w-full object-cover rounded-2xl transition-all duration-300 ease-in-out transform group-hover:scale-105"
        />
      </div>

      {/* Event date */}
      <div className="flex items-center gap-2 mt-[18px]">
        <div className="flex items-center gap-2">
          <Image src={ICONS.calender} alt="" className="size-[18px]" />
          <p className="text-neutral-400 text-[15px]">
            Talkwisely Platforms Pvt. Ltd.
          </p>
        </div>
        <div className="bg-neutral-400 size-[5px] rounded-full"></div>
        <p className="text-neutral-400 text-[15px]">10PM</p>
      </div>

      {/* Event Name */}
      <h1 className="text-neutral-900 text-lg font-700 leading-6 mt-3">
        Build with AI Demo Day
      </h1>

      {/* Company Info */}
      <div className="flex items-center gap-2 mt-2 text-neutral-400 text-[15px]">
        <div className="flex items-center gap-2">
          <Image
            src={IMAGES.companyLogo}
            alt=""
            className="size-4 object-cover rounded-full"
          />
          <p className="">Talkwisely Platforms</p>
        </div>
        <div className="bg-neutral-400 size-[5px] rounded-full"></div>
        <p className="">Ahmedabad, India</p>
      </div>

      <div className="flex items-center gap-[10px] mt-3">
        <div className="px-3 py-[6px] text-secondary-600 font-500 text-sm bg-neutral-450 rounded-[999px]">
          Figma
        </div>
        <div className="px-3 py-[6px] text-secondary-600 font-500 text-sm bg-neutral-450 rounded-[999px]">
          Figma
        </div>
      </div>
    </div>
  );
};

export default EventCard;
