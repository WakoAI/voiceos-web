"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
var Webhook = (function () {
    function Webhook() {
    }
    Webhook.getAttributeTypeMap = function () {
        return Webhook.attributeTypeMap;
    };
    Webhook.discriminator = undefined;
    Webhook.attributeTypeMap = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<EventName>",
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
    return Webhook;
}());
exports.Webhook = Webhook;
//# sourceMappingURL=Webhook.js.map