import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    //if the video is playing
    //stop it
    //otherwise if its not playing
    //play it 

    if (playing) {
      videoRef.current.play();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <iframe
      onClick={handleVideoPress}
        className="videoPlayer"
        loop
        ref={videoRef}
        width="660"
        height="750"
        src="https://www.youtube.com/embed/-Ti1tjYmg2s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <VideoFooter />
    </div>
  );
}

export default Video;
