"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberToBuyProviderEnum = exports.PhoneNumberToBuy = void 0;
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
            "type": "PhoneNumberToBuyProviderEnum",
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
var PhoneNumberToBuyProviderEnum;
(function (PhoneNumberToBuyProviderEnum) {
    PhoneNumberToBuyProviderEnum["Twilio"] = "twilio";
})(PhoneNumberToBuyProviderEnum = exports.PhoneNumberToBuyProviderEnum || (exports.PhoneNumberToBuyProviderEnum = {}));
//# sourceMappingURL=PhoneNumberToBuy.js.map