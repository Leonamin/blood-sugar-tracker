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
    setSelectedDay: (state, action: PayloadAction<string>) => {
      state.selectedDay = action.payload;
    },
    setFocusedDay: (state, action: PayloadAction<string>) => {
      state.focusedDay = action.payload;
    },
  },
});

export const { setSelectedDay, setFocusedDay } = calendarSlice.actions;
export default calendarSlice.reducer;