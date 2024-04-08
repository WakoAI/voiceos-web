import { CallResponse } from '../models/CallResponse';
export declare class CallsPagination {
    'items': Array<CallResponse>;
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
