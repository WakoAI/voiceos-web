import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentPagination } from '../models/AgentPagination';
import { AgentResponse } from '../models/AgentResponse';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { ConversationRecording } from '../models/ConversationRecording';
import { ConversationResponse } from '../models/ConversationResponse';
import { ConversationStatus } from '../models/ConversationStatus';
import { ConversationsPagination } from '../models/ConversationsPagination';
import { CreateCall } from '../models/CreateCall';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy } from '../models/PhoneNumberToBuy';
import { UpdateAgent } from '../models/UpdateAgent';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
import { AgentsApiRequestFactory, AgentsApiResponseProcessor } from "../apis/AgentsApi";
export interface AgentsApiCreateAgentRequest {
    agentConfiguration: AgentConfiguration;
}
export interface AgentsApiDeleteAgentRequest {
    id: string;
}
export interface AgentsApiGetAgentRequest {
    id: string;
}
export interface AgentsApiListAgentsRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    index?: number;
    limit?: number;
}
export interface AgentsApiUpdateAgentRequest {
    id: string;
    updateAgent: UpdateAgent;
}
export declare class ObjectAgentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor);
    createAgentWithHttpInfo(param: AgentsApiCreateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    createAgent(param: AgentsApiCreateAgentRequest, options?: Configuration): Promise<AgentResponse>;
    deleteAgentWithHttpInfo(param: AgentsApiDeleteAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    deleteAgent(param: AgentsApiDeleteAgentRequest, options?: Configuration): Promise<AgentResponse>;
    getAgentWithHttpInfo(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    getAgent(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<AgentResponse>;
    listAgentsWithHttpInfo(param?: AgentsApiListAgentsRequest, options?: Configuration): Promise<HttpInfo<AgentPagination>>;
    listAgents(param?: AgentsApiListAgentsRequest, options?: Configuration): Promise<AgentPagination>;
    updateAgentWithHttpInfo(param: AgentsApiUpdateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    updateAgent(param: AgentsApiUpdateAgentRequest, options?: Configuration): Promise<AgentResponse>;
}
import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor } from "../apis/ConversationsApi";
export interface ConversationsApiCreatePhoneCallRequest {
    createCall: CreateCall;
}
export interface ConversationsApiGetAudioRecordingRequest {
    id: string;
}
export interface ConversationsApiGetConversationRequest {
    id: string;
}
export interface ConversationsApiListConversationsRequest {
    status?: ConversationStatus;
    createdBefore?: Date;
    createdAfter?: Date;
    index?: number;
    limit?: number;
}
export declare class ObjectConversationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ConversationsApiRequestFactory, responseProcessor?: ConversationsApiResponseProcessor);
    createPhoneCallWithHttpInfo(param: ConversationsApiCreatePhoneCallRequest, options?: Configuration): Promise<HttpInfo<ConversationResponse>>;
    createPhoneCall(param: ConversationsApiCreatePhoneCallRequest, options?: Configuration): Promise<ConversationResponse>;
    getAudioRecordingWithHttpInfo(param: ConversationsApiGetAudioRecordingRequest, options?: Configuration): Promise<HttpInfo<ConversationRecording>>;
    getAudioRecording(param: ConversationsApiGetAudioRecordingRequest, options?: Configuration): Promise<ConversationRecording>;
    getConversationWithHttpInfo(param: ConversationsApiGetConversationRequest, options?: Configuration): Promise<HttpInfo<ConversationResponse>>;
    getConversation(param: ConversationsApiGetConversationRequest, options?: Configuration): Promise<ConversationResponse>;
    listConversationsWithHttpInfo(param?: ConversationsApiListConversationsRequest, options?: Configuration): Promise<HttpInfo<ConversationsPagination>>;
    listConversations(param?: ConversationsApiListConversationsRequest, options?: Configuration): Promise<ConversationsPagination>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiHealthCheckGetRequest {
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    healthCheckGetWithHttpInfo(param?: DefaultApiHealthCheckGetRequest, options?: Configuration): Promise<HttpInfo<any>>;
    healthCheckGet(param?: DefaultApiHealthCheckGetRequest, options?: Configuration): Promise<any>;
}
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor } from "../apis/PhoneNumbersApi";
export interface PhoneNumbersApiAvailableNumbersToBuyRequest {
    contains?: string;
    limit?: number;
}
export interface PhoneNumbersApiBuyPhoneNumberRequest {
    buyPhoneNumber: BuyPhoneNumber;
}
export interface PhoneNumbersApiDeletePhoneNumberRequest {
    phoneNumber: string;
    releasePhoneNumber?: boolean;
}
export interface PhoneNumbersApiGetPhoneNumberRequest {
    phoneNumber: string;
}
export interface PhoneNumbersApiListPhoneNumbersRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    index?: number;
    limit?: number;
}
export interface PhoneNumbersApiUpdatePhoneNumberRequest {
    phoneNumber: string;
    updatePhoneNumber: UpdatePhoneNumber;
}
export declare class ObjectPhoneNumbersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor);
    availableNumbersToBuyWithHttpInfo(param?: PhoneNumbersApiAvailableNumbersToBuyRequest, options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>>;
    availableNumbersToBuy(param?: PhoneNumbersApiAvailableNumbersToBuyRequest, options?: Configuration): Promise<Array<PhoneNumberToBuy>>;
    buyPhoneNumberWithHttpInfo(param: PhoneNumbersApiBuyPhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    buyPhoneNumber(param: PhoneNumbersApiBuyPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse>;
    deletePhoneNumberWithHttpInfo(param: PhoneNumbersApiDeletePhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumber>>;
    deletePhoneNumber(param: PhoneNumbersApiDeletePhoneNumberRequest, options?: Configuration): Promise<PhoneNumber>;
    getPhoneNumberWithHttpInfo(param: PhoneNumbersApiGetPhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    getPhoneNumber(param: PhoneNumbersApiGetPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse>;
    listPhoneNumbersWithHttpInfo(param?: PhoneNumbersApiListPhoneNumbersRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>>;
    listPhoneNumbers(param?: PhoneNumbersApiListPhoneNumbersRequest, options?: Configuration): Promise<PhoneNumberPagination>;
    updatePhoneNumberWithHttpInfo(param: PhoneNumbersApiUpdatePhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    updatePhoneNumber(param: PhoneNumbersApiUpdatePhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse>;
}
