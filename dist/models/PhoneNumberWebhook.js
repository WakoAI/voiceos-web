"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberWebhook = void 0;
var PhoneNumberWebhook = (function () {
    function PhoneNumberWebhook() {
    }
    PhoneNumberWebhook.getAttributeTypeMap = function () {
        return PhoneNumberWebhook.attributeTypeMap;
    };
    PhoneNumberWebhook.discriminator = undefined;
    PhoneNumberWebhook.attributeTypeMap = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<PhoneNumberEvents>",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "MethodEnum",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string",
            "format": ""
        }
    ];
    return PhoneNumberWebhook;
}());
exports.PhoneNumberWebhook = PhoneNumberWebhook;
//# sourceMappingURL=PhoneNumberWebhook.js.map