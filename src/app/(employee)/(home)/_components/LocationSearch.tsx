import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ICONS } from "@/assets"; // adjust this path as per your structure

const LocationSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log(selectedItems);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const filteredItems = search.trim()
    ? indianStates.filter((state) =>
        state.toLowerCase().startsWith(search.toLowerCase())
      )
    : indianStates;

  const handleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
      <form
        onClick={() => setOpen((prev) => !prev)}
        className="px-6 py-5 bg-white shadow-secondary-button flex items-center justify-between text-neutral-700 text-xl font-500 leading-6 rounded-2xl w-[277px] cursor-pointer 
        transition-all duration-300 ease-in-out transform active:scale-95"
      >
        <input
          type="text"
          className="focus:outline-none w-full text-base"
          placeholder="Enter location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        />
        <Image src={ICONS.location} alt="location-icon" className="size-6" />
      </form>

      <div
        className={`${
          open ? "visible bg-white shadow-secondary-button" : "invisible"
        } absolute top-12 z-50 w-full flex flex-col gap-2 p-3 rounded-b-2xl max-h-64 overflow-y-auto`}
      >
        {filteredItems.map((item, idx) => (
          <label
            key={idx}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleSelect(item)}
              className="form-checkbox h-4 w-4 text-primary-500"
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
