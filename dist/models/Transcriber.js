"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriberProviderEnum = exports.Transcriber = void 0;
var Transcriber = (function () {
    function Transcriber() {
    }
    Transcriber.getAttributeTypeMap = function () {
        return Transcriber.attributeTypeMap;
    };
    Transcriber.discriminator = undefined;
    Transcriber.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "TranscriberProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "DeepgramModel",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "DeepgramLanguages",
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
    return Transcriber;
}());
exports.Transcriber = Transcriber;
var TranscriberProviderEnum;
(function (TranscriberProviderEnum) {
    TranscriberProviderEnum["Azure"] = "azure";
})(TranscriberProviderEnum = exports.TranscriberProviderEnum || (exports.TranscriberProviderEnum = {}));
//# sourceMappingURL=Transcriber.js.map