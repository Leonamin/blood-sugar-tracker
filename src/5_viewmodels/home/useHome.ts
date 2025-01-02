// viewmodels/useBloodSugar.js
import { useSelector } from "react-redux";
import { RootState } from "@/8_store/store";
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";
import {
  createBsRecord,
  deleteBsRecordByUid,
  fetchBsRecords,
} from "@/8_store/bloodSugar/bloodSugarSlice";
import { useAppDispatch } from "@/3_hook/useAppDispatch";

export function useHome() {
  const dispatch = useAppDispatch();
  const { records } = useSelector(
    (state: RootState) => state.bloodSugarRecords
  );

  const fetchBloodSugars = async (query: UnixTimestampRange) => {
    const from = new Date(query.from);
    const to = new Date(query.to);

    dispatch(fetchBsRecords({ from, to }));
    records.sort(
      (a, b) =>
        new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
    );
  };

  const addBloodSugar = async (value: number, memo?: string) => {
    dispatch(
      createBsRecord({
        value,
        unit: "mg/dL",
        recordedAt: new Date().toISOString(),
        recordedDate: new Date().toLocaleDateString("en-CA"),
        memo,
      })
    );
  };

  const deleteBloodSugar = async (id: string) => {
    dispatch(deleteBsRecordByUid(id));
  };

  return {
    bloodSugars: records,
    fetchBloodSugars,
    addBloodSugar,
    deleteBloodSugar,
  };
}
