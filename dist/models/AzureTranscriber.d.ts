import { AzureTranscriberLanguagesInner } from '../models/AzureTranscriberLanguagesInner';
export declare class AzureTranscriber {
    'provider'?: AzureTranscriberProviderEnum;
    'languages'?: Array<AzureTranscriberLanguagesInner>;
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
export declare enum AzureTranscriberProviderEnum {
    Azure = "azure"
}
