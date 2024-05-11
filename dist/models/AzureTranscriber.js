"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureTranscriberProviderEnum = exports.AzureTranscriber = void 0;
var AzureTranscriber = (function () {
    function AzureTranscriber() {
    }
    AzureTranscriber.getAttributeTypeMap = function () {
        return AzureTranscriber.attributeTypeMap;
    };
    AzureTranscriber.discriminator = undefined;
    AzureTranscriber.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "AzureTranscriberProviderEnum",
            "format": ""
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<AzureTranscriberLanguagesInner>",
            "format": ""
        }
    ];
    return AzureTranscriber;
}());
exports.AzureTranscriber = AzureTranscriber;
var AzureTranscriberProviderEnum;
(function (AzureTranscriberProviderEnum) {
    AzureTranscriberProviderEnum["Azure"] = "azure";
})(AzureTranscriberProviderEnum = exports.AzureTranscriberProviderEnum || (exports.AzureTranscriberProviderEnum = {}));
//# sourceMappingURL=AzureTranscriber.js.map