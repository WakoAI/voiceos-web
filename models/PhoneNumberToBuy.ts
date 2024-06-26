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

import { WakoApiModelsPhoneNumberProvider } from '../models/WakoApiModelsPhoneNumberProvider';
import { HttpFile } from '../http/http';

export class PhoneNumberToBuy {
    /**
    * The telephony provider.
    */
    'provider': WakoApiModelsPhoneNumberProvider;
    /**
    * The available phone number to buy.
    */
    'phoneNumber': string;
    /**
    * The postal code of the phone number.
    */
    'postalCode'?: string;
    /**
    * The iso country code of the phone number.
    */
    'isoCountry'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsPhoneNumberProvider",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "isoCountry",
            "baseName": "iso_country",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumberToBuy.attributeTypeMap;
    }

    public constructor() {
    }
}



