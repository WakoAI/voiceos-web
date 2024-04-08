"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = (function () {
    function Message() {
    }
    Message.getAttributeTypeMap = function () {
        return Message.attributeTypeMap;
    };
    Message.discriminator = undefined;
    Message.attributeTypeMap = [
        {
            "name": "role",
            "baseName": "role",
            "type": "MessageRole",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        }
    ];
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map