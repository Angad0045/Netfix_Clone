import React from "react";
import Language from "../Utilise/Language_Constants";
import { useSelector } from "react-redux";

const GPT_Search_Bar = () => {
  const langKey = useSelector((store) => store.config.Language);
  return (
    <div className="pt-52 flex justify-center">
      <form
        className="bg-black bg-opacity-70 p-4 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="px-5 py-2 mx-4 rounded-md col-span-9"
          type="text"
          placeholder={Language[langKey]?.Search_Placeholder}
        />
        <button className="bg-red-600 px-5 py-2 mx-4 rounded-md font-bold text-white col-span-3">
          {Language[langKey]?.Search_Btn}
        </button>
      </form>
    </div>
  );
};

export default GPT_Search_Bar;
