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

import { ElevenLabsVoices } from '../models/ElevenLabsVoices';
import { HttpFile } from '../http/http';

/**
* The elevenlabs model to use.
*/
export class VoiceId {

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
    ];

    static getAttributeTypeMap() {
        return VoiceId.attributeTypeMap;
    }

    public constructor() {
    }
}

