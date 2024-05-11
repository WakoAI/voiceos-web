import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentCost } from '../models/AgentCost';
import { AgentPagination } from '../models/AgentPagination';
import { AgentProvider } from '../models/AgentProvider';
import { AgentResponse } from '../models/AgentResponse';
import { AzureLanguages } from '../models/AzureLanguages';
import { AzureModel } from '../models/AzureModel';
import { AzureTranscriber } from '../models/AzureTranscriber';
import { AzureTranscriberLanguagesInner } from '../models/AzureTranscriberLanguagesInner';
import { AzureVoice } from '../models/AzureVoice';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { ChatGPT } from '../models/ChatGPT';
import { ConversationCost } from '../models/ConversationCost';
import { ConversationRecording } from '../models/ConversationRecording';
import { ConversationResponse } from '../models/ConversationResponse';
import { ConversationStatus } from '../models/ConversationStatus';
import { ConversationType } from '../models/ConversationType';
import { ConversationsPagination } from '../models/ConversationsPagination';
import { CreateCall } from '../models/CreateCall';
import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramTranscriber } from '../models/DeepgramTranscriber';
import { DeepgramVoice } from '../models/DeepgramVoice';
import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { ElevenLabsVoices } from '../models/ElevenLabsVoices';
import { ElevenlabsVoice } from '../models/ElevenlabsVoice';
import { EndedReasons } from '../models/EndedReasons';
import { EventName } from '../models/EventName';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { Language } from '../models/Language';
import { LanguageModelCost } from '../models/LanguageModelCost';
import { Message } from '../models/Message';
import { MessageRole } from '../models/MessageRole';
import { MethodEnum } from '../models/MethodEnum';
import { Model } from '../models/Model';
import { Model1 } from '../models/Model1';
import { Model2 } from '../models/Model2';
import { Model3 } from '../models/Model3';
import { Model4 } from '../models/Model4';
import { OpenAI } from '../models/OpenAI';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberEvents } from '../models/PhoneNumberEvents';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy } from '../models/PhoneNumberToBuy';
import { PhoneNumberWebhook } from '../models/PhoneNumberWebhook';
import { PlayHTModel } from '../models/PlayHTModel';
import { PlayhtVoice } from '../models/PlayhtVoice';
import { RimeSpeaker } from '../models/RimeSpeaker';
import { RimeVoice } from '../models/RimeVoice';
import { Speaker } from '../models/Speaker';
import { TelephonyCost } from '../models/TelephonyCost';
import { Transcriber } from '../models/Transcriber';
import { Transcriber1 } from '../models/Transcriber1';
import { TranscriberCost } from '../models/TranscriberCost';
import { TwilioPhoneCall } from '../models/TwilioPhoneCall';
import { TwilioTelephony } from '../models/TwilioTelephony';
import { UpdateAgent } from '../models/UpdateAgent';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Voice } from '../models/Voice';
import { Voice1 } from '../models/Voice1';
import { VoiceCost } from '../models/VoiceCost';
import { VoiceId } from '../models/VoiceId';
import { WakoApiModelsLanguageModelProvider } from '../models/WakoApiModelsLanguageModelProvider';
import { WakoApiModelsPhoneNumberProvider } from '../models/WakoApiModelsPhoneNumberProvider';
import { WakoApiModelsSynthesizerDeepgramModel } from '../models/WakoApiModelsSynthesizerDeepgramModel';
import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
import { WakoApiModelsTranscriberDeepgramModel } from '../models/WakoApiModelsTranscriberDeepgramModel';
import { WakoApiModelsTranscriberProvider } from '../models/WakoApiModelsTranscriberProvider';
import { Webhook } from '../models/Webhook';

import { ObservableAgentsApi } from "./ObservableAPI";
import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";

export interface AgentsApiCreateAgentRequest {
    /**
     * 
     * @type AgentConfiguration
     * @memberof AgentsApicreateAgent
     */
    agentConfiguration: AgentConfiguration
}

export interface AgentsApiDeleteAgentRequest {
    /**
     * The id of the agent.
     * @type string
     * @memberof AgentsApideleteAgent
     */
    id: string
}

export interface AgentsApiGetAgentRequest {
    /**
     * The id of the agent.
     * @type string
     * @memberof AgentsApigetAgent
     */
    id: string
}

