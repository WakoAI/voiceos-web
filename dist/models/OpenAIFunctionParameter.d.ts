import { OpenAIFunctionType } from '../models/OpenAIFunctionType';
export declare class OpenAIFunctionParameter {
    'type'?: OpenAIFunctionType;
    'properties': any;
    'required'?: Array<string>;
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
