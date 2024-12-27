import { BloodSugarReadEntity } from "@/0_model/entity/bloodSugarEntity";
import BloodSugarModel, {  BloodSugarWriteProps } from "@/0_model/model/bloodSugarModel";
import { BloodSugarService } from "@/2_services/bloodSugarService";
import { useState } from "react";

const bloodSugarService = new BloodSugarService();

export function useBloodSugarRecordDetail() {
  const [recordDetail, setRecordDetail] = useState<BloodSugarModel | null>(null);

  const fetchRecordDetail = async (uid: string) => {
    const record = await bloodSugarService.getBloodSugar(uid);
    setRecordDetail(BloodSugarReadEntity.toModel(record));
  }

  const updateBloodSugar = async (uid: string, data: BloodSugarWriteProps) => {
    await bloodSugarService.updateBloodSugar(uid, data);
  }

  const deleteBloodSugar = async (id: string) => {
    await bloodSugarService.deleteBloodSugar(id);
  }

  return {
    recordDetail,
    fetchRecordDetail,
    updateBloodSugar,
    deleteBloodSugar,
  }
}