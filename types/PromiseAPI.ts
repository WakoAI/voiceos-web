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
import { ObservableAgentsApi } from './ObservableAPI';

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";
export class PromiseAgentsApi {
    private api: ObservableAgentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Agent
     * @param agentConfiguration 
     */
    public createAgentWithHttpInfo(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.createAgentWithHttpInfo(agentConfiguration, _options);
        return result.toPromise();
    }

    /**
     * Create Agent
     * @param agentConfiguration 
     */
    public createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.createAgent(agentConfiguration, _options);
        return result.toPromise();
    }

    /**
     * Delete Agent
     * @param id The id of the agent.
     */
    public deleteAgentWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.deleteAgentWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete Agent
     * @param id The id of the agent.
     */
    public deleteAgent(id: string, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.deleteAgent(id, _options);
        return result.toPromise();
    }

    /**
     * Get Agent
     * @param id The id of the agent.
     */
    public getAgentWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.getAgentWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get Agent
     * @param id The id of the agent.
     */
    public getAgent(id: string, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.getAgent(id, _options);
        return result.toPromise();
    }

    /**
     * List Agents
     * @param createdAfter The date after which the agent was created.
     * @param createdBefore The date before which the agent was created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<AgentPagination>> {
        const result = this.api.listAgentsWithHttpInfo(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    }

    /**
     * List Agents
     * @param createdAfter The date after which the agent was created.
     * @param createdBefore The date before which the agent was created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<AgentPagination> {
        const result = this.api.listAgents(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    }

    /**
     * Update Agent
     * @param id The id of the agent.
     * @param updateAgent 
     */
    public updateAgentWithHttpInfo(id: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.updateAgentWithHttpInfo(id, updateAgent, _options);
        return result.toPromise();
    }

    /**
     * Update Agent
     * @param id The id of the agent.
     * @param updateAgent 
     */
    public updateAgent(id: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.updateAgent(id, updateAgent, _options);
        return result.toPromise();
    }


}



import { ObservableConversationsApi } from './ObservableAPI';

import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor} from "../apis/ConversationsApi";
export class PromiseConversationsApi {
    private api: ObservableConversationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConversationsApiRequestFactory,
        responseProcessor?: ConversationsApiResponseProcessor
    ) {
        this.api = new ObservableConversationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Phone Call
     * @param createCall 
     */
    public createPhoneCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Promise<HttpInfo<ConversationResponse>> {
        const result = this.api.createPhoneCallWithHttpInfo(createCall, _options);
        return result.toPromise();
    }

    /**
     * Create Phone Call
     * @param createCall 
     */
    public createPhoneCall(createCall: CreateCall, _options?: Configuration): Promise<ConversationResponse> {
        const result = this.api.createPhoneCall(createCall, _options);
        return result.toPromise();
    }

    /**
     * Get Conversation Recording
     * @param id The id of the conversation
     */
    public getAudioRecordingWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ConversationRecording>> {
        const result = this.api.getAudioRecordingWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get Conversation Recording
     * @param id The id of the conversation
     */
    public getAudioRecording(id: string, _options?: Configuration): Promise<ConversationRecording> {
        const result = this.api.getAudioRecording(id, _options);
        return result.toPromise();
    }

    /**
     * Get Conversation
     * @param id The id of the conversation.
     */
    public getConversationWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ConversationResponse>> {
        const result = this.api.getConversationWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get Conversation
     * @param id The id of the conversation.
     */
    public getConversation(id: string, _options?: Configuration): Promise<ConversationResponse> {
        const result = this.api.getConversation(id, _options);
        return result.toPromise();
    }

    /**
     * List Conversations
     * @param status The status of the conversations.
     * @param createdBefore The date before which the conversations were created.
     * @param createdAfter The date after which the conversations were created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listConversationsWithHttpInfo(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<ConversationsPagination>> {
        const result = this.api.listConversationsWithHttpInfo(status, createdBefore, createdAfter, index, limit, _options);
        return result.toPromise();
    }

    /**
     * List Conversations
     * @param status The status of the conversations.
     * @param createdBefore The date before which the conversations were created.
     * @param createdAfter The date after which the conversations were created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listConversations(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Promise<ConversationsPagination> {
        const result = this.api.listConversations(status, createdBefore, createdAfter, index, limit, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Health Check
     */
    public healthCheckGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.healthCheckGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Health Check
     */
    public healthCheckGet(_options?: Configuration): Promise<any> {
        const result = this.api.healthCheckGet(_options);
        return result.toPromise();
    }


}



import { ObservablePhoneNumbersApi } from './ObservableAPI';

import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor} from "../apis/PhoneNumbersApi";
export class PromisePhoneNumbersApi {
    private api: ObservablePhoneNumbersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneNumbersApiRequestFactory,
        responseProcessor?: PhoneNumbersApiResponseProcessor
    ) {
        this.api = new ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Available Phone Numbers To Buy
     * @param contains The digits that the phone number contains.
     * @param limit The number of available phone numbers to return.
     */
    public availableNumbersToBuyWithHttpInfo(contains?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>> {
        const result = this.api.availableNumbersToBuyWithHttpInfo(contains, limit, _options);
        return result.toPromise();
    }

    /**
     * Available Phone Numbers To Buy
     * @param contains The digits that the phone number contains.
     * @param limit The number of available phone numbers to return.
     */
    public availableNumbersToBuy(contains?: string, limit?: number, _options?: Configuration): Promise<Array<PhoneNumberToBuy>> {
        const result = this.api.availableNumbersToBuy(contains, limit, _options);
        return result.toPromise();
    }

    /**
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumberWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        const result = this.api.buyPhoneNumberWithHttpInfo(buyPhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumber(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.buyPhoneNumber(buyPhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Delete Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param releasePhoneNumber 
     */
    public deletePhoneNumberWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<HttpInfo<PhoneNumber>> {
        const result = this.api.deletePhoneNumberWithHttpInfo(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Delete Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param releasePhoneNumber 
     */
    public deletePhoneNumber(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<PhoneNumber> {
        const result = this.api.deletePhoneNumber(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Get Phone Number
     * @param phoneNumber The phone number including the country code.
     */
    public getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        const result = this.api.getPhoneNumberWithHttpInfo(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Get Phone Number
     * @param phoneNumber The phone number including the country code.
     */
    public getPhoneNumber(phoneNumber: string, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.getPhoneNumber(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * List Phone Numbers
     * @param createdAfter The date the phone number was created after.
     * @param createdBefore The date the phone number was created before.
     * @param index The index of the page to return.
     * @param limit The number of phone numbers to return in the page.
     */
    public listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>> {
        const result = this.api.listPhoneNumbersWithHttpInfo(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    }

    /**
     * List Phone Numbers
     * @param createdAfter The date the phone number was created after.
     * @param createdBefore The date the phone number was created before.
     * @param index The index of the page to return.
     * @param limit The number of phone numbers to return in the page.
     */
    public listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<PhoneNumberPagination> {
        const result = this.api.listPhoneNumbers(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    }

    /**
     * Update Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param updatePhoneNumber 
     */
    public updatePhoneNumberWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        const result = this.api.updatePhoneNumberWithHttpInfo(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Update Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param updatePhoneNumber 
     */
    public updatePhoneNumber(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.updatePhoneNumber(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    }


}



