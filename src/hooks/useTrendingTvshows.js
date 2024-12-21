import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utilise/Constants";
import { addTrendingTvshows } from "../Utilise/tvshowsSlice";

const useTrendingTvshows = () => {
  const dispatch = useDispatch();

  const getTrendingTvshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingTvshows(json.results));
  };

  useEffect(() => {
    getTrendingTvshows();
  }, []);
};

export default useTrendingTvshows;
