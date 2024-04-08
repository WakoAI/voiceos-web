"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIFunction = void 0;
var OpenAIFunction = (function () {
    function OpenAIFunction() {
    }
    OpenAIFunction.getAttributeTypeMap = function () {
        return OpenAIFunction.attributeTypeMap;
    };
    OpenAIFunction.discriminator = undefined;
    OpenAIFunction.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "wait",
            "baseName": "wait",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "OpenAIFunctionParameter",
            "format": ""
        }
    ];
    return OpenAIFunction;
}());
exports.OpenAIFunction = OpenAIFunction;
//# sourceMappingURL=OpenAIFunction.js.map