import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
export declare class PhoneNumberPagination {
    'items': Array<PhoneNumberResponse>;
    'index': number;
    'hasNext': boolean;
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
