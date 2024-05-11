import { AgentResponse } from '../models/AgentResponse';
export declare class AgentPagination {
    'items': Array<AgentResponse>;
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
