export const Utils = {
  isZero(value: number): boolean {
    return value === 0;
  },

  isNaN(value: number): boolean {
    return Number.isNaN(value);
  },

  isNotNaN(value: number): boolean {
    return !isNaN(value);
  },

  isNumber(value: number): boolean {
    return typeof value === "number";
  },

  isString(value: string): boolean {
    return typeof value === "string";
  },

  isBoolean(value: boolean): boolean {
    return typeof value === "boolean";
  },

  isUndefined(value: undefined): boolean {
    return typeof value === "undefined";
  },

  isNull(value: null): boolean {
    return value === null;
  },

  isNullOrUndefined(value: null | undefined): boolean {
    return value === null || value === undefined;
  },

  isEmpty(value: string): boolean {
    return value.length === 0;
  },

  isNotEmpty(value: string): boolean {
    return !Utils.isEmpty(value);
  },

  isNullOrEmpty(value: null | undefined | string): boolean {
    return value === null || value === undefined || value === "";
  },

  isNotNullOrEmpty(value: null | undefined | string): boolean {
    return !Utils.isNullOrEmpty(value);
  },

  parseSafeInt(value: string): number {
    const parsedValue = parseInt(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  },

  parseSafeFloat(value: string): number {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  },
};
