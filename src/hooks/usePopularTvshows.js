import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utilise/Constants";
import { addPopularTvshows } from "../Utilise/tvshowsSlice";

const usePopularTvshows = () => {
  const dispatch = useDispatch();

  const getPopularTvshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTvshows(json.results));
  };

  useEffect(() => {
    getPopularTvshows();
  }, []);
};

export default usePopularTvshows;
