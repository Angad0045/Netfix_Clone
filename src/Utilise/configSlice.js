import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    Language: "English",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.Language = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
