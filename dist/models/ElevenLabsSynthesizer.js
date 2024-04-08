"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevenLabsSynthesizerProviderEnum = exports.ElevenLabsSynthesizer = void 0;
var ElevenLabsSynthesizer = (function () {
    function ElevenLabsSynthesizer() {
    }
    ElevenLabsSynthesizer.getAttributeTypeMap = function () {
        return ElevenLabsSynthesizer.attributeTypeMap;
    };
    ElevenLabsSynthesizer.discriminator = undefined;
    ElevenLabsSynthesizer.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ElevenLabsSynthesizerProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "ElevenLabsModel",
            "format": ""
        },
        {
            "name": "optimizeLatency",
            "baseName": "optimize_latency",
            "type": "number",
            "format": ""
        }
    ];
    return ElevenLabsSynthesizer;
}());
exports.ElevenLabsSynthesizer = ElevenLabsSynthesizer;
var ElevenLabsSynthesizerProviderEnum;
(function (ElevenLabsSynthesizerProviderEnum) {
    ElevenLabsSynthesizerProviderEnum["Elevenlabs"] = "elevenlabs";
})(ElevenLabsSynthesizerProviderEnum = exports.ElevenLabsSynthesizerProviderEnum || (exports.ElevenLabsSynthesizerProviderEnum = {}));
//# sourceMappingURL=ElevenLabsSynthesizer.js.map