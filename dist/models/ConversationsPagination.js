"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsPagination = void 0;
var ConversationsPagination = (function () {
    function ConversationsPagination() {
    }
    ConversationsPagination.getAttributeTypeMap = function () {
        return ConversationsPagination.attributeTypeMap;
    };
    ConversationsPagination.discriminator = undefined;
    ConversationsPagination.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ConversationResponse>",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        }
    ];
    return ConversationsPagination;
}());
exports.ConversationsPagination = ConversationsPagination;
//# sourceMappingURL=ConversationsPagination.js.map