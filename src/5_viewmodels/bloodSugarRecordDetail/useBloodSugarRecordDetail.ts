import { useDispatch, useSelector } from 'react-redux';
import { BloodSugarService } from "@/2_services/bloodSugarService";
import { addRecord, deleteRecordByUid, setLoading } from '@/8_store/bloodSugar/bloodSugarSlice';
import { RootState } from '@/8_store/store';
import { BloodSugarReadEntity } from "@/0_model/entity/bloodSugarEntity";
import BloodSugarModel, { BloodSugarWriteProps } from '@/0_model/model/bloodSugarModel';
import { useState } from 'react';

const bloodSugarService = new BloodSugarService();

export function useBloodSugarRecordDetail(uid: string) {
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state: RootState) => state.bloodSugarRecords);

  const fetchRecordDetail = async (uid: string) => {
    dispatch(setLoading(true));
    try {
      const record = await bloodSugarService.getBloodSugar(uid);
      dispatch(addRecord(BloodSugarReadEntity.toModel(record)));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const updateBloodSugar = async (uid: string, data: BloodSugarWriteProps) => {
    await bloodSugarService.updateBloodSugar(uid, data);
  }

  const deleteBloodSugar = async (uid: string): Promise<boolean> => {
    try {
      await bloodSugarService.deleteBloodSugar(uid);
      dispatch(deleteRecordByUid(uid));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return {
    recordDetail: records.find(record => record.uid === uid),
    fetchRecordDetail,
    updateBloodSugar,
    deleteBloodSugar,
  }
}