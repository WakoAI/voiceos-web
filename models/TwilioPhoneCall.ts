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

import { HttpFile } from '../http/http';

export class TwilioPhoneCall {
    /**
    * The telephony provider of the phone call.
    */
    'provider': TwilioPhoneCallProviderEnum;
    /**
    * The phone number called.
    */
    'toNumber': string;
    /**
    * The phone number from which the call was made.
    */
    'fromNumber': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "TwilioPhoneCallProviderEnum",
            "format": ""
        },
        {
            "name": "toNumber",
            "baseName": "to_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromNumber",
            "baseName": "from_number",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TwilioPhoneCall.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TwilioPhoneCallProviderEnum {
    Twilio = 'twilio'
}

