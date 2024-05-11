import { AgentProvider } from '../models/AgentProvider';
export declare class AgentCost {
    'provider': AgentProvider;
    'cost': number;
    'seconds': number;
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
