import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearch } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
