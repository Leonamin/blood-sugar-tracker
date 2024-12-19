interface MemoModelProps {
  uid: string;
  /** 최대 1000자까지 입력 가능합니다 */
  content: string & { maxLength: 1000 };
  recordedAt: string;
  recordedDate: string;
  bloodSugarUid: string | undefined;
}

class MemoModel {
  readonly uid: string;
  readonly content: string;
  readonly recordedAt: string;
  readonly recordedDate: string;
  readonly bloodSugarUid?: string;

  constructor(props: MemoModelProps) {
    this.uid = props.uid;
    this.content = props.content;
    this.recordedAt = props.recordedAt;
    this.recordedDate = props.recordedDate;
    this.bloodSugarUid = props.bloodSugarUid;
  }
}

interface MemoWriteProps {
  content?: string;
  recordedAt?: string;
  recordedDate?: string;
  bloodSugarUid?: string;
}

export type { MemoModelProps, MemoWriteProps };
