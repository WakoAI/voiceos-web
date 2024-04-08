"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModelCost = void 0;
var LanguageModelCost = (function () {
    function LanguageModelCost() {
    }
    LanguageModelCost.getAttributeTypeMap = function () {
        return LanguageModelCost.attributeTypeMap;
    };
    LanguageModelCost.discriminator = undefined;
    LanguageModelCost.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsLanguageModelProvider",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "inputTokens",
            "baseName": "input_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "outputTokens",
            "baseName": "output_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "boolean",
            "format": ""
        }
    ];
    return LanguageModelCost;
}());
exports.LanguageModelCost = LanguageModelCost;
//# sourceMappingURL=LanguageModelCost.js.map