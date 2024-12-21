import React from "react";
import { useSelector } from "react-redux";
import useBackgroundVideo from "../hooks/useBackgroundVideo";

const Background_Video = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useBackgroundVideo(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video relative"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
};

export default Background_Video;
