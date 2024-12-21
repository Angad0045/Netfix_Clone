import React from "react";
import Content_Card from "./Content_Card";

const Tvshows_List = ({ title, tvshows }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white py-5 px-10">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar px-10">
        <div className="flex ">
          {tvshows?.map((tvshows) => (
            <Content_Card key={tvshows.id} posterPath={tvshows.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tvshows_List;
