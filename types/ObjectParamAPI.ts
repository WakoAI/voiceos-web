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
     * 
     * @type string
     * @memberof AgentsApideleteAgent
     */
    agentId: string
}

export interface AgentsApiGetAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentsApigetAgent
     */
    agentId: string
}

export interface AgentsApiListAgentsRequest {
    /**
     * 
     * @type Date
     * @memberof AgentsApilistAgents
     */
    createdAfter?: Date
    /**
     * 
     * @type Date
     * @memberof AgentsApilistAgents
     */
    createdBefore?: Date
    /**
     * 
     * @type number
     * @memberof AgentsApilistAgents
     */
    index?: number
    /**
     * 
     * @type number
     * @memberof AgentsApilistAgents
     */
    size?: number
}

export interface AgentsApiUpdateAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentsApiupdateAgent
     */
    agentId: string
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
        return this.api.deleteAgentWithHttpInfo(param.agentId,  options).toPromise();
    }

    /**
     * Delete Agent
     * @param param the request object
     */
    public deleteAgent(param: AgentsApiDeleteAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.deleteAgent(param.agentId,  options).toPromise();
    }

    /**
     * Get Agent
     * @param param the request object
     */
    public getAgentWithHttpInfo(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        return this.api.getAgentWithHttpInfo(param.agentId,  options).toPromise();
    }

    /**
     * Get Agent
     * @param param the request object
     */
    public getAgent(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.getAgent(param.agentId,  options).toPromise();
    }

    /**
     * List Agents
     * @param param the request object
     */
    public listAgentsWithHttpInfo(param: AgentsApiListAgentsRequest = {}, options?: Configuration): Promise<HttpInfo<AgentPagination>> {
        return this.api.listAgentsWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.size,  options).toPromise();
    }

    /**
     * List Agents
     * @param param the request object
     */
    public listAgents(param: AgentsApiListAgentsRequest = {}, options?: Configuration): Promise<AgentPagination> {
        return this.api.listAgents(param.createdAfter, param.createdBefore, param.index, param.size,  options).toPromise();
    }

    /**
     * Update Agent
     * @param param the request object
     */
    public updateAgentWithHttpInfo(param: AgentsApiUpdateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>> {
        return this.api.updateAgentWithHttpInfo(param.agentId, param.updateAgent,  options).toPromise();
    }

    /**
     * Update Agent
     * @param param the request object
     */
    public updateAgent(param: AgentsApiUpdateAgentRequest, options?: Configuration): Promise<AgentResponse> {
        return this.api.updateAgent(param.agentId, param.updateAgent,  options).toPromise();
    }

}

import { ObservableCallsApi } from "./ObservableAPI";
import { CallsApiRequestFactory, CallsApiResponseProcessor} from "../apis/CallsApi";

export interface CallsApiCreateCallRequest {
    /**
     * 
     * @type CreateCall
     * @memberof CallsApicreateCall
     */
    createCall: CreateCall
}

export interface CallsApiGetCallRequest {
    /**
     * 
     * @type string
     * @memberof CallsApigetCall
     */
    callId: string
}

export interface CallsApiGetRecordingRequest {
    /**
     * 
     * @type string
     * @memberof CallsApigetRecording
     */
    callId: string
}

export interface CallsApiListCallsRequest {
    /**
     * 
     * @type CallStatus
     * @memberof CallsApilistCalls
     */
    status?: CallStatus
    /**
     * 
     * @type Date
     * @memberof CallsApilistCalls
     */
    createdBefore?: Date
    /**
     * 
     * @type Date
     * @memberof CallsApilistCalls
     */
    createdAfter?: Date
    /**
     * 
     * @type number
     * @memberof CallsApilistCalls
     */
    index?: number
    /**
     * 
     * @type number
     * @memberof CallsApilistCalls
     */
    size?: number
}

export class ObjectCallsApi {
    private api: ObservableCallsApi

    public constructor(configuration: Configuration, requestFactory?: CallsApiRequestFactory, responseProcessor?: CallsApiResponseProcessor) {
        this.api = new ObservableCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Call
     * @param param the request object
     */
    public createCallWithHttpInfo(param: CallsApiCreateCallRequest, options?: Configuration): Promise<HttpInfo<CreateCallResponse>> {
        return this.api.createCallWithHttpInfo(param.createCall,  options).toPromise();
    }

    /**
     * Create Call
     * @param param the request object
     */
    public createCall(param: CallsApiCreateCallRequest, options?: Configuration): Promise<CreateCallResponse> {
        return this.api.createCall(param.createCall,  options).toPromise();
    }

    /**
     * Get Call
     * @param param the request object
     */
    public getCallWithHttpInfo(param: CallsApiGetCallRequest, options?: Configuration): Promise<HttpInfo<CallResponse>> {
        return this.api.getCallWithHttpInfo(param.callId,  options).toPromise();
    }

    /**
     * Get Call
     * @param param the request object
     */
    public getCall(param: CallsApiGetCallRequest, options?: Configuration): Promise<CallResponse> {
        return this.api.getCall(param.callId,  options).toPromise();
    }

    /**
     * Get Call Recording
     * @param param the request object
     */
    public getRecordingWithHttpInfo(param: CallsApiGetRecordingRequest, options?: Configuration): Promise<HttpInfo<CallRecording>> {
        return this.api.getRecordingWithHttpInfo(param.callId,  options).toPromise();
    }

    /**
     * Get Call Recording
     * @param param the request object
     */
    public getRecording(param: CallsApiGetRecordingRequest, options?: Configuration): Promise<CallRecording> {
        return this.api.getRecording(param.callId,  options).toPromise();
    }

    /**
     * List Calls
     * @param param the request object
     */
    public listCallsWithHttpInfo(param: CallsApiListCallsRequest = {}, options?: Configuration): Promise<HttpInfo<CallsPagination>> {
        return this.api.listCallsWithHttpInfo(param.status, param.createdBefore, param.createdAfter, param.index, param.size,  options).toPromise();
    }

    /**
     * List Calls
     * @param param the request object
     */
    public listCalls(param: CallsApiListCallsRequest = {}, options?: Configuration): Promise<CallsPagination> {
        return this.api.listCalls(param.status, param.createdBefore, param.createdAfter, param.index, param.size,  options).toPromise();
    }

}

import { ObservablePhoneNumbersApi } from "./ObservableAPI";
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor} from "../apis/PhoneNumbersApi";