export interface AgentsApiListAgentsRequest {
    /**
     * The date after which the agent was created.
     * @type Date
     * @memberof AgentsApilistAgents
     */
    createdAfter?: Date
    /**
     * The date before which the agent was created.
     * @type Date
     * @memberof AgentsApilistAgents
     */
    createdBefore?: Date
    /**
     * The index of the page to return.
     * @type number
     * @memberof AgentsApilistAgents
     */
    index?: number
    /**
     * The limit of items to return in the page.
     * @type number
     * @memberof AgentsApilistAgents
     */
    limit?: number
}

export interface AgentsApiUpdateAgentRequest {
    /**
     * The id of the agent.
     * @type string
     * @memberof AgentsApiupdateAgent
     */
    id: string
    /**
     * 
     * @type UpdateAgent
     * @memberof AgentsApiupdateAgent
     */
    updateAgent: UpdateAgent
}

export class ObjectAgentsApi {
    private api: ObservableAgentsApi

    public constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Agent
     * @param param the request object
     */
    public createAgentWithHttpInfo(param: AgentsApiCreateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        return this.api.createAgentWithHttpInfo(param.agentConfiguration,  options).toPromise();
    }

    /**
     * Create Agent
     * @param param the request object
     */
    public createAgent(param: AgentsApiCreateAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.createAgent(param.agentConfiguration,  options).toPromise();
    }

    /**
     * Delete Agent
     * @param param the request object
     */
    public deleteAgentWithHttpInfo(param: AgentsApiDeleteAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        return this.api.deleteAgentWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete Agent
     * @param param the request object
     */
    public deleteAgent(param: AgentsApiDeleteAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.deleteAgent(param.id,  options).toPromise();
    }

    /**
     * Get Agent
     * @param param the request object
     */
    public getAgentWithHttpInfo(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        return this.api.getAgentWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Agent
     * @param param the request object
     */
    public getAgent(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.getAgent(param.id,  options).toPromise();
    }

    /**
     * List Agents
     * @param param the request object
     */
    public listAgentsWithHttpInfo(param: AgentsApiListAgentsRequest = {}, options?: Configuration): Promise<HttpInfo<AgentPagination>> {
        return this.api.listAgentsWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.limit,  options).toPromise();
    }

    /**
     * List Agents
     * @param param the request object
     */
    public listAgents(param: AgentsApiListAgentsRequest = {}, options?: Configuration): Promise<AgentPagination> {
        return this.api.listAgents(param.createdAfter, param.createdBefore, param.index, param.limit,  options).toPromise();
    }

    /**
     * Update Agent
     * @param param the request object
     */
    public updateAgentWithHttpInfo(param: AgentsApiUpdateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        return this.api.updateAgentWithHttpInfo(param.id, param.updateAgent,  options).toPromise();
    }

    /**
     * Update Agent
     * @param param the request object
     */
    public updateAgent(param: AgentsApiUpdateAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.updateAgent(param.id, param.updateAgent,  options).toPromise();
    }

}

import { ObservableConversationsApi } from "./ObservableAPI";
import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor} from "../apis/ConversationsApi";

export interface ConversationsApiCreatePhoneCallRequest {
    /**
     * 
     * @type CreateCall
     * @memberof ConversationsApicreatePhoneCall
     */
    createCall: CreateCall
}

export interface ConversationsApiGetAudioRecordingRequest {
    /**
     * The id of the conversation
     * @type string
     * @memberof ConversationsApigetAudioRecording
     */
    id: string
}

export interface ConversationsApiGetConversationRequest {
    /**
     * The id of the conversation.
     * @type string
     * @memberof ConversationsApigetConversation
     */
    id: string
}

export interface ConversationsApiListConversationsRequest {
    /**
     * The status of the conversations.
     * @type ConversationStatus
     * @memberof ConversationsApilistConversations
     */
    status?: ConversationStatus
    /**
     * The date before which the conversations were created.
     * @type Date
     * @memberof ConversationsApilistConversations
     */
    createdBefore?: Date
    /**
     * The date after which the conversations were created.
     * @type Date
     * @memberof ConversationsApilistConversations
     */
    createdAfter?: Date
    /**
     * The index of the page to return.
     * @type number
     * @memberof ConversationsApilistConversations
     */
    index?: number
    /**
     * The limit of items to return in the page.
     * @type number
     * @memberof ConversationsApilistConversations
     */
    limit?: number
}

export class ObjectConversationsApi {
    private api: ObservableConversationsApi

