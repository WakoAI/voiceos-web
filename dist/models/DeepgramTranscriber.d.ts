import { Language } from '../models/Language';
import { Model1 } from '../models/Model1';
export declare class DeepgramTranscriber {
    'provider'?: DeepgramTranscriberProviderEnum;
    'model'?: Model1;
    'language'?: Language;
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
