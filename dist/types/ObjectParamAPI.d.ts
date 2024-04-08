import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentPagination } from '../models/AgentPagination';
import { AgentResponse } from '../models/AgentResponse';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { CallRecording } from '../models/CallRecording';
import { CallResponse } from '../models/CallResponse';
import { CallStatus } from '../models/CallStatus';
import { CallsPagination } from '../models/CallsPagination';
import { CreateCall } from '../models/CreateCall';
import { CreateCallResponse } from '../models/CreateCallResponse';
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
    agentId: string;
}
export interface AgentsApiGetAgentRequest {
    agentId: string;
}
export interface AgentsApiListAgentsRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    index?: number;
    size?: number;
}
export interface AgentsApiUpdateAgentRequest {
    agentId: string;
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
import { CallsApiRequestFactory, CallsApiResponseProcessor } from "../apis/CallsApi";
export interface CallsApiCreateCallRequest {
    createCall: CreateCall;
}
export interface CallsApiGetCallRequest {
    callId: string;
}
export interface CallsApiGetRecordingRequest {
    callId: string;
}
export interface CallsApiListCallsRequest {
    status?: CallStatus;
    createdBefore?: Date;
    createdAfter?: Date;
    index?: number;
    size?: number;
}
export declare class ObjectCallsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CallsApiRequestFactory, responseProcessor?: CallsApiResponseProcessor);
    createCallWithHttpInfo(param: CallsApiCreateCallRequest, options?: Configuration): Promise<HttpInfo<CreateCallResponse>>;
    createCall(param: CallsApiCreateCallRequest, options?: Configuration): Promise<CreateCallResponse>;
    getCallWithHttpInfo(param: CallsApiGetCallRequest, options?: Configuration): Promise<HttpInfo<CallResponse>>;
    getCall(param: CallsApiGetCallRequest, options?: Configuration): Promise<CallResponse>;
    getRecordingWithHttpInfo(param: CallsApiGetRecordingRequest, options?: Configuration): Promise<HttpInfo<CallRecording>>;
    getRecording(param: CallsApiGetRecordingRequest, options?: Configuration): Promise<CallRecording>;
    listCallsWithHttpInfo(param?: CallsApiListCallsRequest, options?: Configuration): Promise<HttpInfo<CallsPagination>>;
    listCalls(param?: CallsApiListCallsRequest, options?: Configuration): Promise<CallsPagination>;
}
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor } from "../apis/PhoneNumbersApi";
export interface PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest {
    buyPhoneNumber: BuyPhoneNumber;
}
export interface PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest {
    phoneNumber: string;
    releasePhoneNumber?: boolean;
}
export interface PhoneNumbersApiGetPhoneNumberRequest {
    phoneNumber: string;
}
export interface PhoneNumbersApiListAvailablePhoneNumbersRequest {
    areaCode?: string;
    contains?: string;
    limit?: number;
}
export interface PhoneNumbersApiListPhoneNumbersRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    index?: number;
    size?: number;
}
export interface PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest {
    phoneNumber: string;
    updatePhoneNumber: UpdatePhoneNumber;
}
export declare class ObjectPhoneNumbersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor);
    buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(param: PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    buyPhoneNumberPhoneNumbersBuyPost(param: PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest, options?: Configuration): Promise<PhoneNumberResponse>;
    deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(param: PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest, options?: Configuration): Promise<HttpInfo<PhoneNumber>>;
    deletePhoneNumberPhoneNumbersPhoneNumberDelete(param: PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest, options?: Configuration): Promise<PhoneNumber>;
    getPhoneNumberWithHttpInfo(param: PhoneNumbersApiGetPhoneNumberRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    getPhoneNumber(param: PhoneNumbersApiGetPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberResponse>;
    listAvailablePhoneNumbersWithHttpInfo(param?: PhoneNumbersApiListAvailablePhoneNumbersRequest, options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>>;
    listAvailablePhoneNumbers(param?: PhoneNumbersApiListAvailablePhoneNumbersRequest, options?: Configuration): Promise<Array<PhoneNumberToBuy>>;
    listPhoneNumbersWithHttpInfo(param?: PhoneNumbersApiListPhoneNumbersRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>>;
    listPhoneNumbers(param?: PhoneNumbersApiListPhoneNumbersRequest, options?: Configuration): Promise<PhoneNumberPagination>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(param: PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest, options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatch(param: PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest, options?: Configuration): Promise<PhoneNumberResponse>;
}
