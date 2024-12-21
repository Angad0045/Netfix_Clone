import { useEffect } from "react";
import { API_OPTIONS } from "../Utilise/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedTvshows } from "../Utilise/tvshowsSlice";

const useTopRatedTvshows = () => {
  const dispatch = useDispatch();

  const getTopRatedTvshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTvshows(json.results));
  };

  useEffect(() => {
    getTopRatedTvshows();
  }, []);
};

export default useTopRatedTvshows;
