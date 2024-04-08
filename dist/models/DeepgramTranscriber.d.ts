import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramModel } from '../models/DeepgramModel';
export declare class DeepgramTranscriber {
    'provider'?: DeepgramTranscriberProviderEnum;
    'model'?: DeepgramModel;
    'language'?: DeepgramLanguages;
    'keywords'?: Array<string>;
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
export declare enum DeepgramTranscriberProviderEnum {
    Deepgram = "deepgram"
}
