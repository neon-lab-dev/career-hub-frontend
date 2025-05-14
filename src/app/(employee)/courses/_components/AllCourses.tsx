"use client";
import { getAllCourses } from "@/api/admin";
import Container from "@/components/Container";
import NoDataFound from "@/components/NoDataFound";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "../../(home)/_components/CourseCard";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import { ICONS } from "@/assets";
import { useState } from "react";
import DropdownInput from "@/components/Reusable/DopdownInput/DropdownInput";
import FilterDropdown from "@/components/Reusable/FilterDropdown/FilterDropdown";
import { departments } from "@/mockData/departments";

const AllCourses = () => {
  const [queryParams, setQueryParams] = useState({
    keyword: "",
  });
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPricingType, setSelectedPricingType] = useState("");

  const { isLoading, data } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  const handleSelectCourseType = (courseType: string) => {
    setSelectedCourseType(courseType);
  };
  const handleSelectDepartment = (department: string) => {
    setSelectedDepartment(department);
  };
  const handleSelectPricingType = (pricingType: string) => {
    setSelectedPricingType(pricingType);
  };
  return (
    <Container>
      <div className="flex items-center justify-between w-full">
        <div className="px-4 py-3 text-base rounded-md bg-white shadow-secondary-button text-neutral-700 leading-6 cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95 text-nowrap flex gap-2 justify-between items-center">
          <input
            // value={queryParams.keyword}
            onChange={(e) => {
              setQueryParams({
                ...queryParams,
                keyword: e.target.value,
              });
            }}
            type="text"
            placeholder={`Search course...`}
            className="bg-white focus:outline-none"
          />
          <Image
            src={ICONS.magnifer}
            alt="search-icon"
            className="w-[18px]"
          />
        </div>

        <div className="flex items-center gap-5">
          <FilterDropdown
              label="Select Course Type"
              items={["Certificate", "Diploma", "Bachelor", "Master"]}
              icon={ICONS.downArrow}
              onSelect={handleSelectCourseType}
              selectedData={selectedCourseType}
              classNames="px-4 py-3 text-base rounded-md w-fit lg:w-fit gap-3"
            />
          <FilterDropdown
              label="Select Department"
              items={departments}
              icon={ICONS.downArrow}
              onSelect={handleSelectDepartment}
              selectedData={selectedDepartment}
              classNames="px-4 py-3 text-base rounded-md w-fit lg:w-fit gap-3"
            />
          <FilterDropdown
              label="Select Pricing Type"
              items={["Free", "Paid"]}
              icon={ICONS.downArrow}
              onSelect={handleSelectPricingType}
              selectedData={selectedPricingType}
              classNames="px-4 py-3 text-base rounded-md w-fit lg:w-fit gap-3"
            />
        </div>
      </div>


      <div className="my-10">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Oval
              height={40}
              width={40}
              color="#F9533A"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#f4f4f4"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : data?.courses?.length < 1 ? (
          <NoDataFound message="No Course Available" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {data?.courses?.map((course: any) => (
              <CourseCard
                key={course?._id}
                courseName={course?.courseName}
                thumbnail={course?.thumbnail?.url}
                courseOverview={course?.courseOverview}
                pricingType={course?.pricingType}
                fee={course?.fee}
                href={`/courses/${course?._id}`}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllCourses;
