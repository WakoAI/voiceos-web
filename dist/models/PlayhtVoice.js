"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayhtVoiceProviderEnum = exports.PlayhtVoice = void 0;
var PlayhtVoice = (function () {
    function PlayhtVoice() {
    }
    PlayhtVoice.getAttributeTypeMap = function () {
        return PlayhtVoice.attributeTypeMap;
    };
    PlayhtVoice.discriminator = undefined;
    PlayhtVoice.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "PlayhtVoiceProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model4",
            "format": ""
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "number",
            "format": ""
        },
        {
            "name": "temperature",
            "baseName": "temperature",
            "type": "number",
            "format": ""
        },
        {
            "name": "textGuidance",
            "baseName": "text_guidance",
            "type": "number",
            "format": ""
        },
        {
            "name": "styleGuidance",
            "baseName": "style_guidance",
            "type": "number",
            "format": ""
        }
    ];
    return PlayhtVoice;
}());
exports.PlayhtVoice = PlayhtVoice;
var PlayhtVoiceProviderEnum;
(function (PlayhtVoiceProviderEnum) {
    PlayhtVoiceProviderEnum["Playht"] = "playht";
})(PlayhtVoiceProviderEnum = exports.PlayhtVoiceProviderEnum || (exports.PlayhtVoiceProviderEnum = {}));
//# sourceMappingURL=PlayhtVoice.js.map