"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceProviderEnum = exports.Voice = void 0;
var Voice = (function () {
    function Voice() {
    }
    Voice.getAttributeTypeMap = function () {
        return Voice.attributeTypeMap;
    };
    Voice.discriminator = undefined;
    Voice.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "VoiceProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "AzureModel",
            "format": ""
        },
        {
            "name": "optimizeLatency",
            "baseName": "optimize_latency",
            "type": "any",
            "format": ""
        },
        {
            "name": "pitch",
            "baseName": "pitch",
            "type": "any",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "any",
            "format": ""
        },
        {
            "name": "speaker",
            "baseName": "speaker",
            "type": "any",
            "format": ""
        },
        {
            "name": "reduceLantency",
            "baseName": "reduce_lantency",
            "type": "any",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
            "type": "any",
            "format": ""
        }
    ];
    return Voice;
}());
exports.Voice = Voice;
var VoiceProviderEnum;
(function (VoiceProviderEnum) {
    VoiceProviderEnum["Rime"] = "rime";
})(VoiceProviderEnum = exports.VoiceProviderEnum || (exports.VoiceProviderEnum = {}));
//# sourceMappingURL=Voice.js.map