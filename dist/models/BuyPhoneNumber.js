"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyPhoneNumberProviderEnum = exports.BuyPhoneNumber = void 0;
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
            "type": "BuyPhoneNumberProviderEnum",
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
var BuyPhoneNumberProviderEnum;
(function (BuyPhoneNumberProviderEnum) {
    BuyPhoneNumberProviderEnum["Twilio"] = "twilio";
})(BuyPhoneNumberProviderEnum = exports.BuyPhoneNumberProviderEnum || (exports.BuyPhoneNumberProviderEnum = {}));
//# sourceMappingURL=BuyPhoneNumber.js.map