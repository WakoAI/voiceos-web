import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
export declare class ValidationError {
    'loc': Array<ValidationErrorLocInner>;
    'msg': string;
    'type': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
