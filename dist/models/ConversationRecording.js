"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRecording = void 0;
var ConversationRecording = (function () {
    function ConversationRecording() {
    }
    ConversationRecording.getAttributeTypeMap = function () {
        return ConversationRecording.attributeTypeMap;
    };
    ConversationRecording.discriminator = undefined;
    ConversationRecording.attributeTypeMap = [
        {
            "name": "recordingUrl",
            "baseName": "recording_url",
            "type": "string",
            "format": ""
        }
    ];
    return ConversationRecording;
}());
exports.ConversationRecording = ConversationRecording;
//# sourceMappingURL=ConversationRecording.js.map