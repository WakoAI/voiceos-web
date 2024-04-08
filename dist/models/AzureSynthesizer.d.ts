import { AzureModel } from '../models/AzureModel';
export declare class AzureSynthesizer {
    'provider'?: AzureSynthesizerProviderEnum;
    'model'?: AzureModel;
    'pitch'?: number;
    'rate'?: number;
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
export declare enum AzureSynthesizerProviderEnum {
    Azure = "azure"
}
