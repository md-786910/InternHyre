import React from "react";
import CourseCard from "./CourseCard";

function AllCourses() {
  const course = [
    {
      id: 1,
      title: "web design for beginer",
      price: "₹1000",
      rating: "3",
      teacher: "john doe",
      totalTime: "1.49h",
      studentEnrolled: "40",
      coverImage: "",
    },
    {
      id: 2,
      title: "fronted developer for beginer",
      price: "₹1000",
      rating: "4",
      teacher: "john doe",
      totalTime: "3.49h",
      studentEnrolled: "30",
      coverImage: "",
    },
    {
      id: 3,
      title: "full stack developer for beginer",
      price: "₹1000",
      rating: "3.5",
      teacher: "john doe",
      totalTime: "12h",
      studentEnrolled: "60",
      coverImage: "",
    },
  ];

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeIn" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 class="mb-5">Popular Courses</h1>
          </div>
          <div class="row g-4 justify-content-center">
            {course &&
              course.map((c, index) => {
                return <CourseCard key={index} course={c} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
