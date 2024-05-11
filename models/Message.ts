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

import { MessageRole } from '../models/MessageRole';
import { HttpFile } from '../http/http';

export class Message {
    /**
    * The role of the message.
    */
    'role': MessageRole;
    /**
    * The content of the message.
    */
    'content': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "MessageRole",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }

    public constructor() {
    }
}



