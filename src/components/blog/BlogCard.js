import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  let title = "blog";
  let id = 1;

  return (
    <>
      <div class="col-sm-6 mb-4 wow fadeInUp">
        <div class="card card-block p-4">
          <h4 class="card-title">Special title treatment</h4>
          <Link to={`/blog/${title}/${id}`} class="btn btn-primary mt-3">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
