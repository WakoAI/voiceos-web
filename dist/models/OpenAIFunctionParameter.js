"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIFunctionParameter = void 0;
var OpenAIFunctionParameter = (function () {
    function OpenAIFunctionParameter() {
    }
    OpenAIFunctionParameter.getAttributeTypeMap = function () {
        return OpenAIFunctionParameter.attributeTypeMap;
    };
    OpenAIFunctionParameter.discriminator = undefined;
    OpenAIFunctionParameter.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "OpenAIFunctionType",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "any",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return OpenAIFunctionParameter;
}());
exports.OpenAIFunctionParameter = OpenAIFunctionParameter;
//# sourceMappingURL=OpenAIFunctionParameter.js.map