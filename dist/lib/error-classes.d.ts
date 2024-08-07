export declare const COMMON_ERRORS: {
    FORBIDDEN: string;
    INTERNAL_SERVER_ERROR: string;
    MISSING_REQUIRED_FIELDS: string;
    RESOURCE_NOT_FOUND: string;
    SOMETHING_WENT_WRONG: string;
    UNAUTHORIZED: string;
};
export declare class CustomError extends Error {
    message: string;
    code: number;
}
/**
 * This error response is a generic "catch-all" response. Usually, this
 * indicates the server cannot find a better 5xx error code to response.
 */
export declare class InternalServerError extends CustomError {
}
/**
 * 400 Bad Request response status code indicates that the server cannot or
 * will not process the request due to something that is perceived to be a
 * client error (for example, malformed request syntax, invalid request
 * message framing, or deceptive request routing).
 */
export declare class BadRequest extends CustomError {
    code: number;
    constructor(message: string);
}
/**
 * The HTTP 404 Not Found response status code indicates that the server cannot
 * find the requested resource.
 */
export declare class NotFound extends CustomError {
    message: string;
    code: number;
}
/**
 * This error happens when a website visitor tries to access a restricted web
 * page but isn’t authorized to do so.
 */
export declare class Unauthorized extends CustomError {
    code: number;
    constructor(message?: string);
}
/**
 * This error is similar to the 401 error, but note the difference between
 * unauthorized and forbidden. In this case no login opportunity was available.
 * This can happen, for example, if you try to access a (forbidden) directory
 * on a website.
 */
export declare class Forbidden extends CustomError {
    message: string;
    code: number;
}
