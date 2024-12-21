import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvshowsReducer from "./tvshowsSlice";
import gptSearchReducer from "./gptsearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvshows: tvshowsReducer,
    gptSearch: gptSearchReducer,
    config: configReducer,
  },
});

export default appStore;
