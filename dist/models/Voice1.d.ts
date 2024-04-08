import { AzureModel } from '../models/AzureModel';
export declare class Voice1 {
    'provider'?: Voice1ProviderEnum | null;
    'model'?: AzureModel;
    'optimizeLatency'?: any | null;
    'pitch'?: any | null;
    'rate'?: any | null;
    'speaker'?: any | null;
    'reduceLantency'?: any | null;
    'speedAlpha'?: any | null;
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
export declare enum Voice1ProviderEnum {
    Rime = "rime"
}