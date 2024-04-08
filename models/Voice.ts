/**
 * VoiceOS
 * VoiceOS API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AzureModel } from '../models/AzureModel';
import { AzureSynthesizer } from '../models/AzureSynthesizer';
import { ElevenLabsSynthesizer } from '../models/ElevenLabsSynthesizer';
import { RimeSynthesizer } from '../models/RimeSynthesizer';
import { HttpFile } from '../http/http';

export class Voice {
    /**
    * The synthesizer provider.
    */
    'provider'?: VoiceProviderEnum | null;
    /**
    * The azure model to use
    */
    'model'?: AzureModel;
    /**
    * Optimize for latency
    */
    'optimizeLatency'?: any | null;
    /**
    * The pitch of the voice
    */
    'pitch'?: any | null;
    /**
    * The rate of the voice
    */
    'rate'?: any | null;
    /**
    * The speaker of the voice.
    */
    'speaker'?: any | null;
    /**
    * Reduces the latency of response, at the cost of some possible mispronunciation of digits and abbreviations.
    */
    'reduceLantency'?: any | null;
    /**
    * Adjusts the speed of speech. Lower is faster. Higher is slower.
    */
    'speedAlpha'?: any | null;

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
            "type": "AzureModel",
            "format": ""
        },
        {
            "name": "optimizeLatency",
            "baseName": "optimize_latency",
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
            "type": "any",
            "format": ""
        },
        {
            "name": "reduceLantency",
            "baseName": "reduce_lantency",
            "type": "any",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
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

