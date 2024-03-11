import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
