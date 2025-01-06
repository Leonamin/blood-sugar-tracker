import { configureStore } from "@reduxjs/toolkit";
import bloodSugarSlice from "./bloodSugar/bloodSugarSlice";
import calendarSlice from "./calendar/calendarSlice";

const store = configureStore({
  reducer: {
    bloodSugarRecords: bloodSugarSlice,
    calendar: calendarSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export default store;