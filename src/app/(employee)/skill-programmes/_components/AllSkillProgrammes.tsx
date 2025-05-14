"use client";
import Container from "@/components/Container";
import NoDataFound from "@/components/NoDataFound";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "../../(home)/_components/CourseCard";
import { Oval } from "react-loader-spinner";
import { getAllSkillProgrammes } from "@/api/skillProgrammes";

const AllSkillProgrammes = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["skillprogrammes"],
    queryFn: getAllSkillProgrammes,
  });
  return (
    <Container>
      <div className="mb-10">
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
        ) : data?.skills?.length < 1 ? (
          <NoDataFound message="No Course Available" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {data?.skills?.map((skillProgramme: any) => (
              <CourseCard
                key={skillProgramme?._id}
                courseName={skillProgramme?.skillProgrammeName}
                thumbnail={skillProgramme?.thumbnail?.url}
                courseOverview={skillProgramme?.programmeOverview}
                pricingType={skillProgramme?.pricingType}
                fee={skillProgramme?.fee}
                href={`/skill-programmes/${skillProgramme?._id}`}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllSkillProgrammes;
