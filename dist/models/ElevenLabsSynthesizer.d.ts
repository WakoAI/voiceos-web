import { ElevenLabsModel } from '../models/ElevenLabsModel';
export declare class ElevenLabsSynthesizer {
    'provider'?: ElevenLabsSynthesizerProviderEnum;
    'model'?: ElevenLabsModel;
    'optimizeLatency'?: number;
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
export declare enum ElevenLabsSynthesizerProviderEnum {
    Elevenlabs = "elevenlabs"
}
