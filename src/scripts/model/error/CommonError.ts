import ExtendableError from '@/scripts/model/error/ExtendableError';

export class CommonError extends ExtendableError<any> {
    public constructor(message: string, extra: any = {}) {
        super(message, extra);
    }
}
