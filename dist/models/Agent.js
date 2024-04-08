"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
var Agent = (function () {
    function Agent() {
    }
    Agent.getAttributeTypeMap = function () {
        return Agent.attributeTypeMap;
    };
    Agent.discriminator = undefined;
    Agent.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "any",
            "format": ""
        },
        {
            "name": "initialMessage",
            "baseName": "initial_message",
            "type": "any",
            "format": ""
        },
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "any",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "AgentLanguage",
            "format": ""
        },
        {
            "name": "languageModel",
            "baseName": "language_model",
            "type": "OpenAI",
            "format": ""
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "Voice",
            "format": ""
        },
        {
            "name": "transcriber",
            "baseName": "transcriber",
            "type": "Transcriber",
            "format": ""
        },
        {
            "name": "maxCallDuration",
            "baseName": "max_call_duration",
            "type": "any",
            "format": ""
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "any",
            "format": ""
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "any",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "any",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "any",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "any",
            "format": "date-time"
        }
    ];
    return Agent;
}());
exports.Agent = Agent;
//# sourceMappingURL=Agent.js.map