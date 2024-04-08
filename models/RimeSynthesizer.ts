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

import { HttpFile } from '../http/http';

export class RimeSynthesizer {
    /**
    * The synthesizer provider.
    */
    'provider'?: RimeSynthesizerProviderEnum;
    /**
    * The speaker of the voice.
    */
    'speaker'?: string;
    /**
    * Reduces the latency of response, at the cost of some possible mispronunciation of digits and abbreviations.
    */
    'reduceLantency'?: boolean;
    /**
    * Adjusts the speed of speech. Lower is faster. Higher is slower.
    */
    'speedAlpha'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "RimeSynthesizerProviderEnum",
            "format": ""
        },
        {
            "name": "speaker",
            "baseName": "speaker",
            "type": "string",
            "format": ""
        },
        {
            "name": "reduceLantency",
            "baseName": "reduce_lantency",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RimeSynthesizer.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RimeSynthesizerProviderEnum {
    Rime = 'rime'
}

