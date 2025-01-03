export namespace DateUtils {
  // parse date to hour:minute
  export function dateToHM(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
  }

  // intl year, month, day
  export function dateToYMD(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

  export function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  }
}
