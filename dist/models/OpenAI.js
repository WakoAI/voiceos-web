"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIProviderEnum = exports.OpenAI = void 0;
var OpenAI = (function () {
    function OpenAI() {
    }
    OpenAI.getAttributeTypeMap = function () {
        return OpenAI.attributeTypeMap;
    };
    OpenAI.discriminator = undefined;
    OpenAI.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OpenAIProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Model3",
            "format": ""
        }
    ];
    return OpenAI;
}());
exports.OpenAI = OpenAI;
var OpenAIProviderEnum;
(function (OpenAIProviderEnum) {
    OpenAIProviderEnum["Openai"] = "openai";
})(OpenAIProviderEnum = exports.OpenAIProviderEnum || (exports.OpenAIProviderEnum = {}));
//# sourceMappingURL=OpenAI.js.map