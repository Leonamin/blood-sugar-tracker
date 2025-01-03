export namespace DateUtils {
  // parse date to hour:minute
  export function dateToHM(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
  }

  // intl year, month, day
  export function dateToYMD(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' });
  }
}