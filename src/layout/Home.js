import React from "react";
import About from "../components/home/About";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import CoursesStart from "../components/home/CoursesStart";
import Service from "../components/home/Service";
import Team from "../components/home/Team";
import Testnomials from "../components/home/Testnomials";
import ArrowTop from "./ArrowTop";
// import Spinner from "../components/spinner";

function Home() {
  return (
    <>
      <Carousel />
      <Service />
      <About />
      <Categories />
      <CoursesStart />
      <Team />
      <Testnomials />
      <ArrowTop />
    </>
  );
}

export default Home;
