import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { VoiceId } from '../models/VoiceId';
export declare class ElevenlabsVoice {
    'provider'?: ElevenlabsVoiceProviderEnum;
    'voiceId'?: VoiceId;
    'modelId'?: ElevenLabsModel;
    'optimizeLatency'?: number;
    'useSpeakerBoost'?: boolean;
    'similarityBoost'?: number;
    'stability'?: number;
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
export declare enum ElevenlabsVoiceProviderEnum {
    Elevenlabs = "elevenlabs"
}
