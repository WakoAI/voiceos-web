"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepgramVoiceProviderEnum = exports.DeepgramVoice = void 0;
var DeepgramVoice = (function () {
    function DeepgramVoice() {
    }
    DeepgramVoice.getAttributeTypeMap = function () {
        return DeepgramVoice.attributeTypeMap;
    };
    DeepgramVoice.discriminator = undefined;
    DeepgramVoice.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "DeepgramVoiceProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model2",
            "format": ""
        }
    ];
    return DeepgramVoice;
}());
exports.DeepgramVoice = DeepgramVoice;
var DeepgramVoiceProviderEnum;
(function (DeepgramVoiceProviderEnum) {
    DeepgramVoiceProviderEnum["Deepgram"] = "deepgram";
})(DeepgramVoiceProviderEnum = exports.DeepgramVoiceProviderEnum || (exports.DeepgramVoiceProviderEnum = {}));
//# sourceMappingURL=DeepgramVoice.js.map