import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Agent } from '../models/Agent';
import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentCost } from '../models/AgentCost';
import { AgentLanguage } from '../models/AgentLanguage';
import { AgentPagination } from '../models/AgentPagination';
import { AgentProvider } from '../models/AgentProvider';
import { AgentResponse } from '../models/AgentResponse';
import { AzureLanguages } from '../models/AzureLanguages';
import { AzureModel } from '../models/AzureModel';
import { AzureSynthesizer } from '../models/AzureSynthesizer';
import { AzureTranscriber } from '../models/AzureTranscriber';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { CallCost } from '../models/CallCost';
import { CallRecording } from '../models/CallRecording';
import { CallResponse } from '../models/CallResponse';
import { CallStatus } from '../models/CallStatus';
import { CallType } from '../models/CallType';
import { CallsPagination } from '../models/CallsPagination';
import { ChatGPT } from '../models/ChatGPT';
import { CreateCall } from '../models/CreateCall';
import { CreateCallResponse } from '../models/CreateCallResponse';
import { Currency } from '../models/Currency';
import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramModel } from '../models/DeepgramModel';
import { DeepgramTranscriber } from '../models/DeepgramTranscriber';
import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { ElevenLabsSynthesizer } from '../models/ElevenLabsSynthesizer';
import { EndedReasons } from '../models/EndedReasons';
import { Event } from '../models/Event';
import { EventName } from '../models/EventName';
import { EventVariableName } from '../models/EventVariableName';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LanguageModelCost } from '../models/LanguageModelCost';
import { Message } from '../models/Message';
import { MessageRole } from '../models/MessageRole';
import { MethodEnum } from '../models/MethodEnum';
import { OpenAI } from '../models/OpenAI';
import { OpenAIFunction } from '../models/OpenAIFunction';
import { OpenAIFunctionParameter } from '../models/OpenAIFunctionParameter';
import { OpenAIFunctionType } from '../models/OpenAIFunctionType';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy } from '../models/PhoneNumberToBuy';
import { RimeSynthesizer } from '../models/RimeSynthesizer';
import { SynthesizerCost } from '../models/SynthesizerCost';
import { TelephonyCost } from '../models/TelephonyCost';
import { Transcriber } from '../models/Transcriber';
import { Transcriber1 } from '../models/Transcriber1';
import { TranscriberCost } from '../models/TranscriberCost';
import { TwilioTelephony } from '../models/TwilioTelephony';
import { UpdateAgent } from '../models/UpdateAgent';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Voice } from '../models/Voice';
import { Voice1 } from '../models/Voice1';
import { WakoApiModelsLanguageModelProvider } from '../models/WakoApiModelsLanguageModelProvider';
import { WakoApiModelsPhoneNumberProvider } from '../models/WakoApiModelsPhoneNumberProvider';
import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
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
     * @param agentId 
     */
    public deleteAgentWithHttpInfo(agentId: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.deleteAgentWithHttpInfo(agentId, _options);
        return result.toPromise();
    }

    /**
     * Delete Agent
     * @param agentId 
     */
    public deleteAgent(agentId: string, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.deleteAgent(agentId, _options);
        return result.toPromise();
    }

    /**
     * Get Agent
     * @param agentId 
     */
    public getAgentWithHttpInfo(agentId: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.getAgentWithHttpInfo(agentId, _options);
        return result.toPromise();
    }

    /**
     * Get Agent
     * @param agentId 
     */
    public getAgent(agentId: string, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.getAgent(agentId, _options);
        return result.toPromise();
    }

    /**
     * List Agents
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<HttpInfo<AgentPagination>> {
        const result = this.api.listAgentsWithHttpInfo(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    }

    /**
     * List Agents
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<AgentPagination> {
        const result = this.api.listAgents(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    }

    /**
     * Update Agent
     * @param agentId 
     * @param updateAgent 
     */
    public updateAgentWithHttpInfo(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        const result = this.api.updateAgentWithHttpInfo(agentId, updateAgent, _options);
        return result.toPromise();
    }

    /**
     * Update Agent
     * @param agentId 
     * @param updateAgent 
     */
    public updateAgent(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<AgentResponse> {
        const result = this.api.updateAgent(agentId, updateAgent, _options);
        return result.toPromise();
    }


}



