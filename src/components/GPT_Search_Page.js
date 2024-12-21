import React from "react";
import GPT_Search_Bar from "./GPT_Search_Bar";
import GPT_Movie_Suggestions from "./GPT_Movie_Suggestions";
import Bg_Image from "../Utilise/Bg_Image";

const GPT_Search_Page = () => {
  return (
    <div>
      <Bg_Image />
      <GPT_Search_Bar />
      <GPT_Movie_Suggestions />
    </div>
  );
};

export default GPT_Search_Page;
