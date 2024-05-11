import { AgentConfiguration } from '../models/AgentConfiguration';
import { ConversationCost } from '../models/ConversationCost';
import { ConversationStatus } from '../models/ConversationStatus';
import { ConversationType } from '../models/ConversationType';
import { EndedReasons } from '../models/EndedReasons';
import { Message } from '../models/Message';
import { TwilioPhoneCall } from '../models/TwilioPhoneCall';
export declare class ConversationResponse {
    'uri': string;
    'type': ConversationType;
    'accountId': string;
    'status': ConversationStatus;
    'startedAt'?: Date;
    'endedAt'?: Date;
    'agentConfig': AgentConfiguration;
    'agentId'?: string;
    'messages'?: Array<Message>;
    'phoneCall'?: TwilioPhoneCall;
    'endedReason'?: EndedReasons;
    'costBreakdown'?: ConversationCost;
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
