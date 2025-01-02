import { configureStore } from "@reduxjs/toolkit";
import bloodSugarSlice from "./bloodSugar/bloodSugarSlice";

const store = configureStore({
  reducer: {
    bloodSugarRecords: bloodSugarSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;