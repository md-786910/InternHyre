import React, { useEffect, useState } from "react";
import "video-react/dist/video-react.css";
import Vimeo from "@u-wave/react-vimeo";
import { useLocation } from "react-router-dom";
// import {
//   Player,
//   LoadingSpinner,
//   ControlBar,
//   ReplayControl,
//   ForwardControl,
//   CurrentTimeDisplay,
//   TimeDivider,
//   PlaybackRateMenuButton,
//   VolumeMenuButton,
// } from "video-react";
import PlayListCard from "./PlayListCard";

function PlayList() {
  const video1 = useLocation().search.slice(7);
  const [video2, setVideo] = useState(video1);

  const VideoComponent = () => {
    return (
      <Vimeo
        video="792914078"
        autoplay={true}
        width={1020}
        loop={true}
        responsive={true}
        pip={true}
        playsInline={true}
        showTitle={false}
        className="vimeo"
      />
    );
  };
  useEffect(() => {
    setVideo(video1);
  }, [video2, video1]);

  return (
    <>
      <div
        className="container1 mt-0 "
        style={{
          background: "linear-gradient(to right, black 0%, black 100%)",
        }}
      >
        <div className="row p-2">
          <div className=" col-sm-8">
            <VideoComponent />
          </div>
          <div
            className="playList col-sm-4"
            style={{
              height: "80vh",
              overflowY: "auto",
            }}
          >
            <div className="AllVide">
              <div className="accordion module-accordion" id="module-accordion">
                <PlayListCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayList;
