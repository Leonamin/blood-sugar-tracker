import { configureStore } from "@reduxjs/toolkit";
import bloodSugarSlice from "./bloodSugar/bloodSugarSlice";
import calendarSlice from "./calendar/calendarSlice";

const store = configureStore({
  reducer: {
    bloodSugarRecords: bloodSugarSlice,
    calendar: calendarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // bloodSugar 관련 액션에서 Date 객체 사용 허용
        ignoredActionPaths: [
          "payload.*.recordedAt",
          "meta.arg.from",
          "meta.arg.to",
        ],
        // bloodSugar 스토어의 Date 객체 사용 허용
        ignoredPaths: [
          "bloodSugarRecords.records.*.recordedAt",
          "bloodSugarRecords.currentLoadedFrom",
          "bloodSugarRecords.currentLoadedTo",
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export default store;
