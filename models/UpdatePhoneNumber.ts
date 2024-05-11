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

import { PhoneNumberWebhook } from '../models/PhoneNumberWebhook';
import { HttpFile } from '../http/http';

export class UpdatePhoneNumber {
    /**
    * The agent id that will be used for inbound calls. If null, the phone number is will not receive any calls.
    */
    'inboundAgentId'?: string;
    /**
    * The webhooks of the phone number. This is used to fetch the agent at the start of the conversation.
    */
    'webhooks'?: Array<PhoneNumberWebhook>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboundAgentId",
            "baseName": "inbound_agent_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "Array<PhoneNumberWebhook>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdatePhoneNumber.attributeTypeMap;
    }

    public constructor() {
    }
}

