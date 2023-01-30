import React, { useState } from "react";
import Model from "../common/Model";
import UserCourses from "./UserCourses";
import UserProfile from "./UserProfile";

function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Model
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        heading={"share certificate"}
        disableRegister={false}
      >
        <h2>Add Link to share</h2>
      </Model>
      <div
        className="container mt-5 d-flex "
        style={{ backgroundColor: "light" }}
      >
        <div
          className="shadow  px-5 pe-5 nav flex-column nav-pills me-5"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link  active mb-4 "
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Profile
          </button>
          <button
            className="nav-link mb-4"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Course
          </button>
          <button
            className="nav-link mb-4"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Certificate
          </button>
          <button
            className="nav-link mb-4"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Settings
          </button>
        </div>
        <div
          className="tab-content shadow p-3 w-100 "
          id="v-pills-tabContent"
          style={{ borderRadius: "5px" }}
        >
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <UserProfile />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <UserCourses />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div
              className="certificate mx-3 woow fadeIn "
              data-wow-delay="0.1s"
            >
              <div className="certificate">
                <img src="./assets/images/cert.jpg" alt="" />
              </div>
              <div className="downloadBtn mt-4">
                <button className="btn btn-primary">
                  Download Certificate
                </button>
                <button className="btn mx-3 btn-success" onClick={handleShow}>
                  Share Certificate
                </button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            ...
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
