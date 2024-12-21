import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utilise/Constants";
import { addTrailerVideo } from "../Utilise/moviesSlice";
import { useEffect } from "react";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const sortTrailers = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = sortTrailers.length ? sortTrailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useBackgroundVideo;
