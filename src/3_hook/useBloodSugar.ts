import { useCallback } from 'react';
import { 
  createBsRecord, 
  updateBsRecordByUid, 
  deleteBsRecordByUid,
  fetchBsRecords 
} from '@/8_store/bloodSugar/bloodSugarSlice';
import { 
  selectBloodSugarModelsByDate,
  selectBloodSugarModelById, 
  selectAllBloodSugarModels
} from '@/8_store/bloodSugar/bloodSugarSelectors';
import { useAppDispatch } from '@/3_hook/useAppDispatch';
import { useAppSelector } from '@/3_hook/useAppSelector';
import { BloodSugarWriteProps, serializeBloodSugarWriteProps, SerializedBloodSugarWriteProps } from '@/0_model/model/bloodSugarModel';
import DateUtils from '@/7_utils/dateUtils';

export function useBloodSugar() {
  const dispatch = useAppDispatch();
  const { loading, currentLoadedFrom, currentLoadedTo } = useAppSelector(
    state => state.bloodSugarRecords
  );

  // 데이터 로딩 로직
  const loadBloodSugarData = useCallback(async (from: Date, to: Date) => {
    if (loading) return;

    const isInitialLoading = !currentLoadedFrom && !currentLoadedTo;
    const isWithinLoadedRange = currentLoadedFrom && currentLoadedTo && 
      from >= new Date(currentLoadedFrom) && to <= new Date(currentLoadedTo);

    if (isWithinLoadedRange && !isInitialLoading) return;

    await dispatch(fetchBsRecords({ from, to }));
  }, [dispatch, currentLoadedFrom, currentLoadedTo, loading]);

  const loadMonthlyRecords = async (date: Date) => {
    const startDate = DateUtils.toStartOfMonth(date);
    const endDate = DateUtils.toEndOfMonth(date);
    await loadBloodSugarData(startDate, endDate);
  }

  // CRUD 작업
  const createBloodSugar = async (data: BloodSugarWriteProps) => {
    try {
      const newData = {
        ...data,
        recordedDate: DateUtils.toYMD(data.recordedAt),
      }

      await dispatch(createBsRecord(serializeBloodSugarWriteProps(newData)));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateBloodSugar = async (uid: string, data: BloodSugarWriteProps) => {
    try {
      await dispatch(updateBsRecordByUid({ 
        uid, 
        data: serializeBloodSugarWriteProps(data) 
      }));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const deleteBloodSugar = async (uid: string) => {
    try {
      await dispatch(deleteBsRecordByUid(uid));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // 조회 함수들
  const getAllBloodSugars = () => {
    return useAppSelector(state => selectAllBloodSugarModels(state));
  };

  const getBloodSugarsByDate = (date: Date) => {
    return useAppSelector(state => selectBloodSugarModelsByDate(state, date));
  };

  const getBloodSugarById = (id: string) => {
    return useAppSelector(state => selectBloodSugarModelById(state, id));
  };

  return {
    loadBloodSugarData,
    loadMonthlyRecords,
    createBloodSugar,
    updateBloodSugar,
    deleteBloodSugar,
    getAllBloodSugars,
    getBloodSugarsByDate,
    getBloodSugarById,
    loading
  };
}