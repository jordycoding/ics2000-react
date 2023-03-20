import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    login: loginReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
