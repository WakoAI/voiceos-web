"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgent = void 0;
var UpdateAgent = (function () {
    function UpdateAgent() {
    }
    UpdateAgent.getAttributeTypeMap = function () {
        return UpdateAgent.attributeTypeMap;
    };
    UpdateAgent.discriminator = undefined;
    UpdateAgent.attributeTypeMap = [
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
            "type": "Voice1",
            "format": ""
        },
        {
            "name": "transcriber",
            "baseName": "transcriber",
            "type": "Transcriber1",
            "format": ""
        },
        {
            "name": "maxDurationTime",
            "baseName": "max_duration_time",
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
    return UpdateAgent;
}());
exports.UpdateAgent = UpdateAgent;
//# sourceMappingURL=UpdateAgent.js.map