import React from "react";
import { Link } from "react-router-dom";
function CourseCard({ course }) {
  return (
    <>
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="course-item bg-light">
          <div class="position-relative overflow-hidden">
            <img class="img-fluid" src="img/course-1.jpg" alt="" />
            <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
              <Link
                to={`/course/${course.title}/${course.id}`}
                class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </Link>
              <a
                href="/"
                class="flex-shrink-0 btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Join Now
              </a>
            </div>
          </div>
          <div class="text-center p-4 pb-0">
            <h3 class="mb-0">{course.price}</h3>
            <div class="mb-3">
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small>(123)</small>
            </div>
            <h5 class="mb-4">{course.title}</h5>
          </div>
          <div class="d-flex border-top">
            <small class="flex-fill text-center border-end py-2">
              <i class="fa fa-user-tie text-primary me-2"></i>
              {course.teacher}
            </small>
            <small class="flex-fill text-center border-end py-2">
              <i class="fa fa-clock text-primary me-2"></i>
              {course.totalTime} Hrs
            </small>
            <small class="flex-fill text-center py-2">
              <i class="fa fa-user text-primary me-2"></i>
              {course.studentEnrolled} Students
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
