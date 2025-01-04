// viewmodels/useBloodSugar.js
import { useSelector } from "react-redux";
import { UnixTimestamp, UnixTimestampRange } from "@/0_model/types/unixtimestamp";
import {
  createBsRecord,
  deleteBsRecordByUid,
  fetchBsRecords,
} from "@/8_store/bloodSugar/bloodSugarSlice";
import { useAppDispatch } from "@/3_hook/useAppDispatch";
import { selectBloodSugarModelsByDate } from '@/8_store/bloodSugar/bloodSugarSelectors';
import { BloodSugarCategory } from "@/0_model/types/bloodSugarCategory";
import DateUtils from "@/7_utils/dateUtils";

export function useHome() {
  const dispatch = useAppDispatch();
  const today = new Date(); // 현재 날짜
  
  const bloodSugars = useSelector(state => 
    selectBloodSugarModelsByDate(state, today)
  );

  const fetchBloodSugars = async (query: UnixTimestampRange) => {
    const from = UnixTimestamp.toDate(query.from);
    const to = UnixTimestamp.toDate(query.to);

    dispatch(fetchBsRecords({ from, to }));
    bloodSugars.sort(
      (a, b) =>
        b.recordedAt.getTime() - a.recordedAt.getTime()
    );
  };

  const addBloodSugar = async (value: number, category: BloodSugarCategory, memo?: string) => {
    dispatch(
      createBsRecord({
        value,
        unit: "mg/dL",
        category,
        recordedAt: new Date(),
        recordedDate: DateUtils.toYMD(new Date()),
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
