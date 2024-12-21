import React from "react";
import Header from "./Header";
import Video_Container from "./Video_Container";
import useTrendingTvshows from "../hooks/useTrendingTvshows";
import usePopularTvshows from "../hooks/usePopularTvshows";
import useTopRatedTvshows from "../hooks/useTopRatedTvshows";
import useAiringTodayTvshows from "../hooks/useAiringTodayTvshows";
import useOnTheAirTvshows from "../hooks/useOnTheAirTvshows";

const TV_Shows_Page = () => {
  useTrendingTvshows();
  usePopularTvshows();
  useTopRatedTvshows();
  useAiringTodayTvshows();
  useOnTheAirTvshows();

  return (
    <div>
      <Header />
      <Video_Container />
    </div>
  );
};

export default TV_Shows_Page;
