import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableAgentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor);
    createAgentWithHttpInfo(agentConfiguration: AgentConfiguration, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Observable<AgentResponse>;
    deleteAgentWithHttpInfo(agentId: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    deleteAgent(agentId: string, _options?: Configuration): Observable<AgentResponse>;
    getAgentWithHttpInfo(agentId: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    getAgent(agentId: string, _options?: Configuration): Observable<AgentResponse>;
    listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<HttpInfo<AgentPagination>>;
    listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<AgentPagination>;
    updateAgentWithHttpInfo(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    updateAgent(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<AgentResponse>;
}
import { CallsApiRequestFactory, CallsApiResponseProcessor } from "../apis/CallsApi";
export declare class ObservableCallsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CallsApiRequestFactory, responseProcessor?: CallsApiResponseProcessor);
    createCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Observable<HttpInfo<CreateCallResponse>>;
    createCall(createCall: CreateCall, _options?: Configuration): Observable<CreateCallResponse>;
    getCallWithHttpInfo(callId: string, _options?: Configuration): Observable<HttpInfo<CallResponse>>;
    getCall(callId: string, _options?: Configuration): Observable<CallResponse>;
    getRecordingWithHttpInfo(callId: string, _options?: Configuration): Observable<HttpInfo<CallRecording>>;
    getRecording(callId: string, _options?: Configuration): Observable<CallRecording>;
    listCallsWithHttpInfo(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Observable<HttpInfo<CallsPagination>>;
    listCalls(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Observable<CallsPagination>;
}
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor } from "../apis/PhoneNumbersApi";
export declare class ObservablePhoneNumbersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor);
    buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>>;
    buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse>;
    deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<HttpInfo<PhoneNumber>>;
    deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<PhoneNumber>;
    getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>>;
    getPhoneNumber(phoneNumber: string, _options?: Configuration): Observable<PhoneNumberResponse>;
    listAvailablePhoneNumbersWithHttpInfo(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<PhoneNumberToBuy>>>;
    listAvailablePhoneNumbers(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Observable<Array<PhoneNumberToBuy>>;
    listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<HttpInfo<PhoneNumberPagination>>;
    listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<PhoneNumberPagination>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse>;
}