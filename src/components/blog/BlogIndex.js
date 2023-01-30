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
      </div>
    </>
  );
}

export default BlogIndex;
