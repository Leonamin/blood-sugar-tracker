import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BloodSugarModel from '@/0_model/model/bloodSugarModel';

interface BloodSugarState {
  records: BloodSugarModel[];
  loading: boolean;
}

const initialState: BloodSugarState = {
  records: [],
  loading: false,
};

export const bloodSugarSlice = createSlice({
  name: 'bloodSugar',
  initialState,
  reducers: {
    setRecords: (state, action: PayloadAction<BloodSugarModel[]>) => {
      state.records = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    addRecord: (state, action: PayloadAction<BloodSugarModel>) => {
      if (state.records.find(record => record.uid === action.payload.uid)) {
        return;
      }
      state.records.push(action.payload);
    },
    deleteRecordByUid: (state, action: PayloadAction<string>) => {
      state.records = state.records.filter(record => record.uid !== action.payload);
    },
    updateRecordByUid: (state, action: PayloadAction<BloodSugarModel>) => {
      const index = state.records.findIndex(record => record.uid === action.payload.uid);
      if (index !== -1) {
        state.records[index] = action.payload;
      }
    },
  },
});

export const { setRecords, addRecord, deleteRecordByUid, updateRecordByUid, setLoading } = bloodSugarSlice.actions;
export default bloodSugarSlice.reducer; 