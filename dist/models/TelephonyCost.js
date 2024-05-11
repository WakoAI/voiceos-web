"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelephonyCost = void 0;
var TelephonyCost = (function () {
    function TelephonyCost() {
    }
    TelephonyCost.getAttributeTypeMap = function () {
        return TelephonyCost.attributeTypeMap;
    };
    TelephonyCost.discriminator = undefined;
    TelephonyCost.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsPhoneNumberProvider",
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
    return TelephonyCost;
}());
exports.TelephonyCost = TelephonyCost;
//# sourceMappingURL=TelephonyCost.js.map