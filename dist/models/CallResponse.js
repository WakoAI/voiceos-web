"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallResponse = void 0;
var CallResponse = (function () {
    function CallResponse() {
    }
    CallResponse.getAttributeTypeMap = function () {
        return CallResponse.attributeTypeMap;
    };
    CallResponse.discriminator = undefined;
    CallResponse.attributeTypeMap = [
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
        }
    ];
    return CallResponse;
}());
exports.CallResponse = CallResponse;
//# sourceMappingURL=CallResponse.js.map