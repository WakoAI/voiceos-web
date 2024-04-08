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

import { AgentResponse } from '../models/AgentResponse';
import { CallCost } from '../models/CallCost';
import { CallStatus } from '../models/CallStatus';
import { CallType } from '../models/CallType';
import { EndedReasons } from '../models/EndedReasons';
import { Message } from '../models/Message';
import { HttpFile } from '../http/http';

export class CallResponse {
    /**
    * The uri of the conversation.
    */
    'uri': string;
    /**
    * The type of the call.
    */
    'type': CallType;
    /**
    * The status of the conversation (live or ended).
    */
    'status': CallStatus;
    /**
    * The phone number that the call is going to.
    */
    'toNumber'?: string;
    /**
    * The phone number that call is coming from.
    */
    'fromNumber'?: string;
    /**
    * The start time of the conversation.
    */
    'startTime': Date;
    /**
    * The end time of the conversation.
    */
    'endTime'?: Date;
    /**
    * The agent used for the call.
    */
    'agent': AgentResponse;
    /**
    * The id of the agent used in the call. Returns null if the call did not use an existing agent.
    */
    'agentId'?: string;
    /**
    * The messages of the conversation.
    */
    'messages'?: Array<Message>;
    /**
    * The account id associated with of the conversation.
    */
    'accountId': string;
    /**
    * The reasons the conversation ended.
    */
    'endedReason'?: EndedReasons;
    /**
    * The cost of the conversation.
    */
    'cost'?: CallCost;
    /**
    * The id of the conversation.
    */
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CallType",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CallStatus",
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
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "agent",
            "baseName": "agent",
            "type": "AgentResponse",
            "format": ""
        },
        {
            "name": "agentId",
            "baseName": "agent_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<Message>",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "endedReason",
            "baseName": "ended_reason",
            "type": "EndedReasons",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "CallCost",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



