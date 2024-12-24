type UnixTimestamp = number & { readonly __type: unique symbol };

interface UnixTimestampRange {
  from: UnixTimestamp;
  to: UnixTimestamp;
}

function dateToUnixTimestamp(date: Date): UnixTimestamp {
  return date.getTime() as UnixTimestamp;
}

/// 해당 날짜의 자정을 반환
function dateToStartUnixTimestamp(date: Date): UnixTimestamp {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  return dateToUnixTimestamp(startOfDay);
}

/// 해당 날짜의 마지막 시간을 반환
function dateToEndUnixTimestamp(date: Date): UnixTimestamp {
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  return dateToUnixTimestamp(endOfDay);
}

function unixTimestampToDate(timestamp: UnixTimestamp): Date {
  return new Date(timestamp);
}

function getUnixTimestampRange(startDate: Date, endDate: Date): UnixTimestampRange {
  return { from: dateToUnixTimestamp(startDate), to: dateToUnixTimestamp(endDate) };
}


export type { UnixTimestamp, UnixTimestampRange };
export { dateToUnixTimestamp, dateToStartUnixTimestamp, dateToEndUnixTimestamp, unixTimestampToDate, getUnixTimestampRange };