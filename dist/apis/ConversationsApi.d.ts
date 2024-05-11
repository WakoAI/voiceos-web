import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ConversationRecording } from '../models/ConversationRecording';
import { ConversationResponse } from '../models/ConversationResponse';
import { ConversationStatus } from '../models/ConversationStatus';
import { ConversationsPagination } from '../models/ConversationsPagination';
import { CreateCall } from '../models/CreateCall';
export declare class ConversationsApiRequestFactory extends BaseAPIRequestFactory {
    createPhoneCall(createCall: CreateCall, _options?: Configuration): Promise<RequestContext>;
    getAudioRecording(id: string, _options?: Configuration): Promise<RequestContext>;
    getConversation(id: string, _options?: Configuration): Promise<RequestContext>;
    listConversations(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class ConversationsApiResponseProcessor {
    createPhoneCallWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversationResponse>>;
    getAudioRecordingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversationRecording>>;
    getConversationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversationResponse>>;
    listConversationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversationsPagination>>;
}
