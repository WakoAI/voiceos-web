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
            "name": "event",
            "baseName": "event",
            "type": "Event",
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
            "type": "{ [key: string]: number; }",
            "format": ""
        }
    ];
    return Webhook;
}());
exports.Webhook = Webhook;
//# sourceMappingURL=Webhook.js.map