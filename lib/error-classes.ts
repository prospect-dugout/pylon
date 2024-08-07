export const COMMON_ERRORS = {
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  MISSING_REQUIRED_FIELDS: 'MISSING_REQUIRED_FIELDS',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  SOMETHING_WENT_WRONG: 'SOMETHING_WENT_WRONG',
  UNAUTHORIZED: 'UNAUTHORIZED',
};

/* eslint-disable max-len */
export class CustomError extends Error {
  message = COMMON_ERRORS.SOMETHING_WENT_WRONG;
  code = 500;
}

/**
 * This error response is a generic "catch-all" response. Usually, this
 * indicates the server cannot find a better 5xx error code to response.
 */
export class InternalServerError extends CustomError {}

/**
 * 400 Bad Request response status code indicates that the server cannot or
 * will not process the request due to something that is perceived to be a
 * client error (for example, malformed request syntax, invalid request
 * message framing, or deceptive request routing).
 */
export class BadRequest extends CustomError {
  code = 400;
  constructor(message: string) {
    super();
    this.message = message;
  }
}

/**
 * The HTTP 404 Not Found response status code indicates that the server cannot
 * find the requested resource.
 */
export class NotFound extends CustomError {
  message = COMMON_ERRORS.RESOURCE_NOT_FOUND;
  code = 404;
}

/**
 * This error happens when a website visitor tries to access a restricted web
 * page but isn’t authorized to do so.
 */
export class Unauthorized extends CustomError {
  code = 401;
  constructor(message?: string) {
    super();
    this.message = message || COMMON_ERRORS.UNAUTHORIZED;
  }
}

/**
 * This error is similar to the 401 error, but note the difference between
 * unauthorized and forbidden. In this case no login opportunity was available.
 * This can happen, for example, if you try to access a (forbidden) directory
 * on a website.
 */
export class Forbidden extends CustomError {
  message = COMMON_ERRORS.FORBIDDEN;
  code = 403;
}
