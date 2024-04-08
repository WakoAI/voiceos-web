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

export class TwilioTelephony {
    /**
    * The telephony provider.
    */
    'provider'?: TwilioTelephonyProviderEnum;
    /**
    * The twilio phone number SID.
    */
    'phoneNumberSid': string;
    /**
    * The account sid of the telephony provider (i.e Twilio Account SID). Returns null if the phone number was purchased with Wako.
    */
    'accountSid'?: string;
    /**
    * The auth token of the telephony provider (i.e Twilio Auth Token). Returns null if the phone number was purchased with Wako.
    */
    'authToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "TwilioTelephonyProviderEnum",
            "format": ""
        },
        {
            "name": "phoneNumberSid",
            "baseName": "phone_number_sid",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountSid",
            "baseName": "account_sid",
            "type": "string",
            "format": ""
        },
        {
            "name": "authToken",
            "baseName": "auth_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TwilioTelephony.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TwilioTelephonyProviderEnum {
    Twilio = 'twilio'
}
