import { Model3 } from '../models/Model3';
export declare class OpenAI {
    'provider'?: OpenAIProviderEnum;
    'model'?: Model3;
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
export declare enum OpenAIProviderEnum {
    Openai = "openai"
}
