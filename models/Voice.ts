/**
 * VoiceOS
 * VoiceOS API
 *
 * OpenAPI spec version: 0.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AzureVoice } from '../models/AzureVoice';
import { DeepgramVoice } from '../models/DeepgramVoice';
import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { ElevenlabsVoice } from '../models/ElevenlabsVoice';
import { Model2 } from '../models/Model2';
import { PlayhtVoice } from '../models/PlayhtVoice';
import { RimeVoice } from '../models/RimeVoice';
import { Speaker } from '../models/Speaker';
import { VoiceId } from '../models/VoiceId';
import { HttpFile } from '../http/http';

export class Voice {
    /**
    * The voice provider.
    */
    'provider'?: VoiceProviderEnum | null;
    'model'?: Model2;
    /**
    * Control how fast the generated audio should be. A number greater than 0 and less than or equal to 5.0
    */
    'speed'?: any | null;
    /**
    * A floating point number between 0, inclusive, and 2, inclusive. If equal to null or not provided, the model\'s default temperature will be used.
    */
    'temperature'?: any | null;
    /**
    * A number between 1 and 2. This number influences how closely the generated speech adheres to the input text.
    */
    'textGuidance'?: any | null;
    /**
    * A number between 1 and 30. Use lower numbers to to reduce how strong your chosen emotion will be. Higher numbers will create a very emotional performance.
    */
    'styleGuidance'?: any | null;
    'voiceId'?: VoiceId;
    /**
    * The model to use. Defaults to eleven_turbo_v2.
    */
    'modelId'?: ElevenLabsModel;
    /**
    * Optimize for latency.
    */
    'optimizeLatency'?: any | null;
    /**
    * Use speaker boost.
    */
    'useSpeakerBoost'?: any | null;
    /**
    * Boost the similarity of the generated audio to the input text.
    */
    'similarityBoost'?: any | null;
    /**
    * Control the stability of the generated audio.
    */
    'stability'?: any | null;
    /**
    * The pitch of the voice.
    */
    'pitch'?: any | null;
    /**
    * The rate of the voice.
    */
    'rate'?: any | null;
    'speaker'?: Speaker;
    /**
    * Adjusts the speed of speech. Lower than 1.0 is faster than default. Higher than 1.0 is slower than default.
    */
    'speedAlpha'?: any | null;
    /**
    * Reduces the latency of response, at the cost of some possible mispronunciation of digits and abbreviations.
    */
    'reduceLatency'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "VoiceProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model2",
            "format": ""
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "any",
            "format": ""
        },
        {
            "name": "temperature",
            "baseName": "temperature",
            "type": "any",
            "format": ""
        },
        {
            "name": "textGuidance",
            "baseName": "text_guidance",
            "type": "any",
            "format": ""
        },
        {
            "name": "styleGuidance",
            "baseName": "style_guidance",
            "type": "any",
            "format": ""
        },
        {
            "name": "voiceId",
            "baseName": "voice_id",
            "type": "VoiceId",
            "format": ""
        },
        {
            "name": "modelId",
            "baseName": "model_id",
            "type": "ElevenLabsModel",
            "format": ""
        },
        {
            "name": "optimizeLatency",
            "baseName": "optimize_latency",
            "type": "any",
            "format": ""
        },
        {
            "name": "useSpeakerBoost",
            "baseName": "use_speaker_boost",
            "type": "any",
            "format": ""
        },
        {
            "name": "similarityBoost",
            "baseName": "similarity_boost",
            "type": "any",
            "format": ""
        },
        {
            "name": "stability",
            "baseName": "stability",
            "type": "any",
            "format": ""
        },
        {
            "name": "pitch",
            "baseName": "pitch",
            "type": "any",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "any",
            "format": ""
        },
        {
            "name": "speaker",
            "baseName": "speaker",
            "type": "Speaker",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
            "type": "any",
            "format": ""
        },
        {
            "name": "reduceLatency",
            "baseName": "reduce_latency",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Voice.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum VoiceProviderEnum {
    Rime = 'rime'
}

