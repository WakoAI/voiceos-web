"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevenlabsVoiceProviderEnum = exports.ElevenlabsVoice = void 0;
var ElevenlabsVoice = (function () {
    function ElevenlabsVoice() {
    }
    ElevenlabsVoice.getAttributeTypeMap = function () {
        return ElevenlabsVoice.attributeTypeMap;
    };
    ElevenlabsVoice.discriminator = undefined;
    ElevenlabsVoice.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ElevenlabsVoiceProviderEnum",
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
            "type": "number",
            "format": ""
        },
        {
            "name": "useSpeakerBoost",
            "baseName": "use_speaker_boost",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "similarityBoost",
            "baseName": "similarity_boost",
            "type": "number",
            "format": ""
        },
        {
            "name": "stability",
            "baseName": "stability",
            "type": "number",
            "format": ""
        }
    ];
    return ElevenlabsVoice;
}());
exports.ElevenlabsVoice = ElevenlabsVoice;
var ElevenlabsVoiceProviderEnum;
(function (ElevenlabsVoiceProviderEnum) {
    ElevenlabsVoiceProviderEnum["Elevenlabs"] = "elevenlabs";
})(ElevenlabsVoiceProviderEnum = exports.ElevenlabsVoiceProviderEnum || (exports.ElevenlabsVoiceProviderEnum = {}));
//# sourceMappingURL=ElevenlabsVoice.js.map