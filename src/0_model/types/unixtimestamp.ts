type UnixTimestamp = number & { readonly __type: unique symbol };

interface UnixTimestampRange {
  from: UnixTimestamp;
  to: UnixTimestamp;
}

namespace UnixTimestamp {
  export function dateStringToUnixTimestamp(dateString: string): UnixTimestamp {
    const date = new Date(dateString);
    return dateToUnixTimestamp(date);
  }

  /**
   * Converts a string representing a Unix timestamp into a UnixTimestamp type.
   * @param timestampString - The string representation of the Unix timestamp.
   * @returns UnixTimestamp
   * @throws Error if the input is not a valid number or timestamp.
   */
  export function timeStampStringToUnixTimestamp(timestampString: string): UnixTimestamp {
    // Validate if the input is a number in string format
    console.log(timestampString);
    const parsedNumber = Number(timestampString);
    console.log(parsedNumber);
    if (
      isNaN(parsedNumber) ||
      !Number.isInteger(parsedNumber) ||
      parsedNumber < 0
    ) {
      throw new Error("Invalid Unix timestamp string");
    }

    // Return as UnixTimestamp type
    return parsedNumber as UnixTimestamp;
  }

  export function toUnixTimestampRange(timestampString: string): UnixTimestampRange {
    const from = timeStampStringToUnixTimestamp(timestampString);
    const to = timeStampStringToUnixTimestamp(timestampString);
    return { from, to };
  }
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

function getUnixTimestampRange(
  startDate: Date,
  endDate: Date
): UnixTimestampRange {
  return {
    from: dateToUnixTimestamp(startDate),
    to: dateToUnixTimestamp(endDate),
  };
}

export type { UnixTimestampRange };

export {
  dateToUnixTimestamp,
  dateToStartUnixTimestamp,
  dateToEndUnixTimestamp,
  unixTimestampToDate,
  getUnixTimestampRange,
  UnixTimestamp,
};
