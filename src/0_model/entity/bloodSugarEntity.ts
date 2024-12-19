import { BloodSugarWriteProps } from "../model/bloodSugarModel";
import { BloodSugarUnit } from "../types/bloodSugarUnit";

interface BloodSugarReadEntity {
  uid: string;
  value: number;
  unit: BloodSugarUnit;
  recordedAt: string;
  recordedDate: string;
  memoUid: string | undefined;
}

interface BloodSugarWriteEntity {
  value?: number;
  unit?: BloodSugarUnit;
  recordedAt?: string;
  recordedDate?: string;
  memoUid?: string;
}

const writePropsToEntity = (props: BloodSugarWriteProps): BloodSugarWriteEntity => {
  return {
    value: props.value,
    unit: props.unit,
    recordedAt: props.recordedAt,
    recordedDate: props.recordedDate,
    memoUid: props.memoUid,
  };
};

export type { BloodSugarReadEntity, BloodSugarWriteEntity };
export { writePropsToEntity };