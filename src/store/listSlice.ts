import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListItem {
  id: number;
  text: string;
}

interface ListState {
  items: ListItem[];
}

const initialState: ListState = {
  items: [
    { id: 1, text: "초기값 첫번째" },
    { id: 2, text: "초기값 두번째" },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
