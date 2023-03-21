import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";
import loginReducer from "./loginSlice";
import scenesReducer from "./scenesSlice";

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    login: loginReducer,
    scenes: scenesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
