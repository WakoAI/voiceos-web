"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriberCost = void 0;
var TranscriberCost = (function () {
    function TranscriberCost() {
    }
    TranscriberCost.getAttributeTypeMap = function () {
        return TranscriberCost.attributeTypeMap;
    };
    TranscriberCost.discriminator = undefined;
    TranscriberCost.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsTranscriberProvider",
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
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "boolean",
            "format": ""
        }
    ];
    return TranscriberCost;
}());
exports.TranscriberCost = TranscriberCost;
//# sourceMappingURL=TranscriberCost.js.map