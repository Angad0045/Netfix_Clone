import { useEffect } from "react";
import { API_OPTIONS } from "../Utilise/Constants";
import { useDispatch } from "react-redux";
import { addOnTheAirTvshows } from "../Utilise/tvshowsSlice";

const useOnTheAirTvshows = () => {
  const dispatch = useDispatch();

  const getOnTheAirTvshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnTheAirTvshows(json.results));
  };

  useEffect(() => {
    getOnTheAirTvshows();
  }, []);
};

export default useOnTheAirTvshows;
