import React from "react";
import { Link } from "react-router-dom";

function PlayListCard() {
  const video2 = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
  // const video1 = "https://player.vimeo.com/video/792914078?h=8ded9c1ae4";
  const video1 = "https://vimeo.com/792913696";
  const video = [
    {
      id: 1,
      module: "Module 1 lorem ipsum Dolor sit amet",
      title: "lorem ipsum",
      time: "2:30",
      poster: "",
      video: video1,
    },
    {
      id: 2,
      module: "Module 1 lorem ipsum Dolor sit amet",
      title: "lorem ipsum",
      time: "2:30",
      poster: "",
      video: video2,
    },
    {
      id: 3,
      module: "Module 1 lorem ipsum Dolor sit amet",
      title: "lorem ipsum",
      time: "2:30",
      poster: "",
      video: video2,
    },
    {
      id: 4,
      module: "Module 1 lorem ipsum Dolor sit amet",
      title: "lorem ipsum",
      time: "2:30",
      poster: "",
      video: video2,
    },
  ];

  return (
    <>
      <div class="module-item card">
        <div class="module-header card-header" id="module-heading-1">
          <h4 class="module-title mb-0">
            <a
              class="card-toggle module-toggle"
              href="#module-1"
              data-bs-toggle="collapse"
              data-bs-target="#module-1"
              aria-expanded="true"
              aria-controls="module-1"
            >
              <i class="module-toggle-icon fas fa-minus me-2"></i>
              Module 1 - Lorem Ipsum Dolor Sit Amet
            </a>
          </h4>
        </div>

        <div
          id="module-1"
          class="module-content collapse show"
          aria-labelledby="module-heading-1"
        >
          <div class="card-body p-0">
            {video &&
              video.map((v, index) => {
                return (
                  <div class="module-sub-item p-3 pointer" key={index}>
                    <div
                      class="row justify-content-between"
                      style={{ cursor: "pointer" }}
                    >
                      <div class="col-9">
                        <span class="theme-text-secondary me-2">
                          {1}.{index + 1}
                        </span>
                        <Link
                          to={`/course/playList?video=${v.video}`}
                          class="video-play-trigger "
                          data-bs-toggle="modal1"
                          data-bs-target="#modal-video"
                        >
                          {v.title}
                        </Link>
                        <span class="badge bg-primary ms-2">Preview</span>
                      </div>
                      <div class="col-3 text-end extra-info">{v.time}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayListCard;
