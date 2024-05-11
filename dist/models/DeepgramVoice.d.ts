import { Model2 } from '../models/Model2';
export declare class DeepgramVoice {
    'provider'?: DeepgramVoiceProviderEnum;
    'model'?: Model2;
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
export declare enum DeepgramVoiceProviderEnum {
    Deepgram = "deepgram"
}
