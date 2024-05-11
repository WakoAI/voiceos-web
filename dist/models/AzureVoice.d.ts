import { Model } from '../models/Model';
export declare class AzureVoice {
    'provider'?: AzureVoiceProviderEnum;
    'model'?: Model;
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
export declare enum AzureVoiceProviderEnum {
    Azure = "azure"
}
