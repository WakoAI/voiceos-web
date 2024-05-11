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
export declare class PromiseAgentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor);
    createAgentWithHttpInfo(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<AgentResponse>;
    deleteAgentWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    deleteAgent(id: string, _options?: Configuration): Promise<AgentResponse>;
    getAgentWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    getAgent(id: string, _options?: Configuration): Promise<AgentResponse>;
    listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<AgentPagination>>;
    listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<AgentPagination>;
    updateAgentWithHttpInfo(id: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<HttpInfo<AgentResponse>>;
    updateAgent(id: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<AgentResponse>;
}
import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor } from "../apis/ConversationsApi";
export declare class PromiseConversationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ConversationsApiRequestFactory, responseProcessor?: ConversationsApiResponseProcessor);
    createPhoneCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Promise<HttpInfo<ConversationResponse>>;
    createPhoneCall(createCall: CreateCall, _options?: Configuration): Promise<ConversationResponse>;
    getAudioRecordingWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ConversationRecording>>;
    getAudioRecording(id: string, _options?: Configuration): Promise<ConversationRecording>;
    getConversationWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ConversationResponse>>;
    getConversation(id: string, _options?: Configuration): Promise<ConversationResponse>;
    listConversationsWithHttpInfo(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<ConversationsPagination>>;
    listConversations(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Promise<ConversationsPagination>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    healthCheckGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>>;
    healthCheckGet(_options?: Configuration): Promise<any>;
}
import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor } from "../apis/PhoneNumbersApi";
export declare class PromisePhoneNumbersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PhoneNumbersApiRequestFactory, responseProcessor?: PhoneNumbersApiResponseProcessor);
    availableNumbersToBuyWithHttpInfo(contains?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<PhoneNumberToBuy>>>;
    availableNumbersToBuy(contains?: string, limit?: number, _options?: Configuration): Promise<Array<PhoneNumberToBuy>>;
    buyPhoneNumberWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    buyPhoneNumber(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse>;
    deletePhoneNumberWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<HttpInfo<PhoneNumber>>;
    deletePhoneNumber(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<PhoneNumber>;
    getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    getPhoneNumber(phoneNumber: string, _options?: Configuration): Promise<PhoneNumberResponse>;
    listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<PhoneNumberPagination>>;
    listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<PhoneNumberPagination>;
    updatePhoneNumberWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<HttpInfo<PhoneNumberResponse>>;
    updatePhoneNumber(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<PhoneNumberResponse>;
}
