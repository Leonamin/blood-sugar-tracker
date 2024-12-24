namespace Utils {
  export function isZero(value: number): boolean {
    return value === 0;
  }

  export function isNaN(value: number): boolean {
    return Number.isNaN(value);
  }

  export function isNotNaN(value: number): boolean {
    return !isNaN(value);
  }

  export function isNumber(value: number): boolean {
    return typeof value === 'number';
  }

  export function isString(value: string): boolean {
    return typeof value === 'string';
  }

  export function isBoolean(value: boolean): boolean {
    return typeof value === 'boolean';
  }

  export function isUndefined(value: undefined): boolean {
    return typeof value === 'undefined';
  }

  export function isNull(value: null): boolean {
    return value === null;
  }

  export function isNullOrUndefined(value: null | undefined): boolean {
    return value === null || value === undefined;
  }

  export function isEmpty(value: string): boolean {
    return value.length === 0;
  }

  export function isNotEmpty(value: string): boolean {
    return !isEmpty(value);
  }

  export function isNullOrEmpty(value: null | undefined | string): boolean {
    return value === null || value === undefined || value === '';
  }

  export function isNotNullOrEmpty(value: null | undefined | string): boolean {
    return !isNullOrEmpty(value);
  }

  export function parseSafeInt(value: string): number {
    const parsedValue = parseInt(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  }

  export function parseSafeFloat(value: string): number {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  }
}

export { Utils };