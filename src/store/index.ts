import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const counter1Slice = createSlice({
  name: "counter1",
  initialState: 0,
  reducers: {
    addCounter1(state) {
      return (state += 1);
    },
    minusCounter1(state) {
      return (state -= 1);
    },
  },
});

const counter2Slice = createSlice({
  name: "counter2",
  initialState: 1,
  reducers: {
    addCounter2(state, action: PayloadAction<number>) {
      return (state += action.payload);
    },
    minusCounter2(state, action: PayloadAction<number>) {
      return (state -= action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    counter1: counter1Slice.reducer,
    counter2: counter2Slice.reducer,
  },
});

export { store };
export const { addCounter1, minusCounter1 } = counter1Slice.actions;
export const { addCounter2, minusCounter2 } = counter2Slice.actions;
