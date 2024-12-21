import React from "react";
import Background_Video from "./Background_Video";
import Movie_Description from "./Movie_Description";
import { useSelector } from "react-redux";

const Video_Container = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const backgroundMovie = movies[0];
  const { original_title, overview, id } = backgroundMovie;

  return (
    <div>
      <Movie_Description title={original_title} overview={overview} />
      <Background_Video movieId={id} />
    </div>
  );
};

export default Video_Container;
