"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RimeSynthesizerProviderEnum = exports.RimeSynthesizer = void 0;
var RimeSynthesizer = (function () {
    function RimeSynthesizer() {
    }
    RimeSynthesizer.getAttributeTypeMap = function () {
        return RimeSynthesizer.attributeTypeMap;
    };
    RimeSynthesizer.discriminator = undefined;
    RimeSynthesizer.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "RimeSynthesizerProviderEnum",
            "format": ""
        },
        {
            "name": "speaker",
            "baseName": "speaker",
            "type": "string",
            "format": ""
        },
        {
            "name": "reduceLantency",
            "baseName": "reduce_lantency",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
            "type": "number",
            "format": ""
        }
    ];
    return RimeSynthesizer;
}());
exports.RimeSynthesizer = RimeSynthesizer;
var RimeSynthesizerProviderEnum;
(function (RimeSynthesizerProviderEnum) {
    RimeSynthesizerProviderEnum["Rime"] = "rime";
})(RimeSynthesizerProviderEnum = exports.RimeSynthesizerProviderEnum || (exports.RimeSynthesizerProviderEnum = {}));
//# sourceMappingURL=RimeSynthesizer.js.map