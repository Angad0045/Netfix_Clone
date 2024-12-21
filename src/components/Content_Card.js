import React from "react";
import { IMAGE_URL } from "../Utilise/Constants";

const Content_Card = ({ posterPath }) => {
  return (
    <div className="w-52 p-3">
      <img alt="Movie Poster" src={IMAGE_URL + posterPath} />
    </div>
  );
};

export default Content_Card;
