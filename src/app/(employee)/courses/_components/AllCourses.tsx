"use client";
import { getAllCourses } from "@/api/admin";
import Container from "@/components/Container";
import NoDataFound from "@/components/NoDataFound";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "../../(home)/_components/CourseCard";
import { Oval } from "react-loader-spinner";

const AllCourses = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
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
