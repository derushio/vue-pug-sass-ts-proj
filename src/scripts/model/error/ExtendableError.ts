/**
 * Error を継承可能にする
 */
function ExtendableBuiltin(ec: typeof Error): typeof Error {
    function ExtendableBuiltin(this: Error) {
        ec.apply(this, arguments);
    }
    ExtendableBuiltin.prototype = Object.create(ec.prototype);
    Object.setPrototypeOf(ExtendableBuiltin, ec);

    return ExtendableBuiltin as typeof Error;
}

/**
 * 継承可能 Error Class
 */
export default abstract class ExtendableError<T> extends ExtendableBuiltin(Error) {
    public extra: T;

    public constructor(message: string, extra: T) {
        super(message)

        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable : false,
            value : message,
            writable : true,
        });

        if (Error.hasOwnProperty('captureStackTrace')) {
            (Error as any).captureStackTrace(this, this.constructor);
        } else {
            Object.defineProperty(this, 'stack', {
                configurable: true,
                enumerable : false,
                value : new Error(message).stack,
                writable : true,
            });
        }

        this.extra = extra;
    }
}