import { ObservableCallsApi } from './ObservableAPI';

import { CallsApiRequestFactory, CallsApiResponseProcessor} from "../apis/CallsApi";
export class PromiseCallsApi {
    private api: ObservableCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallsApiRequestFactory,
        responseProcessor?: CallsApiResponseProcessor
    ) {
        this.api = new ObservableCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Call
     * @param createCall 
     */
    public createCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Promise<HttpInfo<CreateCallResponse>> {
        const result = this.api.createCallWithHttpInfo(createCall, _options);
        return result.toPromise();
    }

    /**
     * Create Call
     * @param createCall 
     */
    public createCall(createCall: CreateCall, _options?: Configuration): Promise<CreateCallResponse> {
        const result = this.api.createCall(createCall, _options);
        return result.toPromise();
    }

    /**
     * Get Call
     * @param callId 
     */
    public getCallWithHttpInfo(callId: string, _options?: Configuration): Promise<HttpInfo<CallResponse>> {
        const result = this.api.getCallWithHttpInfo(callId, _options);
        return result.toPromise();
    }

    /**
     * Get Call
     * @param callId 
     */
    public getCall(callId: string, _options?: Configuration): Promise<CallResponse> {
        const result = this.api.getCall(callId, _options);
        return result.toPromise();
    }

    /**
     * Get Call Recording
     * @param callId 
     */
    public getRecordingWithHttpInfo(callId: string, _options?: Configuration): Promise<HttpInfo<CallRecording>> {
        const result = this.api.getRecordingWithHttpInfo(callId, _options);
        return result.toPromise();
    }

    /**
     * Get Call Recording
     * @param callId 
     */
    public getRecording(callId: string, _options?: Configuration): Promise<CallRecording> {
        const result = this.api.getRecording(callId, _options);
        return result.toPromise();
    }

    /**
     * List Calls
     * @param status 
     * @param createdBefore 
     * @param createdAfter 
     * @param index 
     * @param size 
     */
    public listCallsWithHttpInfo(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Promise<HttpInfo<CallsPagination>> {
        const result = this.api.listCallsWithHttpInfo(status, createdBefore, createdAfter, index, size, _options);
        return result.toPromise();
    }

    /**
     * List Calls
     * @param status 
     * @param createdBefore 
     * @param createdAfter 
     * @param index 
     * @param size 
     */
    public listCalls(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Promise<CallsPagination> {
        const result = this.api.listCalls(status, createdBefore, createdAfter, index, size, _options);
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
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        const result = this.api.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Delete Phone Number
     * @param phoneNumber 
     * @param releasePhoneNumber 
     */
    public deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<HttpInfo<PhoneNumber>> {
        const result = this.api.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Delete Phone Number
     * @param phoneNumber 
     * @param releasePhoneNumber 
     */
    public deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<PhoneNumber> {
        const result = this.api.deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Get Phone Number
     * @param phoneNumber 
     */
    public getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        const result = this.api.getPhoneNumberWithHttpInfo(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Get Phone Number
     * @param phoneNumber 
     */
    public getPhoneNumber(phoneNumber: string, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.getPhoneNumber(phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * List Available Phone Numbers
     * @param areaCode 
     * @param contains 
     * @param limit 
     */
    public listAvailablePhoneNumbersWithHttpInfo(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>> {
        const result = this.api.listAvailablePhoneNumbersWithHttpInfo(areaCode, contains, limit, _options);
        return result.toPromise();
    }

    /**
     * List Available Phone Numbers
     * @param areaCode 
     * @param contains 
     * @param limit 
     */
    public listAvailablePhoneNumbers(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Promise<Array<PhoneNumberToBuy>> {
        const result = this.api.listAvailablePhoneNumbers(areaCode, contains, limit, _options);
        return result.toPromise();
    }

    /**
     * List Phone Numbers
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>> {
        const result = this.api.listPhoneNumbersWithHttpInfo(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    }

    /**
     * List Phone Numbers
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<PhoneNumberPagination> {
        const result = this.api.listPhoneNumbers(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    }

    /**
     * Update Phone Number
     * @param phoneNumber 
     * @param updatePhoneNumber 
     */
    public updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        const result = this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Update Phone Number
     * @param phoneNumber 
     * @param updatePhoneNumber 
     */
    public updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse> {
        const result = this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    }


}



