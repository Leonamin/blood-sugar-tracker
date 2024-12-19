interface MemoReadEntity {
  uid: string;
  /** 최대 1000자까지 입력 가능합니다 */
  content: string & { maxLength: 1000 };
  recordedAt: string;
  recordedDate: string;
  bloodSugarUid: string | undefined;
}

interface MemoWriteEntity {
  content?: string;
  recordedAt?: string;
  recordedDate?: string;
  bloodSugarUid?: string;
}

export type { MemoReadEntity, MemoWriteEntity };
