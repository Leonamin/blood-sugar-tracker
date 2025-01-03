export class TaskResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;

  private constructor(success: boolean, data: T | null = null, error: string | null = null) {
    this.success = success;
    this.data = data;
    this.error = error;
  }

  static success<T>(data: T): TaskResponse<T> {
    return new TaskResponse<T>(true, data, null);
  }

  static failure<T>(error: string): TaskResponse<T> {
    return new TaskResponse<T>(false, null, error);
  }
}
