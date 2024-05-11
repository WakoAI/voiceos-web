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

import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { HttpFile } from '../http/http';

export class PhoneNumberPagination {
    /**
    * The list of phone numbers returned.
    */
    'items': Array<PhoneNumberResponse>;
    /**
    * The current index of the page.
    */
    'index': number;
    /**
    * Whether there is a next page.
    */
    'hasMore': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<PhoneNumberResponse>",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumberPagination.attributeTypeMap;
    }

    public constructor() {
    }
}