    public constructor(configuration: Configuration, requestFactory?: ConversationsApiRequestFactory, responseProcessor?: ConversationsApiResponseProcessor) {
        this.api = new ObservableConversationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Phone Call
     * @param param the request object
     */
    public createPhoneCallWithHttpInfo(param: ConversationsApiCreatePhoneCallRequest, options?: Configuration): Promise<HttpInfo<ConversationResponse>> {
        return this.api.createPhoneCallWithHttpInfo(param.createCall,  options).toPromise();
    }

    /**
     * Create Phone Call
     * @param param the request object
     */
    public createPhoneCall(param: ConversationsApiCreatePhoneCallRequest, options?: Configuration): Promise<ConversationResponse> {
        return this.api.createPhoneCall(param.createCall,  options).toPromise();
    }

    /**
     * Get Conversation Recording
     * @param param the request object
     */
    public getAudioRecordingWithHttpInfo(param: ConversationsApiGetAudioRecordingRequest, options?: Configuration): Promise<HttpInfo<ConversationRecording>> {
        return this.api.getAudioRecordingWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Conversation Recording
     * @param param the request object
     */
    public getAudioRecording(param: ConversationsApiGetAudioRecordingRequest, options?: Configuration): Promise<ConversationRecording> {
        return this.api.getAudioRecording(param.id,  options).toPromise();
    }

    /**
     * Get Conversation
     * @param param the request object
     */
    public getConversationWithHttpInfo(param: ConversationsApiGetConversationRequest, options?: Configuration): Promise<HttpInfo<ConversationResponse>> {
        return this.api.getConversationWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get Conversation
     * @param param the request object
     */
    public getConversation(param: ConversationsApiGetConversationRequest, options?: Configuration): Promise<ConversationResponse> {
        return this.api.getConversation(param.id,  options).toPromise();
    }

    /**
     * List Conversations
     * @param param the request object
     */
    public listConversationsWithHttpInfo(param: ConversationsApiListConversationsRequest = {}, options?: Configuration): Promise<HttpInfo<ConversationsPagination>> {
        return this.api.listConversationsWithHttpInfo(param.status, param.createdBefore, param.createdAfter, param.index, param.limit,  options).toPromise();
    }

    /**
     * List Conversations
     * @param param the request object
     */
    public listConversations(param: ConversationsApiListConversationsRequest = {}, options?: Configuration): Promise<ConversationsPagination> {
        return this.api.listConversations(param.status, param.createdBefore, param.createdAfter, param.index, param.limit,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiHealthCheckGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Health Check
     * @param param the request object
     */
    public healthCheckGetWithHttpInfo(param: DefaultApiHealthCheckGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.healthCheckGetWithHttpInfo( options).toPromise();
    }

    /**
     * Health Check
     * @param param the request object
     */
    public healthCheckGet(param: DefaultApiHealthCheckGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.healthCheckGet( options).toPromise();
    }

}

import { ObservablePhoneNumbersApi } from "./ObservableAPI";
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor} from "../apis/PhoneNumbersApi";

export interface PhoneNumbersApiAvailableNumbersToBuyRequest {
    /**
     * The digits that the phone number contains.
     * @type string
     * @memberof PhoneNumbersApiavailableNumbersToBuy
     */
    contains?: string
    /**
     * The number of available phone numbers to return.
     * @type number
     * @memberof PhoneNumbersApiavailableNumbersToBuy
     */
    limit?: number
}

export interface PhoneNumbersApiBuyPhoneNumberRequest {
    /**
     * 
     * @type BuyPhoneNumber
     * @memberof PhoneNumbersApibuyPhoneNumber
     */
    buyPhoneNumber: BuyPhoneNumber
}

export interface PhoneNumbersApiDeletePhoneNumberRequest {
    /**
     * The phone number including the country code.
     * @type string
     * @memberof PhoneNumbersApideletePhoneNumber
     */
    phoneNumber: string
    /**
     * 
     * @type boolean
     * @memberof PhoneNumbersApideletePhoneNumber
     */
    releasePhoneNumber?: boolean
}

export interface PhoneNumbersApiGetPhoneNumberRequest {
    /**
     * The phone number including the country code.
     * @type string
     * @memberof PhoneNumbersApigetPhoneNumber
     */
    phoneNumber: string
}

export interface PhoneNumbersApiListPhoneNumbersRequest {
    /**
     * The date the phone number was created after.
     * @type Date
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    createdAfter?: Date
    /**
     * The date the phone number was created before.
     * @type Date
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    createdBefore?: Date
    /**
     * The index of the page to return.
     * @type number
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    index?: number
    /**
     * The number of phone numbers to return in the page.
     * @type number
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    limit?: number
}

export interface PhoneNumbersApiUpdatePhoneNumberRequest {
    /**
     * The phone number including the country code.
     * @type string
     * @memberof PhoneNumbersApiupdatePhoneNumber
     */
    phoneNumber: string
    /**
     * 
     * @type UpdatePhoneNumber
     * @memberof PhoneNumbersApiupdatePhoneNumber
     */
    updatePhoneNumber: UpdatePhoneNumber
}

export class ObjectPhoneNumbersApi {
    private api: ObservablePhoneNumbersApi

    public constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor) {
        this.api = new ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Available Phone Numbers To Buy
     * @param param the request object
     */
    public availableNumbersToBuyWithHttpInfo(param: PhoneNumbersApiAvailableNumbersToBuyRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>> {
        return this.api.availableNumbersToBuyWithHttpInfo(param.contains, param.limit,  options).toPromise();
    }

    /**
     * Available Phone Numbers To Buy
     * @param param the request object
     */
    public availableNumbersToBuy(param: PhoneNumbersApiAvailableNumbersToBuyRequest = {}, options?: Configuration): Promise<Array<PhoneNumberToBuy>> {
        return this.api.availableNumbersToBuy(param.contains, param.limit,  options).toPromise();
    }

    /**
     * Buy Phone Number
     * @param param the request object
     */
    public buyPhoneNumberWithHttpInfo(param: PhoneNumbersApiBuyPhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        return this.api.buyPhoneNumberWithHttpInfo(param.buyPhoneNumber,  options).toPromise();
    }

    /**
     * Buy Phone Number
     * @param param the request object
     */
    public buyPhoneNumber(param: PhoneNumbersApiBuyPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.buyPhoneNumber(param.buyPhoneNumber,  options).toPromise();
    }

    /**
     * Delete Phone Number
     * @param param the request object
     */
    public deletePhoneNumberWithHttpInfo(param: PhoneNumbersApiDeletePhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumber>> {
        return this.api.deletePhoneNumberWithHttpInfo(param.phoneNumber, param.releasePhoneNumber,  options).toPromise();
    }

    /**
     * Delete Phone Number
     * @param param the request object
     */
    public deletePhoneNumber(param: PhoneNumbersApiDeletePhoneNumberRequest, options?: Configuration): Promise<PhoneNumber> {
        return this.api.deletePhoneNumber(param.phoneNumber, param.releasePhoneNumber,  options).toPromise();
    }

    /**
     * Get Phone Number
     * @param param the request object
     */
    public getPhoneNumberWithHttpInfo(param: PhoneNumbersApiGetPhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        return this.api.getPhoneNumberWithHttpInfo(param.phoneNumber,  options).toPromise();
    }

    /**
     * Get Phone Number
     * @param param the request object
     */
    public getPhoneNumber(param: PhoneNumbersApiGetPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.getPhoneNumber(param.phoneNumber,  options).toPromise();
    }

    /**
     * List Phone Numbers
     * @param param the request object
     */
    public listPhoneNumbersWithHttpInfo(param: PhoneNumbersApiListPhoneNumbersRequest = {}, options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>> {
        return this.api.listPhoneNumbersWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.limit,  options).toPromise();
    }

    /**
     * List Phone Numbers
     * @param param the request object
     */
    public listPhoneNumbers(param: PhoneNumbersApiListPhoneNumbersRequest = {}, options?: Configuration): Promise<PhoneNumberPagination> {
        return this.api.listPhoneNumbers(param.createdAfter, param.createdBefore, param.index, param.limit,  options).toPromise();
    }

    /**
     * Update Phone Number
     * @param param the request object
     */
    public updatePhoneNumberWithHttpInfo(param: PhoneNumbersApiUpdatePhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        return this.api.updatePhoneNumberWithHttpInfo(param.phoneNumber, param.updatePhoneNumber,  options).toPromise();
    }

    /**
     * Update Phone Number
     * @param param the request object
     */
    public updatePhoneNumber(param: PhoneNumbersApiUpdatePhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.updatePhoneNumber(param.phoneNumber, param.updatePhoneNumber,  options).toPromise();
    }

}
