"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
var PhoneNumber = (function () {
    function PhoneNumber() {
    }
    PhoneNumber.getAttributeTypeMap = function () {
        return PhoneNumber.attributeTypeMap;
    };
    PhoneNumber.discriminator = undefined;
    PhoneNumber.attributeTypeMap = [
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
        }
    ];
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
//# sourceMappingURL=PhoneNumber.js.map