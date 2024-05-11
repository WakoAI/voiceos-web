"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureVoiceProviderEnum = exports.AzureVoice = void 0;
var AzureVoice = (function () {
    function AzureVoice() {
    }
    AzureVoice.getAttributeTypeMap = function () {
        return AzureVoice.attributeTypeMap;
    };
    AzureVoice.discriminator = undefined;
    AzureVoice.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "AzureVoiceProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model",
            "format": ""
        },
        {
            "name": "pitch",
            "baseName": "pitch",
            "type": "number",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        }
    ];
    return AzureVoice;
}());
exports.AzureVoice = AzureVoice;
var AzureVoiceProviderEnum;
(function (AzureVoiceProviderEnum) {
    AzureVoiceProviderEnum["Azure"] = "azure";
})(AzureVoiceProviderEnum = exports.AzureVoiceProviderEnum || (exports.AzureVoiceProviderEnum = {}));
//# sourceMappingURL=AzureVoice.js.map