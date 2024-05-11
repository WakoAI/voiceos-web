import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentPagination } from '../models/AgentPagination';
import { AgentResponse } from '../models/AgentResponse';
import { UpdateAgent } from '../models/UpdateAgent';
export declare class AgentsApiRequestFactory extends BaseAPIRequestFactory {
    createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Promise<RequestContext>;
    deleteAgent(id: string, _options?: Configuration): Promise<RequestContext>;
    getAgent(id: string, _options?: Configuration): Promise<RequestContext>;
    listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
    updateAgent(id: string, updateAgent: UpdateAgent, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentsApiResponseProcessor {
    createAgentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgentResponse>>;
    deleteAgentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgentResponse>>;
    getAgentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgentResponse>>;
    listAgentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgentPagination>>;
    updateAgentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgentResponse>>;
}
