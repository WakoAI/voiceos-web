import { ConversationResponse } from '../models/ConversationResponse';
export declare class ConversationsPagination {
    'items': Array<ConversationResponse>;
    'index': number;
    'hasMore': boolean;
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
