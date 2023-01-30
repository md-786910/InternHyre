import React from "react";
import { Link } from "react-router-dom";
function CourseCard({ course }) {
  return (
    <>
      <div
        className="shadow col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="course-item bg-light">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="img/course-1.jpg" alt="" />
            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
              <Link
                to={`/course/${course.title}/${course.id}`}
                className="flex-shrink-0 btn btn-sm btn-primary px-3"
                style={{ borderRadius: "30px" }}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="text-center p-4 pb-0">
            <h3 className="mb-0">{course.price}</h3>
            <div className="mb-3">
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small>(123)</small>
            </div>
            <h5 className="mb-4">{course.title}</h5>
          </div>
          <div className="d-flex border-top">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-user-tie text-primary me-2"></i>
              {course.teacher}
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-clock text-primary me-2"></i>
              {course.totalTime} Hrs
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2"></i>
              {course.studentEnrolled} Students
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
