"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentCost = void 0;
var AgentCost = (function () {
    function AgentCost() {
    }
    AgentCost.getAttributeTypeMap = function () {
        return AgentCost.attributeTypeMap;
    };
    AgentCost.discriminator = undefined;
    AgentCost.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "AgentProvider",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": ""
        }
    ];
    return AgentCost;
}());
exports.AgentCost = AgentCost;
//# sourceMappingURL=AgentCost.js.map