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
import { selectBloodSugarModelsByDate } from '@/8_store/bloodSugar/bloodSugarSelectors';
import { BloodSugarCategory } from "@/0_model/types/bloodSugarCategory";

export function useHome() {
  const dispatch = useAppDispatch();
  const today = new Date(); // 현재 날짜
  
  const bloodSugars = useSelector(state => 
    selectBloodSugarModelsByDate(state, today)
  );

  const fetchBloodSugars = async (query: UnixTimestampRange) => {
    const from = new Date(query.from);
    const to = new Date(query.to);

    dispatch(fetchBsRecords({ from, to }));
    bloodSugars.sort(
      (a, b) =>
        new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
    );
  };

  const addBloodSugar = async (value: number, category: BloodSugarCategory, memo?: string) => {
    dispatch(
      createBsRecord({
        value,
        unit: "mg/dL",
        category,
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
    bloodSugars,
    fetchBloodSugars,
    addBloodSugar,
    deleteBloodSugar,
  };
}
