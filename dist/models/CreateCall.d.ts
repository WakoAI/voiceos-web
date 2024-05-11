import { AgentConfiguration } from '../models/AgentConfiguration';
export declare class CreateCall {
    'fromNumber': string;
    'toNumber': string;
    'agentId'?: string;
    'agentConfig'?: AgentConfiguration;
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
