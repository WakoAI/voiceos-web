"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyPhoneNumber = void 0;
var BuyPhoneNumber = (function () {
    function BuyPhoneNumber() {
    }
    BuyPhoneNumber.getAttributeTypeMap = function () {
        return BuyPhoneNumber.attributeTypeMap;
    };
    BuyPhoneNumber.discriminator = undefined;
    BuyPhoneNumber.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsPhoneNumberProvider",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        }
    ];
    return BuyPhoneNumber;
}());
exports.BuyPhoneNumber = BuyPhoneNumber;
//# sourceMappingURL=BuyPhoneNumber.js.map