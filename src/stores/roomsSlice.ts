import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type Room from "../types/room";
import { getRooms } from "../utils/icsApiHelpers";

const fetchRooms = createAsyncThunk("rooms/fetchAll", async () => {
  const resp = await getRooms();
  return resp;
});

interface RoomsState {
  rooms: Room[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RoomsState = {
  rooms: [],
  loading: "idle",
};

const roomsSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
  },
});

const { reducer } = roomsSlice;

export default reducer;
export { fetchRooms };
