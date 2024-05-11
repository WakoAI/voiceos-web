"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceCost = void 0;
var VoiceCost = (function () {
    function VoiceCost() {
    }
    VoiceCost.getAttributeTypeMap = function () {
        return VoiceCost.attributeTypeMap;
    };
    VoiceCost.discriminator = undefined;
    VoiceCost.attributeTypeMap = [
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
        }
    ];
    return VoiceCost;
}());
exports.VoiceCost = VoiceCost;
//# sourceMappingURL=VoiceCost.js.map