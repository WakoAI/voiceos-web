"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallCost = void 0;
var CallCost = (function () {
    function CallCost() {
    }
    CallCost.getAttributeTypeMap = function () {
        return CallCost.attributeTypeMap;
    };
    CallCost.discriminator = undefined;
    CallCost.attributeTypeMap = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "synthesizer",
            "baseName": "synthesizer",
            "type": "SynthesizerCost",
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
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency",
            "format": ""
        }
    ];
    return CallCost;
}());
exports.CallCost = CallCost;
//# sourceMappingURL=CallCost.js.map