import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import BloodSugarModel, {
  deserializeBloodSugarWriteProps,
  serializeBloodSugar,
  SerializedBloodSugarModel,
  SerializedBloodSugarWriteProps,
} from "@/0_model/model/bloodSugarModel";
import { bloodSugarService } from "@/2_services/bloodSugarService";

interface BloodSugarState {
  records: SerializedBloodSugarModel[];
  loading: boolean;
  currentLoadedFrom: string | null;
  currentLoadedTo: string | null;
}

const initialState: BloodSugarState = {
  records: [],
  loading: false,
  currentLoadedFrom: null,
  currentLoadedTo: null,
};

const createBsRecord = createAsyncThunk(
  "bloodSugar/createRecord",
  async (data: SerializedBloodSugarWriteProps, { dispatch }) => {
    const response = await bloodSugarService.createBloodSugar(
      deserializeBloodSugarWriteProps(data)
    );
    if (response.success) {
      dispatch(addRecord(response.data));
    }
  }
);

const updateBsRecordByUid = createAsyncThunk<
  void,
  {
    uid: string;
    data: SerializedBloodSugarWriteProps;
  }
>("bloodSugar/updateRecordByUid", async (prop, { dispatch }) => {
  const response = await bloodSugarService.updateBloodSugar(
    prop.uid,
    deserializeBloodSugarWriteProps(prop.data)
  );
  if (response.success) {
    dispatch(updateRecordByUid(response.data));
  }
});

const deleteBsRecordByUid = createAsyncThunk<void, string>(
  "bloodSugar/deleteRecordByUid",
  async (uid, { dispatch }) => {
    const response = await bloodSugarService.deleteBloodSugar(uid);
    if (response.success) {
      dispatch(deleteRecordByUid(uid));
    }
  }
);

const fetchBsRecords = createAsyncThunk<
  SerializedBloodSugarModel[],
  { from: Date; to: Date }
>(
  "bloodSugar/fetchRecords",
  async (range: {
    from: Date;
    to: Date;
  }): Promise<SerializedBloodSugarModel[]> => {
    const response = await bloodSugarService.getBloodSugarByRange(
      range.from,
      range.to
    );
    if (response.success) {
      return response.data.map((record) => serializeBloodSugar(record));
    } else {
      throw new Error(response.error);
    }
  }
);

const fetchBsRecordByUid = createAsyncThunk<BloodSugarModel, string>(
  "bloodSugar/fetchRecordByUid",
  async (uid) => {
    const response = await bloodSugarService.getBloodSugar(uid);
    return response.data;
  }
);

export const bloodSugarSlice = createSlice({
  name: "bloodSugar",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    /**
     * Service에서 생성된 데이터를 추가하는 액션
     * 외부에서 사용될 일 없음
     * @param state
     * @param action
     */
    addRecord: (state, action: PayloadAction<BloodSugarModel>) => {
      state.records.push(serializeBloodSugar(action.payload));
    },
    /**
     * Service에서 삭제된 데이터를 삭제하는 액션
     * 외부에서 사용될 일 없음
     * @param state
     * @param action
     */
    deleteRecordByUid: (state, action: PayloadAction<string>) => {
      state.records = state.records.filter(
        (record) => record.uid !== action.payload
      );
    },
    /**
     * Service에서 업데이트된 데이터를 업데이트하는 액션
     * 외부에서 사용될 일 없음
     * @param state
     * @param action
     */
    updateRecordByUid: (state, action: PayloadAction<BloodSugarModel>) => {
      const index = state.records.findIndex(
        (record) => record.uid === action.payload.uid
      );
      if (index !== -1) {
        state.records[index] = serializeBloodSugar(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBsRecords.fulfilled, (state, action) => {
      // 새로운 데이터의 uid 목록 생성
      const newUids = new Set(action.payload.map((record) => record.uid));

      // 기존 데이터 중 새로운 데이터와 중복되지 않는 것만 필터링
      const filteredExisting = state.records.filter(
        (record) => !newUids.has(record.uid)
      );

      // 기존 데이터와 새로운 데이터 합치기
      state.records = [...filteredExisting, ...action.payload];
      state.records.sort(
        (a, b) =>
          new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
      );

      const calledFrom = action.meta.arg.from;
      const calledTo = action.meta.arg.to;

      const isInitialLoading =
        !state.currentLoadedFrom && !state.currentLoadedTo;
      const isCalledFromOutOfRange =
        calledFrom < new Date(state.currentLoadedFrom);
      const isCalledToOutOfRange = calledTo > new Date(state.currentLoadedTo);

      if (isInitialLoading || isCalledFromOutOfRange) {
        state.currentLoadedFrom = calledFrom.toISOString();
        state.currentLoadedTo = calledTo.toISOString();
      } else if (isCalledToOutOfRange) {
        state.currentLoadedTo = calledTo.toISOString();
      } else if (isCalledFromOutOfRange) {
        state.currentLoadedFrom = calledFrom.toISOString();
      }
    });
    builder.addCase(fetchBsRecordByUid.fulfilled, (state, action) => {
      const newUid = action.payload.uid;
      const existingIndex = state.records.findIndex(
        (record) => record.uid === newUid
      );
      if (existingIndex !== -1) {
        state.records[existingIndex] = serializeBloodSugar(action.payload);
      } else {
        state.records.push(serializeBloodSugar(action.payload));
      }
      state.records.sort(
        (a, b) =>
          new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
      );
    });
  },
});

export const { setLoading, addRecord, deleteRecordByUid, updateRecordByUid } =
  bloodSugarSlice.actions;
export {
  createBsRecord,
  updateBsRecordByUid,
  deleteBsRecordByUid,
  fetchBsRecords,
  fetchBsRecordByUid,
};
export default bloodSugarSlice.reducer;
