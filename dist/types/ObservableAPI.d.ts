import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableAgentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor);
    createAgentWithHttpInfo(agentConfiguration: AgentConfiguration, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Observable<AgentResponse>;
    deleteAgentWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    deleteAgent(id: string, _options?: Configuration): Observable<AgentResponse>;
    getAgentWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    getAgent(id: string, _options?: Configuration): Observable<AgentResponse>;
    listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<AgentPagination>>;
    listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<AgentPagination>;
    updateAgentWithHttpInfo(id: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<HttpInfo<AgentResponse>>;
    updateAgent(id: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<AgentResponse>;
}
import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor } from "../apis/ConversationsApi";
export declare class ObservableConversationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ConversationsApiRequestFactory, responseProcessor?: ConversationsApiResponseProcessor);
    createPhoneCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Observable<HttpInfo<ConversationResponse>>;
    createPhoneCall(createCall: CreateCall, _options?: Configuration): Observable<ConversationResponse>;
    getAudioRecordingWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ConversationRecording>>;
    getAudioRecording(id: string, _options?: Configuration): Observable<ConversationRecording>;
    getConversationWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ConversationResponse>>;
    getConversation(id: string, _options?: Configuration): Observable<ConversationResponse>;
    listConversationsWithHttpInfo(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<ConversationsPagination>>;
    listConversations(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Observable<ConversationsPagination>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class ObservableDefaultApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    healthCheckGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>>;
    healthCheckGet(_options?: Configuration): Observable<any>;
}
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor } from "../apis/PhoneNumbersApi";
export declare class ObservablePhoneNumbersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor);
    availableNumbersToBuyWithHttpInfo(contains?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<PhoneNumberToBuy>>>;
    availableNumbersToBuy(contains?: string, limit?: number, _options?: Configuration): Observable<Array<PhoneNumberToBuy>>;
    buyPhoneNumberWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>>;
    buyPhoneNumber(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse>;
    deletePhoneNumberWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<HttpInfo<PhoneNumber>>;
    deletePhoneNumber(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<PhoneNumber>;
    getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>>;
    getPhoneNumber(phoneNumber: string, _options?: Configuration): Observable<PhoneNumberResponse>;
    listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<PhoneNumberPagination>>;
    listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<PhoneNumberPagination>;
    updatePhoneNumberWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>>;
    updatePhoneNumber(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse>;
}
