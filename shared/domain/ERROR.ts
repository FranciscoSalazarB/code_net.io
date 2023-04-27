export enum ErrorType {
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  NotAcceptable = 406,
  Conflict = 409,
}

export class ModelError extends Error {
  constructor(
    readonly name: string,
    readonly message: string,
    readonly type: ErrorType
  ) {
    super(message);
  }
}
