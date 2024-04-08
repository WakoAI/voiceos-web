import { AzureLanguages } from '../models/AzureLanguages';
export declare class AzureTranscriber {
    'provider'?: AzureTranscriberProviderEnum;
    'languages'?: Array<AzureLanguages>;
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
