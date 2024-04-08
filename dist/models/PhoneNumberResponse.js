"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberResponse = void 0;
var PhoneNumberResponse = (function () {
    function PhoneNumberResponse() {
    }
    PhoneNumberResponse.getAttributeTypeMap = function () {
        return PhoneNumberResponse.attributeTypeMap;
    };
    PhoneNumberResponse.discriminator = undefined;
    PhoneNumberResponse.attributeTypeMap = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "inboundAgentUri",
            "baseName": "inbound_agent_uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "telephony",
            "baseName": "telephony",
            "type": "TwilioTelephony",
            "format": ""
        },
        {
            "name": "stripeSubscriptionId",
            "baseName": "stripe_subscription_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return PhoneNumberResponse;
}());
exports.PhoneNumberResponse = PhoneNumberResponse;
//# sourceMappingURL=PhoneNumberResponse.js.map