"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureSynthesizerProviderEnum = exports.AzureSynthesizer = void 0;
var AzureSynthesizer = (function () {
    function AzureSynthesizer() {
    }
    AzureSynthesizer.getAttributeTypeMap = function () {
        return AzureSynthesizer.attributeTypeMap;
    };
    AzureSynthesizer.discriminator = undefined;
    AzureSynthesizer.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "AzureSynthesizerProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "AzureModel",
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
    return AzureSynthesizer;
}());
exports.AzureSynthesizer = AzureSynthesizer;
var AzureSynthesizerProviderEnum;
(function (AzureSynthesizerProviderEnum) {
    AzureSynthesizerProviderEnum["Azure"] = "azure";
})(AzureSynthesizerProviderEnum = exports.AzureSynthesizerProviderEnum || (exports.AzureSynthesizerProviderEnum = {}));
//# sourceMappingURL=AzureSynthesizer.js.map