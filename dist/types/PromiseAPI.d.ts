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
export declare class PromiseAgentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor);
    createAgentWithHttpInfo(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<AgentResponse>;
    deleteAgentWithHttpInfo(agentId: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    deleteAgent(agentId: string, _options?: Configuration): Promise<AgentResponse>;
    getAgentWithHttpInfo(agentId: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    getAgent(agentId: string, _options?: Configuration): Promise<AgentResponse>;
    listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<HttpInfo<AgentPagination>>;
    listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<AgentPagination>;
    updateAgentWithHttpInfo(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    updateAgent(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<AgentResponse>;
}
import { CallsApiRequestFactory, CallsApiResponseProcessor } from "../apis/CallsApi";
export declare class PromiseCallsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CallsApiRequestFactory, responseProcessor?: CallsApiResponseProcessor);
    createCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Promise<HttpInfo<CreateCallResponse>>;
    createCall(createCall: CreateCall, _options?: Configuration): Promise<CreateCallResponse>;
    getCallWithHttpInfo(callId: string, _options?: Configuration): Promise<HttpInfo<CallResponse>>;
    getCall(callId: string, _options?: Configuration): Promise<CallResponse>;
    getRecordingWithHttpInfo(callId: string, _options?: Configuration): Promise<HttpInfo<CallRecording>>;
    getRecording(callId: string, _options?: Configuration): Promise<CallRecording>;
    listCallsWithHttpInfo(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Promise<HttpInfo<CallsPagination>>;
    listCalls(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Promise<CallsPagination>;
}
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor } from "../apis/PhoneNumbersApi";
export declare class PromisePhoneNumbersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor);
    buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse>;
    deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<HttpInfo<PhoneNumber>>;
    deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<PhoneNumber>;
    getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    getPhoneNumber(phoneNumber: string, _options?: Configuration): Promise<PhoneNumberResponse>;
    listAvailablePhoneNumbersWithHttpInfo(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>>;
    listAvailablePhoneNumbers(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Promise<Array<PhoneNumberToBuy>>;
    listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>>;
    listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<PhoneNumberPagination>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse>;
}
