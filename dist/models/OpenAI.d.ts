import { ChatGPT } from '../models/ChatGPT';
import { OpenAIFunction } from '../models/OpenAIFunction';
export declare class OpenAI {
    'provider'?: OpenAIProviderEnum;
    'model'?: ChatGPT;
    'functions'?: Array<OpenAIFunction>;
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
