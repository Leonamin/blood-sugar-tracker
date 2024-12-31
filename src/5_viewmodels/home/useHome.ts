// viewmodels/useBloodSugar.js
import { useDispatch, useSelector } from 'react-redux';
import { BloodSugarService } from "@/2_services/bloodSugarService";
import { setLoading, setRecords } from '@/8_store/bloodSugar/bloodSugarSlice';
import { RootState } from '@/8_store/store';
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";
import { BloodSugarReadEntity } from '@/0_model/entity/bloodSugarEntity';

const bloodSugarService = new BloodSugarService();

export function useHome() {
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state: RootState) => state.bloodSugarRecords);

  const fetchBloodSugars = async (query: UnixTimestampRange) => {
    dispatch(setLoading(true));
    try {
      const data = await bloodSugarService.getBloodSugarByRange(
        new Date(query.from),
        new Date(query.to),
      );
      data.sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
      dispatch(setRecords(data.map(BloodSugarReadEntity.toModel)));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const addBloodSugar = async (value: number, memo?: string) => {
    dispatch(setLoading(true));
    try {
      await bloodSugarService.createBloodSugar({
        value,
        unit: "mg/dL",
        recordedAt: new Date().toISOString(),
        recordedDate: new Date().toLocaleDateString('en-CA'),
        memo,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const deleteBloodSugar = async (id: string) => {
    dispatch(setLoading(true));
    await bloodSugarService.deleteBloodSugar(id);
    dispatch(setLoading(false));
  }

  return { 
    bloodSugars: records, 
    loading, 
    fetchBloodSugars,
    addBloodSugar,
    deleteBloodSugar
  };
}
