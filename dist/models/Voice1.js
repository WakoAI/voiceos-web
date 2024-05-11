"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voice1ProviderEnum = exports.Voice1 = void 0;
var Voice1 = (function () {
    function Voice1() {
    }
    Voice1.getAttributeTypeMap = function () {
        return Voice1.attributeTypeMap;
    };
    Voice1.discriminator = undefined;
    Voice1.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "Voice1ProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model2",
            "format": ""
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "any",
            "format": ""
        },
        {
            "name": "temperature",
            "baseName": "temperature",
            "type": "any",
            "format": ""
        },
        {
            "name": "textGuidance",
            "baseName": "text_guidance",
            "type": "any",
            "format": ""
        },
        {
            "name": "styleGuidance",
            "baseName": "style_guidance",
            "type": "any",
            "format": ""
        },
        {
            "name": "voiceId",
            "baseName": "voice_id",
            "type": "VoiceId",
            "format": ""
        },
        {
            "name": "modelId",
            "baseName": "model_id",
            "type": "ElevenLabsModel",
            "format": ""
        },
        {
            "name": "optimizeLatency",
            "baseName": "optimize_latency",
            "type": "any",
            "format": ""
        },
        {
            "name": "useSpeakerBoost",
            "baseName": "use_speaker_boost",
            "type": "any",
            "format": ""
        },
        {
            "name": "similarityBoost",
            "baseName": "similarity_boost",
            "type": "any",
            "format": ""
        },
        {
            "name": "stability",
            "baseName": "stability",
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
            "type": "Speaker",
            "format": ""
        },
        {
            "name": "speedAlpha",
            "baseName": "speed_alpha",
            "type": "any",
            "format": ""
        },
        {
            "name": "reduceLatency",
            "baseName": "reduce_latency",
            "type": "any",
            "format": ""
        }
    ];
    return Voice1;
}());
exports.Voice1 = Voice1;
var Voice1ProviderEnum;
(function (Voice1ProviderEnum) {
    Voice1ProviderEnum["Rime"] = "rime";
})(Voice1ProviderEnum = exports.Voice1ProviderEnum || (exports.Voice1ProviderEnum = {}));
//# sourceMappingURL=Voice1.js.map