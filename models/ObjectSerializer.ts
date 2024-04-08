export * from '../models/Agent';
export * from '../models/AgentConfiguration';
export * from '../models/AgentCost';
export * from '../models/AgentLanguage';
export * from '../models/AgentPagination';
export * from '../models/AgentProvider';
export * from '../models/AgentResponse';
export * from '../models/AzureLanguages';
export * from '../models/AzureModel';
export * from '../models/AzureSynthesizer';
export * from '../models/AzureTranscriber';
export * from '../models/BuyPhoneNumber';
export * from '../models/CallCost';
export * from '../models/CallRecording';
export * from '../models/CallResponse';
export * from '../models/CallStatus';
export * from '../models/CallType';
export * from '../models/CallsPagination';
export * from '../models/ChatGPT';
export * from '../models/CreateCall';
export * from '../models/CreateCallResponse';
export * from '../models/Currency';
export * from '../models/DeepgramLanguages';
export * from '../models/DeepgramModel';
export * from '../models/DeepgramTranscriber';
export * from '../models/ElevenLabsModel';
export * from '../models/ElevenLabsSynthesizer';
export * from '../models/EndedReasons';
export * from '../models/Event';
export * from '../models/EventName';
export * from '../models/EventVariableName';
export * from '../models/HTTPValidationError';
export * from '../models/LanguageModelCost';
export * from '../models/Message';
export * from '../models/MessageRole';
export * from '../models/MethodEnum';
export * from '../models/OpenAI';
export * from '../models/OpenAIFunction';
export * from '../models/OpenAIFunctionParameter';
export * from '../models/OpenAIFunctionType';
export * from '../models/PhoneNumber';
export * from '../models/PhoneNumberPagination';
export * from '../models/PhoneNumberResponse';
export * from '../models/PhoneNumberToBuy';
export * from '../models/RimeSynthesizer';
export * from '../models/SynthesizerCost';
export * from '../models/TelephonyCost';
export * from '../models/Transcriber';
export * from '../models/Transcriber1';
export * from '../models/TranscriberCost';
export * from '../models/TwilioTelephony';
export * from '../models/UpdateAgent';
export * from '../models/UpdatePhoneNumber';
export * from '../models/ValidationError';
export * from '../models/ValidationErrorLocInner';
export * from '../models/Voice';
export * from '../models/Voice1';
export * from '../models/WakoApiModelsLanguageModelProvider';
export * from '../models/WakoApiModelsPhoneNumberProvider';
export * from '../models/WakoApiModelsSynthesizerProvider';
export * from '../models/WakoApiModelsTranscriberProvider';
export * from '../models/Webhook';

