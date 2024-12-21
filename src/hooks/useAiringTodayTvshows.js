import { useEffect } from "react";
import { API_OPTIONS } from "../Utilise/Constants";
import { useDispatch } from "react-redux";
import { addAiringTodayTvshows } from "../Utilise/tvshowsSlice";

const useAiringTodayTvshows = () => {
  const dispatch = useDispatch();

  const getAiringTodayTvshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringTodayTvshows(json.results));
  };

  useEffect(() => {
    getAiringTodayTvshows();
  }, []);
};
export default useAiringTodayTvshows;
