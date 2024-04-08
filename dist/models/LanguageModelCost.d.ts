import { WakoApiModelsLanguageModelProvider } from '../models/WakoApiModelsLanguageModelProvider';
export declare class LanguageModelCost {
    'provider': WakoApiModelsLanguageModelProvider;
    'cost': number;
    'inputTokens': number;
    'outputTokens': number;
    'external': boolean;
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
