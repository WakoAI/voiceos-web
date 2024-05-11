"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioTelephony = void 0;
var TwilioTelephony = (function () {
    function TwilioTelephony() {
    }
    TwilioTelephony.getAttributeTypeMap = function () {
        return TwilioTelephony.attributeTypeMap;
    };
    TwilioTelephony.discriminator = undefined;
    TwilioTelephony.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "WakoApiModelsPhoneNumberProvider",
            "format": ""
        },
        {
            "name": "phoneNumberSid",
            "baseName": "phone_number_sid",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountSid",
            "baseName": "account_sid",
            "type": "string",
            "format": ""
        },
        {
            "name": "authToken",
            "baseName": "auth_token",
            "type": "string",
            "format": ""
        }
    ];
    return TwilioTelephony;
}());
exports.TwilioTelephony = TwilioTelephony;
//# sourceMappingURL=TwilioTelephony.js.map