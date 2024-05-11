"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentResponse = void 0;
var AgentResponse = (function () {
    function AgentResponse() {
    }
    AgentResponse.getAttributeTypeMap = function () {
        return AgentResponse.attributeTypeMap;
    };
    AgentResponse.discriminator = undefined;
    AgentResponse.attributeTypeMap = [
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
            "type": "Voice",
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
            "type": "Transcriber",
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
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return AgentResponse;
}());
exports.AgentResponse = AgentResponse;
//# sourceMappingURL=AgentResponse.js.map