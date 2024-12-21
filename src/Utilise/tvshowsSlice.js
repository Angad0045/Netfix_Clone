import { createSlice } from "@reduxjs/toolkit";

const tvshowsSlice = createSlice({
  name: "tvshows",
  initialState: {
    trendingTvshows: null,
    topRatedTvshows: null,
    popularTvshows: null,
    airingTodayTvshows: null,
    onTheAirTvshows: null,
  },
  reducers: {
    addTrendingTvshows(state, action) {
      state.trendingTvshows = action.payload;
    },
    addTopRatedTvshows(state, action) {
      state.topRatedTvshows = action.payload;
    },
    addPopularTvshows(state, action) {
      state.popularTvshows = action.payload;
    },
    addAiringTodayTvshows(state, action) {
      state.airingTodayTvshows = action.payload;
    },
    addOnTheAirTvshows(state, action) {
      state.onTheAirTvshows = action.payload;
    },
  },
});

export const {
  addTrendingTvshows,
  addTopRatedTvshows,
  addPopularTvshows,
  addAiringTodayTvshows,
  addOnTheAirTvshows,
} = tvshowsSlice.actions;

export default tvshowsSlice.reducer;
