import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DataState {
  token: string;
  userId: string;
}

const initialState: DataState = {
  token: "",
  userId: "",
};

export const userDataSlice = createSlice({
  name: "userCredentials",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setToken, setId } = userDataSlice.actions;
export default userDataSlice.reducer;
