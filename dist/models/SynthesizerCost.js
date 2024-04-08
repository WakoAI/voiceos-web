"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynthesizerCost = void 0;
var SynthesizerCost = (function () {
    function SynthesizerCost() {
    }
    SynthesizerCost.getAttributeTypeMap = function () {
        return SynthesizerCost.attributeTypeMap;
    };
    SynthesizerCost.discriminator = undefined;
    SynthesizerCost.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsSynthesizerProvider",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "characters",
            "baseName": "characters",
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
    return SynthesizerCost;
}());
exports.SynthesizerCost = SynthesizerCost;
//# sourceMappingURL=SynthesizerCost.js.map