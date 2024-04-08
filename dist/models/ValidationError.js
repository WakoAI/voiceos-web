"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
var ValidationError = (function () {
    function ValidationError() {
    }
    ValidationError.getAttributeTypeMap = function () {
        return ValidationError.attributeTypeMap;
    };
    ValidationError.discriminator = undefined;
    ValidationError.attributeTypeMap = [
        {
            "name": "loc",
            "baseName": "loc",
            "type": "Array<ValidationErrorLocInner>",
            "format": ""
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return ValidationError;
}());
exports.ValidationError = ValidationError;
//# sourceMappingURL=ValidationError.js.map