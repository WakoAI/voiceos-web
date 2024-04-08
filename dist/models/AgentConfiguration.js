"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentConfiguration = void 0;
var AgentConfiguration = (function () {
    function AgentConfiguration() {
    }
    AgentConfiguration.getAttributeTypeMap = function () {
        return AgentConfiguration.attributeTypeMap;
    };
    AgentConfiguration.discriminator = undefined;
    AgentConfiguration.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
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
            "type": "number",
            "format": ""
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "Array<Webhook>",
            "format": ""
        }
    ];
    return AgentConfiguration;
}());
exports.AgentConfiguration = AgentConfiguration;
//# sourceMappingURL=AgentConfiguration.js.map