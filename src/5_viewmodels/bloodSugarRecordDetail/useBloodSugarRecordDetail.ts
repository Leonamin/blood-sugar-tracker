import { useSelector } from "react-redux";
import { RootState } from "@/8_store/store";
import {
  BloodSugarWriteProps,
} from "@/0_model/model/bloodSugarModel";
import {
  deleteBsRecordByUid,
  fetchBsRecordByUid,
  updateBsRecordByUid,
} from "@/8_store/bloodSugar/bloodSugarSlice";
import { useAppDispatch } from "@/3_hook/useAppDispatch";

export function useBloodSugarRecordDetail(uid: string) {
  const dispatch = useAppDispatch();
  const { records } = useSelector(
    (state: RootState) => state.bloodSugarRecords
  );

  const fetchRecordDetail = async (uid: string) => {
    dispatch(fetchBsRecordByUid(uid));  
  };

  const updateBloodSugar = async (uid: string, data: BloodSugarWriteProps) => {
    dispatch(updateBsRecordByUid({ uid, data }));
  };

  const deleteBloodSugar = async (uid: string): Promise<boolean> => {
    try {
      dispatch(deleteBsRecordByUid(uid));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return {
    recordDetail: records.find((record) => record.uid === uid),
    fetchRecordDetail,
    updateBloodSugar,
    deleteBloodSugar,
  };
}
