"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCall = void 0;
var CreateCall = (function () {
    function CreateCall() {
    }
    CreateCall.getAttributeTypeMap = function () {
        return CreateCall.attributeTypeMap;
    };
    CreateCall.discriminator = undefined;
    CreateCall.attributeTypeMap = [
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
        },
        {
            "name": "agent",
            "baseName": "agent",
            "type": "Agent",
            "format": ""
        }
    ];
    return CreateCall;
}());
exports.CreateCall = CreateCall;
//# sourceMappingURL=CreateCall.js.map