import React from "react";
import Content_Card from "./Content_Card";

const Movie_List = ({ title, movies }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white py-5 px-10">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar px-10">
        <div className="flex ">
          {movies?.map((movies) => (
            <Content_Card key={movies.id} posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie_List;
