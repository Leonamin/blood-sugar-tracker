const UnixTimestamp = {
  /**
   * UnixTimestamp(ex 1735979410)를 Date 객체로 반환
   * @param timestamp 
   * @returns Date
   */
  toDate: (timestamp: number): Date => new Date(timestamp * 1000),
  
  /**
   * UnixTimestamp(ex "1735979410")같은 형식으로 들어온 문자열을 Date 객체로 반환
   * @param timestampString ex) 1735979410
   * @returns Date
   */
  fromStringToDate: (timestampString: string): Date => new Date(parseInt(timestampString) * 1000),
  fromDate: (date: Date): number => Math.floor(date.getTime() / 1000),
  // UnixTimestamp 문자열을 받아서 
  now: (): number => Math.floor((new Date()).getTime() / 1000),

  toStartUnixTimestamp: (date: Date): number => {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return UnixTimestamp.fromDate(startOfDay);
  },
  toEndUnixTimestamp: (date: Date): number => {
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    return UnixTimestamp.fromDate(endOfDay);
  },
  toUnixTimestampRange: (from: Date, to: Date): UnixTimestampRange => {
    return {
      from: UnixTimestamp.toStartUnixTimestamp(from),
      to: UnixTimestamp.toEndUnixTimestamp(to),
    };
  },
};

interface UnixTimestampRange {
  from: number;
  to: number;
}

export type { UnixTimestampRange };

export {
  UnixTimestamp,
};


