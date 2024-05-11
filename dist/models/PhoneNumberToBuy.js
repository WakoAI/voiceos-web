"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberToBuy = void 0;
var PhoneNumberToBuy = (function () {
    function PhoneNumberToBuy() {
    }
    PhoneNumberToBuy.getAttributeTypeMap = function () {
        return PhoneNumberToBuy.attributeTypeMap;
    };
    PhoneNumberToBuy.discriminator = undefined;
    PhoneNumberToBuy.attributeTypeMap = [
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
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "isoCountry",
            "baseName": "iso_country",
            "type": "string",
            "format": ""
        }
    ];
    return PhoneNumberToBuy;
}());
exports.PhoneNumberToBuy = PhoneNumberToBuy;
//# sourceMappingURL=PhoneNumberToBuy.js.map