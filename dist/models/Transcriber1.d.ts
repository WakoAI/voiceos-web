import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramModel } from '../models/DeepgramModel';
export declare class Transcriber1 {
    'provider'?: Transcriber1ProviderEnum | null;
    'model'?: DeepgramModel;
    'language'?: DeepgramLanguages;
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
export declare enum Transcriber1ProviderEnum {
    Azure = "azure"
}