import { Agent               } from '../models/Agent';
import { AgentConfiguration          } from '../models/AgentConfiguration';
import { AgentCost     } from '../models/AgentCost';
import { AgentLanguage } from '../models/AgentLanguage';
import { AgentPagination } from '../models/AgentPagination';
import { AgentProvider } from '../models/AgentProvider';
import { AgentResponse               } from '../models/AgentResponse';
import { AzureLanguages } from '../models/AzureLanguages';
import { AzureModel } from '../models/AzureModel';
import { AzureSynthesizer, AzureSynthesizerProviderEnum      } from '../models/AzureSynthesizer';
import { AzureTranscriber, AzureTranscriberProviderEnum    } from '../models/AzureTranscriber';
import { BuyPhoneNumber, BuyPhoneNumberProviderEnum    } from '../models/BuyPhoneNumber';
import { CallCost        } from '../models/CallCost';
import { CallRecording } from '../models/CallRecording';
import { CallResponse               } from '../models/CallResponse';
import { CallStatus } from '../models/CallStatus';
import { CallType } from '../models/CallType';
import { CallsPagination } from '../models/CallsPagination';
import { ChatGPT } from '../models/ChatGPT';
import { CreateCall } from '../models/CreateCall';
import { CreateCallResponse } from '../models/CreateCallResponse';
import { Currency } from '../models/Currency';
import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramModel } from '../models/DeepgramModel';
import { DeepgramTranscriber, DeepgramTranscriberProviderEnum      } from '../models/DeepgramTranscriber';
import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { ElevenLabsSynthesizer, ElevenLabsSynthesizerProviderEnum     } from '../models/ElevenLabsSynthesizer';
import { EndedReasons } from '../models/EndedReasons';
import { Event } from '../models/Event';
import { EventName } from '../models/EventName';
import { EventVariableName } from '../models/EventVariableName';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LanguageModelCost      } from '../models/LanguageModelCost';
import { Message   } from '../models/Message';
import { MessageRole } from '../models/MessageRole';
import { MethodEnum } from '../models/MethodEnum';
import { OpenAI, OpenAIProviderEnum     } from '../models/OpenAI';
import { OpenAIFunction } from '../models/OpenAIFunction';
import { OpenAIFunctionParameter    } from '../models/OpenAIFunctionParameter';
import { OpenAIFunctionType } from '../models/OpenAIFunctionType';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy, PhoneNumberToBuyProviderEnum      } from '../models/PhoneNumberToBuy';
import { RimeSynthesizer, RimeSynthesizerProviderEnum      } from '../models/RimeSynthesizer';
import { SynthesizerCost     } from '../models/SynthesizerCost';
import { TelephonyCost     } from '../models/TelephonyCost';
import { Transcriber, TranscriberProviderEnum       } from '../models/Transcriber';
import { Transcriber1, Transcriber1ProviderEnum       } from '../models/Transcriber1';
import { TranscriberCost     } from '../models/TranscriberCost';
import { TwilioTelephony, TwilioTelephonyProviderEnum      } from '../models/TwilioTelephony';
import { UpdateAgent          } from '../models/UpdateAgent';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Voice, VoiceProviderEnum          } from '../models/Voice';
import { Voice1, Voice1ProviderEnum          } from '../models/Voice1';
import { WakoApiModelsLanguageModelProvider } from '../models/WakoApiModelsLanguageModelProvider';
import { WakoApiModelsPhoneNumberProvider } from '../models/WakoApiModelsPhoneNumberProvider';
import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
import { WakoApiModelsTranscriberProvider } from '../models/WakoApiModelsTranscriberProvider';
import { Webhook      } from '../models/Webhook';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
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

let typeMap: {[index: string]: any} = {
    "Agent": Agent,
    "AgentConfiguration": AgentConfiguration,
    "AgentCost": AgentCost,
    "AgentPagination": AgentPagination,
    "AgentResponse": AgentResponse,
    "AzureSynthesizer": AzureSynthesizer,
    "AzureTranscriber": AzureTranscriber,
    "BuyPhoneNumber": BuyPhoneNumber,
    "CallCost": CallCost,
    "CallRecording": CallRecording,
    "CallResponse": CallResponse,
    "CallsPagination": CallsPagination,
    "CreateCall": CreateCall,
    "CreateCallResponse": CreateCallResponse,
    "DeepgramTranscriber": DeepgramTranscriber,
    "ElevenLabsSynthesizer": ElevenLabsSynthesizer,
    "Event": Event,
    "HTTPValidationError": HTTPValidationError,
    "LanguageModelCost": LanguageModelCost,
    "Message": Message,
    "OpenAI": OpenAI,
    "OpenAIFunction": OpenAIFunction,
    "OpenAIFunctionParameter": OpenAIFunctionParameter,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberPagination": PhoneNumberPagination,
    "PhoneNumberResponse": PhoneNumberResponse,
    "PhoneNumberToBuy": PhoneNumberToBuy,
    "RimeSynthesizer": RimeSynthesizer,
    "SynthesizerCost": SynthesizerCost,
    "TelephonyCost": TelephonyCost,
    "Transcriber": Transcriber,
    "Transcriber1": Transcriber1,
    "TranscriberCost": TranscriberCost,
    "TwilioTelephony": TwilioTelephony,
    "UpdateAgent": UpdateAgent,
    "UpdatePhoneNumber": UpdatePhoneNumber,
    "ValidationError": ValidationError,
    "ValidationErrorLocInner": ValidationErrorLocInner,
    "Voice": Voice,
    "Voice1": Voice1,
    "Webhook": Webhook,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
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
    }
}
