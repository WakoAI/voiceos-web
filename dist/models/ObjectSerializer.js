"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/AgentConfiguration"), exports);
__exportStar(require("../models/AgentCost"), exports);
__exportStar(require("../models/AgentPagination"), exports);
__exportStar(require("../models/AgentProvider"), exports);
__exportStar(require("../models/AgentResponse"), exports);
__exportStar(require("../models/AzureLanguages"), exports);
__exportStar(require("../models/AzureModel"), exports);
__exportStar(require("../models/AzureTranscriber"), exports);
__exportStar(require("../models/AzureTranscriberLanguagesInner"), exports);
__exportStar(require("../models/AzureVoice"), exports);
__exportStar(require("../models/BuyPhoneNumber"), exports);
__exportStar(require("../models/ChatGPT"), exports);
__exportStar(require("../models/ConversationCost"), exports);
__exportStar(require("../models/ConversationRecording"), exports);
__exportStar(require("../models/ConversationResponse"), exports);
__exportStar(require("../models/ConversationStatus"), exports);
__exportStar(require("../models/ConversationType"), exports);
__exportStar(require("../models/ConversationsPagination"), exports);
__exportStar(require("../models/CreateCall"), exports);
__exportStar(require("../models/DeepgramLanguages"), exports);
__exportStar(require("../models/DeepgramTranscriber"), exports);
__exportStar(require("../models/DeepgramVoice"), exports);
__exportStar(require("../models/ElevenLabsModel"), exports);
__exportStar(require("../models/ElevenLabsVoices"), exports);
__exportStar(require("../models/ElevenlabsVoice"), exports);
__exportStar(require("../models/EndedReasons"), exports);
__exportStar(require("../models/EventName"), exports);
__exportStar(require("../models/HTTPValidationError"), exports);
__exportStar(require("../models/Language"), exports);
__exportStar(require("../models/LanguageModelCost"), exports);
__exportStar(require("../models/Message"), exports);
__exportStar(require("../models/MessageRole"), exports);
__exportStar(require("../models/MethodEnum"), exports);
__exportStar(require("../models/Model"), exports);
__exportStar(require("../models/Model1"), exports);
__exportStar(require("../models/Model2"), exports);
__exportStar(require("../models/Model3"), exports);
__exportStar(require("../models/Model4"), exports);
__exportStar(require("../models/OpenAI"), exports);
__exportStar(require("../models/PhoneNumber"), exports);
__exportStar(require("../models/PhoneNumberEvents"), exports);
__exportStar(require("../models/PhoneNumberPagination"), exports);
__exportStar(require("../models/PhoneNumberResponse"), exports);
__exportStar(require("../models/PhoneNumberToBuy"), exports);
__exportStar(require("../models/PhoneNumberWebhook"), exports);
__exportStar(require("../models/PlayHTModel"), exports);
__exportStar(require("../models/PlayhtVoice"), exports);
__exportStar(require("../models/RimeSpeaker"), exports);
__exportStar(require("../models/RimeVoice"), exports);
__exportStar(require("../models/Speaker"), exports);
__exportStar(require("../models/TelephonyCost"), exports);
__exportStar(require("../models/Transcriber"), exports);
__exportStar(require("../models/Transcriber1"), exports);
__exportStar(require("../models/TranscriberCost"), exports);
__exportStar(require("../models/TwilioPhoneCall"), exports);
__exportStar(require("../models/TwilioTelephony"), exports);
__exportStar(require("../models/UpdateAgent"), exports);
__exportStar(require("../models/UpdatePhoneNumber"), exports);
__exportStar(require("../models/ValidationError"), exports);
__exportStar(require("../models/ValidationErrorLocInner"), exports);
__exportStar(require("../models/Voice"), exports);
__exportStar(require("../models/Voice1"), exports);
__exportStar(require("../models/VoiceCost"), exports);
__exportStar(require("../models/VoiceId"), exports);
__exportStar(require("../models/WakoApiModelsLanguageModelProvider"), exports);
__exportStar(require("../models/WakoApiModelsPhoneNumberProvider"), exports);
__exportStar(require("../models/WakoApiModelsSynthesizerDeepgramModel"), exports);
__exportStar(require("../models/WakoApiModelsSynthesizerProvider"), exports);
__exportStar(require("../models/WakoApiModelsTranscriberDeepgramModel"), exports);
__exportStar(require("../models/WakoApiModelsTranscriberProvider"), exports);
__exportStar(require("../models/Webhook"), exports);
var AgentConfiguration_1 = require("../models/AgentConfiguration");
var AgentCost_1 = require("../models/AgentCost");
var AgentPagination_1 = require("../models/AgentPagination");
var AgentResponse_1 = require("../models/AgentResponse");
var AzureTranscriber_1 = require("../models/AzureTranscriber");
var AzureTranscriberLanguagesInner_1 = require("../models/AzureTranscriberLanguagesInner");
var AzureVoice_1 = require("../models/AzureVoice");
var BuyPhoneNumber_1 = require("../models/BuyPhoneNumber");
var ConversationCost_1 = require("../models/ConversationCost");
var ConversationRecording_1 = require("../models/ConversationRecording");
var ConversationResponse_1 = require("../models/ConversationResponse");
var ConversationsPagination_1 = require("../models/ConversationsPagination");
var CreateCall_1 = require("../models/CreateCall");
var DeepgramTranscriber_1 = require("../models/DeepgramTranscriber");
var DeepgramVoice_1 = require("../models/DeepgramVoice");
var ElevenlabsVoice_1 = require("../models/ElevenlabsVoice");
var HTTPValidationError_1 = require("../models/HTTPValidationError");
var Language_1 = require("../models/Language");
var LanguageModelCost_1 = require("../models/LanguageModelCost");
var Message_1 = require("../models/Message");
var Model_1 = require("../models/Model");
var Model1_1 = require("../models/Model1");
var Model2_1 = require("../models/Model2");
var Model3_1 = require("../models/Model3");
var Model4_1 = require("../models/Model4");
var OpenAI_1 = require("../models/OpenAI");
var PhoneNumber_1 = require("../models/PhoneNumber");
var PhoneNumberPagination_1 = require("../models/PhoneNumberPagination");
var PhoneNumberResponse_1 = require("../models/PhoneNumberResponse");
var PhoneNumberToBuy_1 = require("../models/PhoneNumberToBuy");
var PhoneNumberWebhook_1 = require("../models/PhoneNumberWebhook");
var PlayhtVoice_1 = require("../models/PlayhtVoice");
var RimeVoice_1 = require("../models/RimeVoice");
var Speaker_1 = require("../models/Speaker");
var TelephonyCost_1 = require("../models/TelephonyCost");
var Transcriber_1 = require("../models/Transcriber");
var Transcriber1_1 = require("../models/Transcriber1");
var TranscriberCost_1 = require("../models/TranscriberCost");
var TwilioPhoneCall_1 = require("../models/TwilioPhoneCall");
var TwilioTelephony_1 = require("../models/TwilioTelephony");
var UpdateAgent_1 = require("../models/UpdateAgent");
var UpdatePhoneNumber_1 = require("../models/UpdatePhoneNumber");
var ValidationError_1 = require("../models/ValidationError");
var ValidationErrorLocInner_1 = require("../models/ValidationErrorLocInner");
var Voice_1 = require("../models/Voice");
var Voice1_1 = require("../models/Voice1");
var VoiceCost_1 = require("../models/VoiceCost");
var VoiceId_1 = require("../models/VoiceId");
var Webhook_1 = require("../models/Webhook");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = new Set([
    "AgentProvider",
    "AzureLanguages",
    "AzureModel",
    "AzureTranscriberProviderEnum",
    "AzureVoiceProviderEnum",
    "ChatGPT",
    "ConversationStatus",
    "ConversationType",
    "DeepgramLanguages",
    "DeepgramTranscriberProviderEnum",
    "DeepgramVoiceProviderEnum",
    "ElevenLabsModel",
    "ElevenLabsVoices",
    "ElevenlabsVoiceProviderEnum",
    "EndedReasons",
    "EventName",
    "MessageRole",
    "MethodEnum",
    "OpenAIProviderEnum",
    "PhoneNumberEvents",
    "PlayHTModel",
    "PlayhtVoiceProviderEnum",
    "RimeSpeaker",
    "RimeVoiceProviderEnum",
    "TranscriberProviderEnum",
    "Transcriber1ProviderEnum",
    "TwilioPhoneCallProviderEnum",
    "VoiceProviderEnum",
    "Voice1ProviderEnum",
    "WakoApiModelsLanguageModelProvider",
    "WakoApiModelsPhoneNumberProvider",
    "WakoApiModelsSynthesizerDeepgramModel",
    "WakoApiModelsSynthesizerProvider",
    "WakoApiModelsTranscriberDeepgramModel",
    "WakoApiModelsTranscriberProvider",
]);
var typeMap = {
    "AgentConfiguration": AgentConfiguration_1.AgentConfiguration,
    "AgentCost": AgentCost_1.AgentCost,
    "AgentPagination": AgentPagination_1.AgentPagination,
    "AgentResponse": AgentResponse_1.AgentResponse,
    "AzureTranscriber": AzureTranscriber_1.AzureTranscriber,
    "AzureTranscriberLanguagesInner": AzureTranscriberLanguagesInner_1.AzureTranscriberLanguagesInner,
    "AzureVoice": AzureVoice_1.AzureVoice,
    "BuyPhoneNumber": BuyPhoneNumber_1.BuyPhoneNumber,
    "ConversationCost": ConversationCost_1.ConversationCost,
    "ConversationRecording": ConversationRecording_1.ConversationRecording,
    "ConversationResponse": ConversationResponse_1.ConversationResponse,
    "ConversationsPagination": ConversationsPagination_1.ConversationsPagination,
    "CreateCall": CreateCall_1.CreateCall,
    "DeepgramTranscriber": DeepgramTranscriber_1.DeepgramTranscriber,
    "DeepgramVoice": DeepgramVoice_1.DeepgramVoice,
    "ElevenlabsVoice": ElevenlabsVoice_1.ElevenlabsVoice,
    "HTTPValidationError": HTTPValidationError_1.HTTPValidationError,
    "Language": Language_1.Language,
    "LanguageModelCost": LanguageModelCost_1.LanguageModelCost,
    "Message": Message_1.Message,
    "Model": Model_1.Model,
    "Model1": Model1_1.Model1,
    "Model2": Model2_1.Model2,
    "Model3": Model3_1.Model3,
    "Model4": Model4_1.Model4,
    "OpenAI": OpenAI_1.OpenAI,
    "PhoneNumber": PhoneNumber_1.PhoneNumber,
    "PhoneNumberPagination": PhoneNumberPagination_1.PhoneNumberPagination,
    "PhoneNumberResponse": PhoneNumberResponse_1.PhoneNumberResponse,
    "PhoneNumberToBuy": PhoneNumberToBuy_1.PhoneNumberToBuy,
    "PhoneNumberWebhook": PhoneNumberWebhook_1.PhoneNumberWebhook,
    "PlayhtVoice": PlayhtVoice_1.PlayhtVoice,
    "RimeVoice": RimeVoice_1.RimeVoice,
    "Speaker": Speaker_1.Speaker,
    "TelephonyCost": TelephonyCost_1.TelephonyCost,
    "Transcriber": Transcriber_1.Transcriber,
    "Transcriber1": Transcriber1_1.Transcriber1,
    "TranscriberCost": TranscriberCost_1.TranscriberCost,
    "TwilioPhoneCall": TwilioPhoneCall_1.TwilioPhoneCall,
    "TwilioTelephony": TwilioTelephony_1.TwilioTelephony,
    "UpdateAgent": UpdateAgent_1.UpdateAgent,
    "UpdatePhoneNumber": UpdatePhoneNumber_1.UpdatePhoneNumber,
    "ValidationError": ValidationError_1.ValidationError,
    "ValidationErrorLocInner": ValidationErrorLocInner_1.ValidationErrorLocInner,
    "Voice": Voice_1.Voice,
    "Voice1": Voice1_1.Voice1,
    "VoiceCost": VoiceCost_1.VoiceCost,
    "VoiceId": VoiceId_1.VoiceId,
    "Webhook": Webhook_1.Webhook,
};
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), type = _a[0], subtype = _a[1];
    return {
        type: type,
        subtype: subtype,
        subtypeTokens: subtype.split('+'),
    };
};
var mimeTypePredicateFactory = function (predicate) { return function (mimeType) { return predicate(parseMimeType(mimeType)); }; };
var mimeTypeSimplePredicateFactory = function (type, subtype) { return mimeTypePredicateFactory(function (descriptor) {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
}); };
var isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
var isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
var isJsonLikeMimeType = mimeTypePredicateFactory(function (descriptor) { return descriptor.type === 'application' && descriptor.subtypeTokens.some(function (item) { return item === 'json'; }); });
var isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
var isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
var supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (var _i = 0, supportedMimeTypePredicatesWithPriority_1 = supportedMimeTypePredicatesWithPriority; _i < supportedMimeTypePredicatesWithPriority_1.length; _i++) {
            var predicate = supportedMimeTypePredicatesWithPriority_1[_i];
            for (var _a = 0, normalMediaTypes_1 = normalMediaTypes; _a < normalMediaTypes_1.length; _a++) {
                var mediaType = normalMediaTypes_1[_a];
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map