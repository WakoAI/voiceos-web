import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { Model2 } from '../models/Model2';
import { Speaker } from '../models/Speaker';
import { VoiceId } from '../models/VoiceId';
export declare class Voice1 {
    'provider'?: Voice1ProviderEnum | null;
    'model'?: Model2;
    'speed'?: any | null;
    'temperature'?: any | null;
    'textGuidance'?: any | null;
    'styleGuidance'?: any | null;
    'voiceId'?: VoiceId;
    'modelId'?: ElevenLabsModel;
    'optimizeLatency'?: any | null;
    'useSpeakerBoost'?: any | null;
    'similarityBoost'?: any | null;
    'stability'?: any | null;
    'pitch'?: any | null;
    'rate'?: any | null;
    'speaker'?: Speaker;
    'speedAlpha'?: any | null;
    'reduceLatency'?: any | null;
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
export declare enum Voice1ProviderEnum {
    Rime = "rime"
}
