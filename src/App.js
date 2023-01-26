import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import CoursePage from "./pages/coursePage";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import CourseDetail from "./components/courses/courseDetail/CourseDetail";
import Payment from "./components/payment/Payment";
import BlogPage from "./pages/blogPage";
import BlogDetail from "./components/blog/BlogDetail";
import PlayListPage from "./pages/playListPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/course/:title/:id" element={<CourseDetail />} />
          <Route path="/course/playList" element={<PlayListPage />} />
          <Route path="/payments/:id/:title" element={<Payment />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:title/:id" element={<BlogDetail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
