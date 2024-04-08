import { OpenAIFunctionParameter } from '../models/OpenAIFunctionParameter';
export declare class OpenAIFunction {
    'name': string;
    'wait'?: boolean;
    'description': string;
    'parameters': OpenAIFunctionParameter;
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
