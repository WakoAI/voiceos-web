"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentPagination = void 0;
var AgentPagination = (function () {
    function AgentPagination() {
    }
    AgentPagination.getAttributeTypeMap = function () {
        return AgentPagination.attributeTypeMap;
    };
    AgentPagination.discriminator = undefined;
    AgentPagination.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<AgentResponse>",
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
    return AgentPagination;
}());
exports.AgentPagination = AgentPagination;
//# sourceMappingURL=AgentPagination.js.map