"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationResponse = void 0;
var ConversationResponse = (function () {
    function ConversationResponse() {
    }
    ConversationResponse.getAttributeTypeMap = function () {
        return ConversationResponse.attributeTypeMap;
    };
    ConversationResponse.discriminator = undefined;
    ConversationResponse.attributeTypeMap = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ConversationType",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ConversationStatus",
            "format": ""
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endedAt",
            "baseName": "ended_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "agentConfig",
            "baseName": "agent_config",
            "type": "AgentConfiguration",
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
            "name": "phoneCall",
            "baseName": "phone_call",
            "type": "TwilioPhoneCall",
            "format": ""
        },
        {
            "name": "endedReason",
            "baseName": "ended_reason",
            "type": "EndedReasons",
            "format": ""
        },
        {
            "name": "costBreakdown",
            "baseName": "cost_breakdown",
            "type": "ConversationCost",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return ConversationResponse;
}());
exports.ConversationResponse = ConversationResponse;
//# sourceMappingURL=ConversationResponse.js.map