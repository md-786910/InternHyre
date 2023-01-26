import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CourseComp from "./CourseComp";

function CourseDetail() {
  const { id, title } = useParams();
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    return () => {
      document.title = "";
    };
  });
  return (
    <>
      <header class="header">
        <section class="hero-section">
          <div class="hero-mask"></div>
          <div class="container text-center py-5">
            <div class="single-col-max mx-auto">
              <div class="hero-heading-upper pt-3 mb-3">
                Promote Your Online Course <br class="d-md-none" />
                Like A Pro
              </div>
              <h1 class="hero-heading mb-5">
                <span class="brand mb-4 d-block">
                  <span class="text-highlight pr-2"></span>
                  <span class="name">DevCourse</span>
                  <span class="text-highlight pl-2"></span>
                </span>
                <span class="desc d-block">
                  A Course Landing Page Template For Developers
                </span>
              </h1>
              <div class="text-center mb-5">
                <Link
                  to="/course/playList"
                  class="btn btn-primary btn-lg scrollto"
                >
                  Start Learning Now
                </Link>
              </div>

              <div class="hero-summary">
                <div class="row">
                  <div class="item col-4">
                    <div class="summary-desc mb-1">
                      <i class="icon fas fa-video me-2"></i>Content
                    </div>
                    <h4 class="summary-heading">
                      80+ <span class="desc">Videos</span>
                    </h4>
                  </div>
                  <div class="item col-4">
                    <div class="summary-desc mb-1">
                      <i class="icon fas fa-clock me-2"></i>Duration
                    </div>
                    <h4 class="summary-heading">
                      72 <span class="desc">Hours</span>
                    </h4>
                  </div>
                  <div class="item col-4">
                    <div class="summary-desc mb-1">
                      <i class="icon fas fa-user-circle me-2"></i>Access
                    </div>
                    <h4 class="summary-heading">Lifetime</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <CourseComp />
    </>
  );
}

export default CourseDetail;
