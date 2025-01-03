type Hour = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Minute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
type AmPm = 'AM' | 'PM';

// interface Time {
//   hour: Hour;
//   minute: Minute;
//   ampm: AmPm;
// }

interface Time {
  hour: number;
  minute: number;
  ampm: string;
}

namespace Time {
  export const selections: Record<keyof Time, string[]> = {
    hour: Array.from({ length: 12 }, (_, i) => (i + 1).toString()),
    minute: Array.from({ length: 60 }, (_, i) => (i).toString()),
    ampm: ['AM', 'PM'],
  }

  export const toTime = (value: { hour: string, minute: string, ampm: string }): Time => {
    return {
      hour: parseInt(value.hour) as Hour,
      minute: parseInt(value.minute) as Minute,
      ampm: value.ampm as AmPm,
    }
  }

  export const toStringObject = (value: Time): Record<keyof Time, string> => {
    return {
      hour: value.hour.toString(),
      minute: value.minute.toString(),
      ampm: value.ampm,
    }
  }
}

export { Time };
export type { Hour, Minute, AmPm };
