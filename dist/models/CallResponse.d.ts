import { AgentResponse } from '../models/AgentResponse';
import { CallCost } from '../models/CallCost';
import { CallStatus } from '../models/CallStatus';
import { CallType } from '../models/CallType';
import { EndedReasons } from '../models/EndedReasons';
import { Message } from '../models/Message';
export declare class CallResponse {
    'uri': string;
    'type': CallType;
    'status': CallStatus;
    'toNumber'?: string;
    'fromNumber'?: string;
    'startTime': Date;
    'endTime'?: Date;
    'agent': AgentResponse;
    'agentId'?: string;
    'messages'?: Array<Message>;
    'accountId': string;
    'endedReason'?: EndedReasons;
    'cost'?: CallCost;
    'id': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
