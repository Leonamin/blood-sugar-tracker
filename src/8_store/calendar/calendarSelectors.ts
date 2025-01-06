import { RootState } from "../store";

export const selectSelectedDay = (state: RootState) => new Date(state.calendar.selectedDay);
export const selectFocusedDay = (state: RootState) => new Date(state.calendar.focusedDay);