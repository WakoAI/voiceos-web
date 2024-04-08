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
__exportStar(require("../models/Agent"), exports);
__exportStar(require("../models/AgentConfiguration"), exports);
__exportStar(require("../models/AgentCost"), exports);
__exportStar(require("../models/AgentLanguage"), exports);
__exportStar(require("../models/AgentPagination"), exports);
__exportStar(require("../models/AgentProvider"), exports);
__exportStar(require("../models/AgentResponse"), exports);
__exportStar(require("../models/AzureLanguages"), exports);
__exportStar(require("../models/AzureModel"), exports);
__exportStar(require("../models/AzureSynthesizer"), exports);
__exportStar(require("../models/AzureTranscriber"), exports);
__exportStar(require("../models/BuyPhoneNumber"), exports);
__exportStar(require("../models/CallCost"), exports);
__exportStar(require("../models/CallRecording"), exports);
__exportStar(require("../models/CallResponse"), exports);
__exportStar(require("../models/CallStatus"), exports);
__exportStar(require("../models/CallType"), exports);
__exportStar(require("../models/CallsPagination"), exports);
__exportStar(require("../models/ChatGPT"), exports);
__exportStar(require("../models/CreateCall"), exports);
__exportStar(require("../models/CreateCallResponse"), exports);
__exportStar(require("../models/Currency"), exports);
__exportStar(require("../models/DeepgramLanguages"), exports);
__exportStar(require("../models/DeepgramModel"), exports);
__exportStar(require("../models/DeepgramTranscriber"), exports);
__exportStar(require("../models/ElevenLabsModel"), exports);
__exportStar(require("../models/ElevenLabsSynthesizer"), exports);
__exportStar(require("../models/EndedReasons"), exports);
__exportStar(require("../models/Event"), exports);
__exportStar(require("../models/EventName"), exports);
__exportStar(require("../models/EventVariableName"), exports);
__exportStar(require("../models/HTTPValidationError"), exports);
__exportStar(require("../models/LanguageModelCost"), exports);
__exportStar(require("../models/Message"), exports);
__exportStar(require("../models/MessageRole"), exports);
__exportStar(require("../models/MethodEnum"), exports);
__exportStar(require("../models/OpenAI"), exports);
__exportStar(require("../models/OpenAIFunction"), exports);
__exportStar(require("../models/OpenAIFunctionParameter"), exports);
__exportStar(require("../models/OpenAIFunctionType"), exports);
__exportStar(require("../models/PhoneNumber"), exports);
__exportStar(require("../models/PhoneNumberPagination"), exports);
__exportStar(require("../models/PhoneNumberResponse"), exports);
__exportStar(require("../models/PhoneNumberToBuy"), exports);
__exportStar(require("../models/RimeSynthesizer"), exports);
__exportStar(require("../models/SynthesizerCost"), exports);
__exportStar(require("../models/TelephonyCost"), exports);
__exportStar(require("../models/Transcriber"), exports);
__exportStar(require("../models/Transcriber1"), exports);
__exportStar(require("../models/TranscriberCost"), exports);
__exportStar(require("../models/TwilioTelephony"), exports);
__exportStar(require("../models/UpdateAgent"), exports);
__exportStar(require("../models/UpdatePhoneNumber"), exports);
__exportStar(require("../models/ValidationError"), exports);
__exportStar(require("../models/ValidationErrorLocInner"), exports);
__exportStar(require("../models/Voice"), exports);
__exportStar(require("../models/Voice1"), exports);
__exportStar(require("../models/WakoApiModelsLanguageModelProvider"), exports);
__exportStar(require("../models/WakoApiModelsPhoneNumberProvider"), exports);
__exportStar(require("../models/WakoApiModelsSynthesizerProvider"), exports);
__exportStar(require("../models/WakoApiModelsTranscriberProvider"), exports);
__exportStar(require("../models/Webhook"), exports);
var Agent_1 = require("../models/Agent");
var AgentConfiguration_1 = require("../models/AgentConfiguration");
var AgentCost_1 = require("../models/AgentCost");
var AgentPagination_1 = require("../models/AgentPagination");
var AgentResponse_1 = require("../models/AgentResponse");
var AzureSynthesizer_1 = require("../models/AzureSynthesizer");
var AzureTranscriber_1 = require("../models/AzureTranscriber");
var BuyPhoneNumber_1 = require("../models/BuyPhoneNumber");
var CallCost_1 = require("../models/CallCost");
var CallRecording_1 = require("../models/CallRecording");
var CallResponse_1 = require("../models/CallResponse");
var CallsPagination_1 = require("../models/CallsPagination");
var CreateCall_1 = require("../models/CreateCall");
var CreateCallResponse_1 = require("../models/CreateCallResponse");
var DeepgramTranscriber_1 = require("../models/DeepgramTranscriber");
var ElevenLabsSynthesizer_1 = require("../models/ElevenLabsSynthesizer");
var Event_1 = require("../models/Event");
var HTTPValidationError_1 = require("../models/HTTPValidationError");
var LanguageModelCost_1 = require("../models/LanguageModelCost");
var Message_1 = require("../models/Message");
var OpenAI_1 = require("../models/OpenAI");
var OpenAIFunction_1 = require("../models/OpenAIFunction");
var OpenAIFunctionParameter_1 = require("../models/OpenAIFunctionParameter");
var PhoneNumber_1 = require("../models/PhoneNumber");
var PhoneNumberPagination_1 = require("../models/PhoneNumberPagination");
var PhoneNumberResponse_1 = require("../models/PhoneNumberResponse");
var PhoneNumberToBuy_1 = require("../models/PhoneNumberToBuy");
var RimeSynthesizer_1 = require("../models/RimeSynthesizer");
var SynthesizerCost_1 = require("../models/SynthesizerCost");
var TelephonyCost_1 = require("../models/TelephonyCost");
var Transcriber_1 = require("../models/Transcriber");
var Transcriber1_1 = require("../models/Transcriber1");
var TranscriberCost_1 = require("../models/TranscriberCost");
var TwilioTelephony_1 = require("../models/TwilioTelephony");
var UpdateAgent_1 = require("../models/UpdateAgent");
var UpdatePhoneNumber_1 = require("../models/UpdatePhoneNumber");
var ValidationError_1 = require("../models/ValidationError");
var ValidationErrorLocInner_1 = require("../models/ValidationErrorLocInner");
var Voice_1 = require("../models/Voice");
var Voice1_1 = require("../models/Voice1");
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
    "AgentLanguage",
    "AgentProvider",
    "AzureLanguages",
    "AzureModel",
    "AzureSynthesizerProviderEnum",
    "AzureTranscriberProviderEnum",
    "BuyPhoneNumberProviderEnum",
    "CallStatus",
    "CallType",
    "ChatGPT",
    "Currency",
    "DeepgramLanguages",
    "DeepgramModel",
    "DeepgramTranscriberProviderEnum",
    "ElevenLabsModel",
    "ElevenLabsSynthesizerProviderEnum",
    "EndedReasons",
    "EventName",
    "EventVariableName",
    "MessageRole",
    "MethodEnum",
    "OpenAIProviderEnum",
    "OpenAIFunctionType",
    "PhoneNumberToBuyProviderEnum",
    "RimeSynthesizerProviderEnum",
    "TranscriberProviderEnum",
    "Transcriber1ProviderEnum",
    "TwilioTelephonyProviderEnum",
    "VoiceProviderEnum",
    "Voice1ProviderEnum",
    "WakoApiModelsLanguageModelProvider",
    "WakoApiModelsPhoneNumberProvider",
    "WakoApiModelsSynthesizerProvider",
    "WakoApiModelsTranscriberProvider",
]);
var typeMap = {
    "Agent": Agent_1.Agent,
    "AgentConfiguration": AgentConfiguration_1.AgentConfiguration,
    "AgentCost": AgentCost_1.AgentCost,
    "AgentPagination": AgentPagination_1.AgentPagination,
    "AgentResponse": AgentResponse_1.AgentResponse,
    "AzureSynthesizer": AzureSynthesizer_1.AzureSynthesizer,
    "AzureTranscriber": AzureTranscriber_1.AzureTranscriber,
    "BuyPhoneNumber": BuyPhoneNumber_1.BuyPhoneNumber,
    "CallCost": CallCost_1.CallCost,
    "CallRecording": CallRecording_1.CallRecording,
    "CallResponse": CallResponse_1.CallResponse,
    "CallsPagination": CallsPagination_1.CallsPagination,
    "CreateCall": CreateCall_1.CreateCall,
    "CreateCallResponse": CreateCallResponse_1.CreateCallResponse,
    "DeepgramTranscriber": DeepgramTranscriber_1.DeepgramTranscriber,
    "ElevenLabsSynthesizer": ElevenLabsSynthesizer_1.ElevenLabsSynthesizer,
    "Event": Event_1.Event,
    "HTTPValidationError": HTTPValidationError_1.HTTPValidationError,
    "LanguageModelCost": LanguageModelCost_1.LanguageModelCost,
    "Message": Message_1.Message,
    "OpenAI": OpenAI_1.OpenAI,
    "OpenAIFunction": OpenAIFunction_1.OpenAIFunction,
    "OpenAIFunctionParameter": OpenAIFunctionParameter_1.OpenAIFunctionParameter,
    "PhoneNumber": PhoneNumber_1.PhoneNumber,
    "PhoneNumberPagination": PhoneNumberPagination_1.PhoneNumberPagination,
    "PhoneNumberResponse": PhoneNumberResponse_1.PhoneNumberResponse,
    "PhoneNumberToBuy": PhoneNumberToBuy_1.PhoneNumberToBuy,
    "RimeSynthesizer": RimeSynthesizer_1.RimeSynthesizer,
    "SynthesizerCost": SynthesizerCost_1.SynthesizerCost,
    "TelephonyCost": TelephonyCost_1.TelephonyCost,
    "Transcriber": Transcriber_1.Transcriber,
    "Transcriber1": Transcriber1_1.Transcriber1,
    "TranscriberCost": TranscriberCost_1.TranscriberCost,
    "TwilioTelephony": TwilioTelephony_1.TwilioTelephony,
    "UpdateAgent": UpdateAgent_1.UpdateAgent,
    "UpdatePhoneNumber": UpdatePhoneNumber_1.UpdatePhoneNumber,
    "ValidationError": ValidationError_1.ValidationError,
    "ValidationErrorLocInner": ValidationErrorLocInner_1.ValidationErrorLocInner,
    "Voice": Voice_1.Voice,
    "Voice1": Voice1_1.Voice1,
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