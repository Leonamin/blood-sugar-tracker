import { useSelector } from "react-redux";
import {
  BloodSugarWriteProps,
} from "@/0_model/model/bloodSugarModel";
import {
  createBsRecord,
  deleteBsRecordByUid,
  updateBsRecordByUid,
} from "@/8_store/bloodSugar/bloodSugarSlice";
import { useAppDispatch } from "@/3_hook/useAppDispatch";
import { selectBloodSugarModelById } from '@/8_store/bloodSugar/bloodSugarSelectors';

export function useBloodSugarRecordDetail(uid: string) {
  const dispatch = useAppDispatch();
  
  const recordDetail = useSelector(state => 
    selectBloodSugarModelById(state, uid)
  );

  const createBloodSugar = async (data: BloodSugarWriteProps): Promise<boolean> => {
    try {
      dispatch(createBsRecord(data));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateBloodSugar = async (uid: string, data: BloodSugarWriteProps): Promise<boolean> => {
    try {
      dispatch(updateBsRecordByUid({ uid, data }));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
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
    recordDetail: recordDetail,
    createBloodSugar,
    updateBloodSugar,
    deleteBloodSugar,
  };
}
