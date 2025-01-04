import BloodSugarModel, {  BloodSugarWriteProps } from "../model/bloodSugarModel";
import { BloodSugarCategoryUtils } from "../types/bloodSugarCategory";
import { BloodSugarUnit } from "../types/bloodSugarUnit";
import { UnixTimestamp } from "../types/unixtimestamp";

export interface BloodSugarReadEntity {
  uid: string;
  value: number;
  unit: BloodSugarUnit;
  category: string;
  recordedAt: string;
  recordedDate: string;
  memo: string;
}

const BloodSugarReadEntityUtils = {
  toModel(entity: BloodSugarReadEntity): BloodSugarModel {
    return new BloodSugarModel({
      uid: entity.uid,
      value: entity.value,
      unit: entity.unit,
      category: BloodSugarCategoryUtils.fromString(entity.category),
      recordedAt: UnixTimestamp.fromStringToDate(entity.recordedAt),
      recordedDate: entity.recordedDate,
      memo: entity.memo,
    });
  }
}

interface BloodSugarWriteEntity {
  value?: number;
  unit?: BloodSugarUnit;
  category?: string;
  recordedAt?: string;
  recordedDate?: string;
  memo?: string;
}

const writePropsToEntity = (props: BloodSugarWriteProps): BloodSugarWriteEntity => {
  return {
    value: props.value,
    unit: props.unit,
    category: props.category,
    recordedAt: props.recordedAt,
    recordedDate: props.recordedDate,
    memo: props.memo,
  };
};

export type { BloodSugarWriteEntity };
export { BloodSugarReadEntityUtils, writePropsToEntity };
