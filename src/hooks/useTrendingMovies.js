import { useEffect } from "react";
import { API_OPTIONS } from "../Utilise/Constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../Utilise/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
