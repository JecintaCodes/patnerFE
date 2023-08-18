import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
};

const globalState = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    ontoggle: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { signin, logOut, ontoggle } = globalState.actions;

export default globalState.reducer;
