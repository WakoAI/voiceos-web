"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepgramTranscriberProviderEnum = exports.DeepgramTranscriber = void 0;
var DeepgramTranscriber = (function () {
    function DeepgramTranscriber() {
    }
    DeepgramTranscriber.getAttributeTypeMap = function () {
        return DeepgramTranscriber.attributeTypeMap;
    };
    DeepgramTranscriber.discriminator = undefined;
    DeepgramTranscriber.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "DeepgramTranscriberProviderEnum",
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
            "type": "Array<string>",
            "format": ""
        }
    ];
    return DeepgramTranscriber;
}());
exports.DeepgramTranscriber = DeepgramTranscriber;
var DeepgramTranscriberProviderEnum;
(function (DeepgramTranscriberProviderEnum) {
    DeepgramTranscriberProviderEnum["Deepgram"] = "deepgram";
})(DeepgramTranscriberProviderEnum = exports.DeepgramTranscriberProviderEnum || (exports.DeepgramTranscriberProviderEnum = {}));
//# sourceMappingURL=DeepgramTranscriber.js.map