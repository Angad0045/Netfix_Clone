import React from "react";
import Header from "./Header";
import Video_Container from "./Video_Container";
import Secondary_Container from "./Secondary_Container";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvshows from "../hooks/useTrendingTvshows";
import usePopularTvshows from "../hooks/usePopularTvshows";
import useTopRatedTvshows from "../hooks/useTopRatedTvshows";
import useAiringTodayTvshows from "../hooks/useAiringTodayTvshows";
import useOnTheAirTvshows from "../hooks/useOnTheAirTvshows";
import GPT_Search_Page from "./GPT_Search_Page";
import { useSelector } from "react-redux";

const Browse_Page = () => {
  const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTrendingTvshows();
  usePopularTvshows();
  useTopRatedTvshows();
  useAiringTodayTvshows();
  useOnTheAirTvshows();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPT_Search_Page />
      ) : (
        <>
          <Video_Container />
          <Secondary_Container />
        </>
      )}
    </div>
  );
};

export default Browse_Page;
