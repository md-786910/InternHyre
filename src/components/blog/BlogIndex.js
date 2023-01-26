import React from "react";
import BlogCard from "./BlogCard";

function BlogIndex() {
  return (
    <>
      <div className="container my-5 ">
        <div class="row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className="mt-5 d-flex justify-content-between">
          <button className="btn btn-primary">prev</button>
          <button className="btn btn-primary">next</button>
        </div>
      </div>
    </>
  );
}

export default BlogIndex;
