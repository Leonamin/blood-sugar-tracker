import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  selectedDay: Date;
  focusedDay: Date;
}

const initialState: CalendarState = {
  selectedDay: new Date(),
  focusedDay: new Date(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDay: (state, action: PayloadAction<Date>) => {
      state.selectedDay = action.payload;
    },
    setFocusedDay: (state, action: PayloadAction<Date>) => {
      state.focusedDay = action.payload;
    },
  },
});

export const { setSelectedDay, setFocusedDay } = calendarSlice.actions;
export default calendarSlice.reducer;