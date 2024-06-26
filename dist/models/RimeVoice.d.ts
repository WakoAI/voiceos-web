import { Speaker } from '../models/Speaker';
export declare class RimeVoice {
    'provider'?: RimeVoiceProviderEnum;
    'speaker'?: Speaker;
    'speedAlpha'?: number;
    'reduceLatency'?: boolean;
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
export declare enum RimeVoiceProviderEnum {
    Rime = "rime"
}