export interface PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest {
    /**
     * 
     * @type BuyPhoneNumber
     * @memberof PhoneNumbersApibuyPhoneNumberPhoneNumbersBuyPost
     */
    buyPhoneNumber: BuyPhoneNumber
}

export interface PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumbersApideletePhoneNumberPhoneNumbersPhoneNumberDelete
     */
    phoneNumber: string
    /**
     * 
     * @type boolean
     * @memberof PhoneNumbersApideletePhoneNumberPhoneNumbersPhoneNumberDelete
     */
    releasePhoneNumber?: boolean
}

export interface PhoneNumbersApiGetPhoneNumberRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumbersApigetPhoneNumber
     */
    phoneNumber: string
}

export interface PhoneNumbersApiListAvailablePhoneNumbersRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumbersApilistAvailablePhoneNumbers
     */
    areaCode?: string
    /**
     * 
     * @type string
     * @memberof PhoneNumbersApilistAvailablePhoneNumbers
     */
    contains?: string
    /**
     * 
     * @type number
     * @memberof PhoneNumbersApilistAvailablePhoneNumbers
     */
    limit?: number
}

export interface PhoneNumbersApiListPhoneNumbersRequest {
    /**
     * 
     * @type Date
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    createdAfter?: Date
    /**
     * 
     * @type Date
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    createdBefore?: Date
    /**
     * 
     * @type number
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    index?: number
    /**
     * 
     * @type number
     * @memberof PhoneNumbersApilistPhoneNumbers
     */
    size?: number
}

export interface PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest {
    /**
     * 
     * @type string
     * @memberof PhoneNumbersApiupdatePhoneNumberPhoneNumbersPhoneNumberPatch
     */
    phoneNumber: string
    /**
     * 
     * @type UpdatePhoneNumber
     * @memberof PhoneNumbersApiupdatePhoneNumberPhoneNumbersPhoneNumberPatch
     */
    updatePhoneNumber: UpdatePhoneNumber
}

export class ObjectPhoneNumbersApi {
    private api: ObservablePhoneNumbersApi

    public constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor) {
        this.api = new ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Buy Phone Number
     * @param param the request object
     */
    public buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(param: PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        return this.api.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(param.buyPhoneNumber,  options).toPromise();
    }

    /**
     * Buy Phone Number
     * @param param the request object
     */
    public buyPhoneNumberPhoneNumbersBuyPost(param: PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.buyPhoneNumberPhoneNumbersBuyPost(param.buyPhoneNumber,  options).toPromise();
    }

    /**
     * Delete Phone Number
     * @param param the request object
     */
    public deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(param: PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest, options?: Configuration): Promise<HttpInfo<PhoneNumber>> {
        return this.api.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(param.phoneNumber, param.releasePhoneNumber,  options).toPromise();
    }

    /**
     * Delete Phone Number
     * @param param the request object
     */
    public deletePhoneNumberPhoneNumbersPhoneNumberDelete(param: PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest, options?: Configuration): Promise<PhoneNumber> {
        return this.api.deletePhoneNumberPhoneNumbersPhoneNumberDelete(param.phoneNumber, param.releasePhoneNumber,  options).toPromise();
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
     * List Available Phone Numbers
     * @param param the request object
     */
    public listAvailablePhoneNumbersWithHttpInfo(param: PhoneNumbersApiListAvailablePhoneNumbersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>> {
        return this.api.listAvailablePhoneNumbersWithHttpInfo(param.areaCode, param.contains, param.limit,  options).toPromise();
    }

    /**
     * List Available Phone Numbers
     * @param param the request object
     */
    public listAvailablePhoneNumbers(param: PhoneNumbersApiListAvailablePhoneNumbersRequest = {}, options?: Configuration): Promise<Array<PhoneNumberToBuy>> {
        return this.api.listAvailablePhoneNumbers(param.areaCode, param.contains, param.limit,  options).toPromise();
    }

    /**
     * List Phone Numbers
     * @param param the request object
     */
    public listPhoneNumbersWithHttpInfo(param: PhoneNumbersApiListPhoneNumbersRequest = {}, options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>> {
        return this.api.listPhoneNumbersWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.size,  options).toPromise();
    }

    /**
     * List Phone Numbers
     * @param param the request object
     */
    public listPhoneNumbers(param: PhoneNumbersApiListPhoneNumbersRequest = {}, options?: Configuration): Promise<PhoneNumberPagination> {
        return this.api.listPhoneNumbers(param.createdAfter, param.createdBefore, param.index, param.size,  options).toPromise();
    }

    /**
     * Update Phone Number
     * @param param the request object
     */
    public updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(param: PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>> {
        return this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(param.phoneNumber, param.updatePhoneNumber,  options).toPromise();
    }

    /**
     * Update Phone Number
     * @param param the request object
     */
    public updatePhoneNumberPhoneNumbersPhoneNumberPatch(param: PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest, options?: Configuration): Promise<PhoneNumberResponse> {
        return this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatch(param.phoneNumber, param.updatePhoneNumber,  options).toPromise();
    }

}
