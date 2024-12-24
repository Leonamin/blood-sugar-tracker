import { BloodSugarUnit } from "../types/bloodSugarUnit";
import { UnixTimestamp } from "../types/unixtimestamp";
/**
 * 혈당 모델 속성 인터페이스
 * @property uid - 고유 식별자
 * @property value - 혈당 수치 
 * @property unit - 혈당 단위 (mg/dL 또는 mmol/L)
 * @property recordedAt - 기록 시간 (UnixTimestamp)
 * @property recordedDate - 기록 날짜 (YYYY-MM-DD)
 * @property memoUid - 연결된 메모 ID (선택사항)
 */
interface BloodSugarModelProps {
  uid: string;
  value: number; 
  unit: BloodSugarUnit;
  recordedAt: UnixTimestamp;
  recordedDate: string;
  memo?: string;
}

/**
 * 혈당 모델 클래스
 * 혈당 데이터를 관리하고 단위 변환 기능을 제공합니다.
 */
class BloodSugarModel {
  private readonly MGDL_TO_MMOL_RATIO = 18;
  
  readonly uid: string;
  readonly value: number;
  readonly unit: BloodSugarUnit;
  readonly recordedAt: UnixTimestamp;
  readonly recordedDate: string;
  readonly memo: string;

  constructor(props: BloodSugarModelProps) {
    this.uid = props.uid;
    this.value = props.value;
    this.unit = props.unit;
    this.recordedAt = props.recordedAt;
    this.recordedDate = props.recordedDate;
    this.memo = props.memo;
  }

  /**
   * 혈당 수치를 mmol/L 단위로 변환하여 반환
   */
  getMmolValue(): number {
    return this.unit === "mg/dL" 
      ? this.value / this.MGDL_TO_MMOL_RATIO 
      : this.value;
  }

  /**
   * 혈당 수치를 mg/dL 단위로 변환하여 반환
   */
  getMgdlValue(): number {
    return this.unit === "mmol/L"
      ? this.value * this.MGDL_TO_MMOL_RATIO
      : this.value;
  }
}

interface BloodSugarWriteProps {
  value?: number;
  unit?: BloodSugarUnit;
  recordedAt?: string;
  recordedDate?: string;
  memo?: string;
}

export default BloodSugarModel;
export type { BloodSugarWriteProps };