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

import { OpenAI } from '../models/OpenAI';
import { Transcriber1 } from '../models/Transcriber1';
import { Voice1 } from '../models/Voice1';
import { Webhook } from '../models/Webhook';
import { HttpFile } from '../http/http';

export class UpdateAgent {
    /**
    * The initial message that the agent will say. If null, the agent will wait for the user to speak first.
    */
    'initialMessage'?: string;
    /**
    * The prompt of the agent.
    */
    'prompt'?: string;
    'voice'?: Voice1;
    /**
    * The language model of the agent.
    */
    'languageModel'?: OpenAI;
    'transcriber'?: Transcriber1;
    /**
    * The maximum conversation duration in seconds. If null, the conversation can be of any duration. The default value is 10 min.
    */
    'maxDurationSeconds'?: number;
    /**
    * The webhooks of the agent. These are used for real-time conversation events such as function_calls, messages and much more.
    */
    'webhooks'?: Array<Webhook>;
    /**
    * The metadata of the agent. This is used to store additional information about the agent.
    */
    'metadata'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "initialMessage",
            "baseName": "initial_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "string",
            "format": ""
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "Voice1",
            "format": ""
        },
        {
            "name": "languageModel",
            "baseName": "language_model",
            "type": "OpenAI",
            "format": ""
        },
        {
            "name": "transcriber",
            "baseName": "transcriber",
            "type": "Transcriber1",
            "format": ""
        },
        {
            "name": "maxDurationSeconds",
            "baseName": "max_duration_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "Array<Webhook>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateAgent.attributeTypeMap;
    }

    public constructor() {
    }
}

