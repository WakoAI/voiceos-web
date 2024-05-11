"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCost = void 0;
var ConversationCost = (function () {
    function ConversationCost() {
    }
    ConversationCost.getAttributeTypeMap = function () {
        return ConversationCost.attributeTypeMap;
    };
    ConversationCost.discriminator = undefined;
    ConversationCost.attributeTypeMap = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "VoiceCost",
            "format": ""
        },
        {
            "name": "transcriber",
            "baseName": "transcriber",
            "type": "TranscriberCost",
            "format": ""
        },
        {
            "name": "languageModel",
            "baseName": "language_model",
            "type": "LanguageModelCost",
            "format": ""
        },
        {
            "name": "telephony",
            "baseName": "telephony",
            "type": "TelephonyCost",
            "format": ""
        },
        {
            "name": "agent",
            "baseName": "agent",
            "type": "AgentCost",
            "format": ""
        }
    ];
    return ConversationCost;
}());
exports.ConversationCost = ConversationCost;
//# sourceMappingURL=ConversationCost.js.map