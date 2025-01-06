import BloodSugarModel, {
  BloodSugarWriteProps,
} from "../model/bloodSugarModel";
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
    return {
      uid: entity.uid,
      value: entity.value,
      unit: entity.unit,
      category: BloodSugarCategoryUtils.fromString(entity.category),
      recordedAt: UnixTimestamp.fromStringToDate(entity.recordedAt),
      recordedDate: entity.recordedDate,
      memo: entity.memo,
    };
  },
};

/**
 * 데이터베이스에 저장할 때 사용하는 엔티티
 *
 * @value 수치 ex) 100
 * @unit 단위 ex) mg/dL
 * @category 카테고리 ex) fasting, postMeal
 * @recordedAt 기록 시간 ex) 1735916400
 * @recordedDate 기록 날짜 ex) 20240101
 * @memo 메모 ex) 아침에 먹은 음식
 */
interface BloodSugarWriteEntity {
  value?: number;
  unit?: BloodSugarUnit;
  category?: string;
  recordedAt?: string;
  recordedDate?: string;
  memo?: string;
}

const writePropsToEntity = (
  props: BloodSugarWriteProps
): BloodSugarWriteEntity => {
  return {
    value: props.value,
    unit: props.unit,
    category: props.category,
    recordedAt: props.recordedAt
      ? UnixTimestamp.fromDate(props.recordedAt).toString()
      : undefined,
    recordedDate: props.recordedDate,
    memo: props.memo,
  };
};

export type { BloodSugarWriteEntity };
export { BloodSugarReadEntityUtils, writePropsToEntity };
