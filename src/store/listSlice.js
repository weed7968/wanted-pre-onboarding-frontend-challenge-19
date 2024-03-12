import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: [
    { id: 1, text: "초기값 첫번째" },
    { id: 2, text: "초기값 두번째" },
  ],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
