import React from "react";

const Movie_Description = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[23%] px-20 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="font-extrabold text-3xl m-3">{title}</h1>
      <p className="w-[40%] m-3 font-semibold text-justify line-clamp-3">
        {overview}
      </p>
      <div>
        <button className="bg-white text-black m-3 py-2 px-8 rounded-md font-bold">
          Play
        </button>
        <button className="bg-gray-500 text-white opacity-50 m-3 py-2 px-8 rounded-md font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Movie_Description;
