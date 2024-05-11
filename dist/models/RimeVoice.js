"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RimeVoiceProviderEnum = exports.RimeVoice = void 0;
var RimeVoice = (function () {
    function RimeVoice() {
    }
    RimeVoice.getAttributeTypeMap = function () {
        return RimeVoice.attributeTypeMap;
    };
    RimeVoice.discriminator = undefined;
    RimeVoice.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "RimeVoiceProviderEnum",
            "format": ""
        },
        {
            "name": "speaker",
            "baseName": "speaker",
            "type": "Speaker",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
            "type": "number",
            "format": ""
        },
        {
            "name": "reduceLatency",
            "baseName": "reduce_latency",
            "type": "boolean",
            "format": ""
        }
    ];
    return RimeVoice;
}());
exports.RimeVoice = RimeVoice;
var RimeVoiceProviderEnum;
(function (RimeVoiceProviderEnum) {
    RimeVoiceProviderEnum["Rime"] = "rime";
})(RimeVoiceProviderEnum = exports.RimeVoiceProviderEnum || (exports.RimeVoiceProviderEnum = {}));
//# sourceMappingURL=RimeVoice.js.map