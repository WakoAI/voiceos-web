"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallsPagination = void 0;
var CallsPagination = (function () {
    function CallsPagination() {
    }
    CallsPagination.getAttributeTypeMap = function () {
        return CallsPagination.attributeTypeMap;
    };
    CallsPagination.discriminator = undefined;
    CallsPagination.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<CallResponse>",
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
    return CallsPagination;
}());
exports.CallsPagination = CallsPagination;
//# sourceMappingURL=CallsPagination.js.map