type AmPm = "AM" | "PM";

interface Time {
  hour: number;
  minute: number;
}

const TimeUtils = {
  getTimeSelections: (is24Hour: boolean = false) => {
    return {
      hour: is24Hour ? Array.from({ length: 24 }, (_, i) => i.toString()) : Array.from({ length: 12 }, (_, i) => (i + 1).toString()),
      minute: Array.from({ length: 60 }, (_, i) => i.toString()),
      ampm: ["AM", "PM"],
    };
  },
  stringToTime: (value: {
    hour: string;
    minute: string;
  }): Time => {
    return {
      hour: parseInt(value.hour) as number,
      minute: parseInt(value.minute) as number,
    };
  },
  timeToStringObject: (value: Time): Record<keyof Time, string> => {
    return {
      hour: value.hour.toString(),
      minute: value.minute.toString(),
    };
  },
  /**
   * 시간을 HH:MM 형식으로 반환합니다.
   * @param value Time 타입의 시간
   * @returns HH:MM 형식의 문자열
   */
  toFormattedHHMM: (value: Time): string => {
    return `${value.hour.toString().padStart(2, "0")}:${value.minute
      .toString()
      .padStart(2, "0")}`;
  },
  /**
   * 시간을 HH:MM AM/PM 형식으로 반환합니다.
   * @param value Time 타입의 시간
   * @returns HH:MM AM/PM 형식의 문자열
   */
  toFormattedHHMMAMPM: (value: Time): string => {
    return `${value.hour.toString().padStart(2, "0")}:${value.minute
      .toString()
      .padStart(2, "0")} ${value.hour >= 12 ? "PM" : "AM"}`;
  },
  /**
   * Date 객체에서 Time 타입으로 반환합니다
   * @param date Date 객체
   * @returns Time 타입의 시간
   */
  parseFromDate: (date: Date): Time => {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  },
  /**
   * HH:MM 형식의 문자열에서 Time 타입으로 반환합니다
   * @param value HH:MM 형식의 문자열
   * @returns Time 타입의 시간
   */
  parseFromHHMM: (value: string): Time => {
    const [hour, minute] = value.split(":").map(Number);
    return {
      hour: hour,
      minute: minute,
    };
  },
};

export { TimeUtils };
export type { Time, AmPm };
