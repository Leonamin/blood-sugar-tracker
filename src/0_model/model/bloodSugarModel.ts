import { BloodSugarCategory } from "../types/bloodSugarCategory";
import { BloodSugarUnit } from "../types/bloodSugarUnit";
export interface SerializedBloodSugarModel {
  uid: string;
  value: number;
  unit: BloodSugarUnit;
  category: BloodSugarCategory;
  recordedAt: string;  // ISO 문자열로 저장
  recordedDate: string;
  memo: string;
}

/**
 * 혈당 모델 클래스
 * 혈당 데이터를 관리하고 단위 변환 기능을 제공합니다.
 */
interface BloodSugarModel {
  uid: string;
  value: number;
  unit: BloodSugarUnit;
  category: BloodSugarCategory;
  recordedAt: Date;
  recordedDate: string;
  memo: string;
}

// 직렬화 함수
export const serializeBloodSugar = (model: BloodSugarModel): SerializedBloodSugarModel => ({
  ...model,
  recordedAt: model.recordedAt.toISOString()
});

// 역직렬화 함수
export const deserializeBloodSugar = (serialized: SerializedBloodSugarModel): BloodSugarModel => ({
  ...serialized,
  recordedAt: new Date(serialized.recordedAt)
});

export interface BloodSugarWriteProps {
  value?: number;
  unit?: BloodSugarUnit;
  category?: BloodSugarCategory;
  recordedAt?: Date;
  recordedDate?: string;
  memo?: string;
}

export default BloodSugarModel;
