export class HttpError extends Error {
  // is this right? comment out line 3 to see what I mean
  code: number;

  constructor(message: string, errorCode: number) {
    super(message);
    this.code = errorCode;
  }
}