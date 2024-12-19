import { BloodSugarWriteProps } from "../model/bloodSugarModel";
import { BloodSugarUnit } from "../types/bloodSugarUnit";

interface BloodSugarReadEntity {
  uid: string;
  value: number;
  unit: BloodSugarUnit;
  recordedAt: string;
  recordedDate: string;
  memo: string;
}

interface BloodSugarWriteEntity {
  value?: number;
  unit?: BloodSugarUnit;
  recordedAt?: string;
  recordedDate?: string;
  memo?: string;
}

const writePropsToEntity = (props: BloodSugarWriteProps): BloodSugarWriteEntity => {
  return {
    value: props.value,
    unit: props.unit,
    recordedAt: props.recordedAt,
    recordedDate: props.recordedDate,
    memo: props.memo,
  };
};

export type { BloodSugarReadEntity, BloodSugarWriteEntity };
export { writePropsToEntity };