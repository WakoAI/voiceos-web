"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioPhoneCallProviderEnum = exports.TwilioPhoneCall = void 0;
var TwilioPhoneCall = (function () {
    function TwilioPhoneCall() {
    }
    TwilioPhoneCall.getAttributeTypeMap = function () {
        return TwilioPhoneCall.attributeTypeMap;
    };
    TwilioPhoneCall.discriminator = undefined;
    TwilioPhoneCall.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "TwilioPhoneCallProviderEnum",
            "format": ""
        },
        {
            "name": "toNumber",
            "baseName": "to_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromNumber",
            "baseName": "from_number",
            "type": "string",
            "format": ""
        }
    ];
    return TwilioPhoneCall;
}());
exports.TwilioPhoneCall = TwilioPhoneCall;
var TwilioPhoneCallProviderEnum;
(function (TwilioPhoneCallProviderEnum) {
    TwilioPhoneCallProviderEnum["Twilio"] = "twilio";
})(TwilioPhoneCallProviderEnum = exports.TwilioPhoneCallProviderEnum || (exports.TwilioPhoneCallProviderEnum = {}));
//# sourceMappingURL=TwilioPhoneCall.js.map