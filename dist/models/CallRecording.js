"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallRecording = void 0;
var CallRecording = (function () {
    function CallRecording() {
    }
    CallRecording.getAttributeTypeMap = function () {
        return CallRecording.attributeTypeMap;
    };
    CallRecording.discriminator = undefined;
    CallRecording.attributeTypeMap = [
        {
            "name": "recordingUrl",
            "baseName": "recording_url",
            "type": "string",
            "format": ""
        }
    ];
    return CallRecording;
}());
exports.CallRecording = CallRecording;
//# sourceMappingURL=CallRecording.js.map