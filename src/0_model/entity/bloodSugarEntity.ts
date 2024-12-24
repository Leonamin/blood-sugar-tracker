import BloodSugarModel, {  BloodSugarWriteProps } from "../model/bloodSugarModel";
import { BloodSugarUnit } from "../types/bloodSugarUnit";
import { dateToUnixTimestamp, UnixTimestamp, unixTimestampToDate } from "../types/unixtimestamp";

interface BloodSugarReadEntity {
  uid: string;
  value: number;
  unit: BloodSugarUnit;
  recordedAt: string;
  recordedDate: string;
  memo: string;
}

namespace BloodSugarReadEntity {
  export const toModel = (entity: BloodSugarReadEntity): BloodSugarModel => {
    return new BloodSugarModel({
      uid: entity.uid,
      value: entity.value,
      unit: entity.unit,
      recordedAt: UnixTimestamp.toUnixTimestamp(entity.recordedAt),
      recordedDate: entity.recordedDate,
      memo: entity.memo,
    });
  }
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

export type { BloodSugarWriteEntity };
export { BloodSugarReadEntity, writePropsToEntity };