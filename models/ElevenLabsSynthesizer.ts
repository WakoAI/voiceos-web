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

import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { HttpFile } from '../http/http';

export class ElevenLabsSynthesizer {
    /**
    * The synthesizer provider.
    */
    'provider'?: ElevenLabsSynthesizerProviderEnum;
    /**
    * The elevenlabs model to use
    */
    'model'?: ElevenLabsModel;
    /**
    * Optimize for latency
    */
    'optimizeLatency'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ElevenLabsSynthesizerProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "ElevenLabsModel",
            "format": ""
        },
        {
            "name": "optimizeLatency",
            "baseName": "optimize_latency",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ElevenLabsSynthesizer.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ElevenLabsSynthesizerProviderEnum {
    Elevenlabs = 'elevenlabs'
}
