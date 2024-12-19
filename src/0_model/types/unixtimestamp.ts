type UnixTimestamp = number & { readonly __type: unique symbol };

interface UnixTimestampRange {
  from: UnixTimestamp;
  to: UnixTimestamp;
}

function dateToUnixTimestamp(date: Date): UnixTimestamp {
  return date.getTime() as UnixTimestamp;
}

function unixTimestampToDate(timestamp: UnixTimestamp): Date {
  return new Date(timestamp);
}

function getUnixTimestampRange(startDate: Date, endDate: Date): UnixTimestampRange {
  return { from: dateToUnixTimestamp(startDate), to: dateToUnixTimestamp(endDate) };
}


export type { UnixTimestamp, UnixTimestampRange };
export { dateToUnixTimestamp, unixTimestampToDate, getUnixTimestampRange };