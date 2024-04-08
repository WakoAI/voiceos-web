"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberPagination = void 0;
var PhoneNumberPagination = (function () {
    function PhoneNumberPagination() {
    }
    PhoneNumberPagination.getAttributeTypeMap = function () {
        return PhoneNumberPagination.attributeTypeMap;
    };
    PhoneNumberPagination.discriminator = undefined;
    PhoneNumberPagination.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<PhoneNumberResponse>",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasNext",
            "baseName": "has_next",
            "type": "boolean",
            "format": ""
        }
    ];
    return PhoneNumberPagination;
}());
exports.PhoneNumberPagination = PhoneNumberPagination;
//# sourceMappingURL=PhoneNumberPagination.js.map