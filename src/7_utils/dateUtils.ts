const DateUtils = {
  /**
   * Date를 yyyymmdd 형식으로 반환
   */
  toYMD: (date: Date, locale: string = 'en-US'): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  },

  toDashYMD: (date: Date, locale: string = 'en-US'): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  /**
   * Date를 hh:mm 형식으로 반환
   */
  toFormattedHM: (date: Date, locale: string = 'en-US'): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  },
  
  /**
   * 같은 날짜인지 확인
   */
  isSameDay: (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  },

  toStartOfDay: (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  },

  toEndOfDay: (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
  },

  toStartOfMonth: (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
  },

  toEndOfMonth: (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
  }
}

export default DateUtils;
