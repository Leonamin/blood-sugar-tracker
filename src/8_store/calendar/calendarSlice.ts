import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  selectedDay: string;
  focusedDay: string;
}

const initialState: CalendarState = {
  selectedDay: new Date().toISOString(),
  focusedDay: new Date().toISOString(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDay: (state, action: PayloadAction<Date>) => {
      state.selectedDay = action.payload.toISOString();
    },
    setFocusedDay: (state, action: PayloadAction<Date>) => {
      state.focusedDay = action.payload.toISOString();
    },
  },
});

export const { setSelectedDay, setFocusedDay } = calendarSlice.actions;
export default calendarSlice.reducer;