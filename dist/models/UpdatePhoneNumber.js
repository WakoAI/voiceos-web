"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneNumber = void 0;
var UpdatePhoneNumber = (function () {
    function UpdatePhoneNumber() {
    }
    UpdatePhoneNumber.getAttributeTypeMap = function () {
        return UpdatePhoneNumber.attributeTypeMap;
    };
    UpdatePhoneNumber.discriminator = undefined;
    UpdatePhoneNumber.attributeTypeMap = [
        {
            "name": "inboundAgentId",
            "baseName": "inbound_agent_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "Array<PhoneNumberWebhook>",
            "format": ""
        }
    ];
    return UpdatePhoneNumber;
}());
exports.UpdatePhoneNumber = UpdatePhoneNumber;
//# sourceMappingURL=UpdatePhoneNumber.js.map