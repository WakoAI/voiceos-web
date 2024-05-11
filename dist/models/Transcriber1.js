"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transcriber1ProviderEnum = exports.Transcriber1 = void 0;
var Transcriber1 = (function () {
    function Transcriber1() {
    }
    Transcriber1.getAttributeTypeMap = function () {
        return Transcriber1.attributeTypeMap;
    };
    Transcriber1.discriminator = undefined;
    Transcriber1.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "Transcriber1ProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model1",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "Language",
            "format": ""
        },
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "any",
            "format": ""
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "any",
            "format": ""
        }
    ];
    return Transcriber1;
}());
exports.Transcriber1 = Transcriber1;
var Transcriber1ProviderEnum;
(function (Transcriber1ProviderEnum) {
    Transcriber1ProviderEnum["Azure"] = "azure";
})(Transcriber1ProviderEnum = exports.Transcriber1ProviderEnum || (exports.Transcriber1ProviderEnum = {}));
//# sourceMappingURL=Transcriber1.js.map