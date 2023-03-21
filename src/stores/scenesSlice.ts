import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type Scene from "../types/scene";
import { getScenes } from "../utils/icsApiHelpers";

const fetchScenes = createAsyncThunk("scenes/fetchAll", async () => {
  const resp = await getScenes();
  return resp;
});

interface ScenesState {
  scenes: Scene[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ScenesState = {
  scenes: [],
  loading: "idle",
};

const scenesSlice = createSlice({
  name: "scenes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScenes.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.scenes = action.payload;
      })
      .addCase(fetchScenes.pending, (state, action) => {
        state.loading = "pending";
      });
  },
});

const { reducer } = scenesSlice;

export default reducer;
export { fetchScenes };
