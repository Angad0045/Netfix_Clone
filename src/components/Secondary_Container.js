import React from "react";
import Movie_List from "./Movie_List";
import { useSelector } from "react-redux";
import Tvshows_List from "./Tvshows_List";

const Secondary_Container = () => {
  const movies = useSelector((store) => store.movies);
  const tvshows = useSelector((store) => store.tvshows);
  return (
    { movies, tvshows } && (
      <div className="bg-black">
        <div className="-mt-72 relative z-20">
          <Movie_List title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <Movie_List
            title={"Trending on Netfix"}
            movies={movies.trendingMovies}
          />
          <Movie_List title={"Top Rated"} movies={movies.topRatedMovies} />
          <Movie_List title={"Popular Movies"} movies={movies.popularMovies} />
          <Movie_List
            title={"Coming Soon on Netfix"}
            movies={movies.upcomingMovies}
          />
          {/* <Movie_List title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
          <Tvshows_List
            title={"Trending Tv Shows on Netfix"}
            tvshows={tvshows.trendingTvshows}
          />
          <Tvshows_List
            title={"Top Rated Tv Shows"}
            tvshows={tvshows.topRatedTvshows}
          />
          <Tvshows_List
            title={"Popular TV Shows"}
            tvshows={tvshows.popularTvshows}
          />
          <Tvshows_List
            title={"Airing Today Tv Shows"}
            tvshows={tvshows.airingTodayTvshows}
          />
          <Tvshows_List
            title={"On The Air Tv Shows"}
            tvshows={tvshows.onTheAirTvshows}
          />
        </div>
      </div>
    )
  );
};

export default Secondary_Container;
