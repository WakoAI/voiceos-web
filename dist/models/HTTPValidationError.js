"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPValidationError = void 0;
var HTTPValidationError = (function () {
    function HTTPValidationError() {
    }
    HTTPValidationError.getAttributeTypeMap = function () {
        return HTTPValidationError.attributeTypeMap;
    };
    HTTPValidationError.discriminator = undefined;
    HTTPValidationError.attributeTypeMap = [
        {
            "name": "detail",
            "baseName": "detail",
            "type": "Array<ValidationError>",
            "format": ""
        }
    ];
    return HTTPValidationError;
}());
exports.HTTPValidationError = HTTPValidationError;
//# sourceMappingURL=HTTPValidationError.js.map