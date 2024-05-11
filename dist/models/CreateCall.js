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
            "name": "fromNumber",
            "baseName": "from_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "toNumber",
            "baseName": "to_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "agentId",
            "baseName": "agent_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "agentConfig",
            "baseName": "agent_config",
            "type": "AgentConfiguration",
            "format": ""
        }
    ];
    return CreateCall;
}());
exports.CreateCall = CreateCall;
//# sourceMappingURL=CreateCall.js.map