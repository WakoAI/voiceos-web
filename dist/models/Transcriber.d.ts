import { Language } from '../models/Language';
import { Model1 } from '../models/Model1';
export declare class Transcriber {
    'provider'?: TranscriberProviderEnum | null;
    'model'?: Model1;
    'language'?: Language;
    'keywords'?: any | null;
    'languages'?: any | null;
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
export declare enum TranscriberProviderEnum {
    Azure = "azure"
}
