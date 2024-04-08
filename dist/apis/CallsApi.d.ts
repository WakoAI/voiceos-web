import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CallRecording } from '../models/CallRecording';
import { CallResponse } from '../models/CallResponse';
import { CallStatus } from '../models/CallStatus';
import { CallsPagination } from '../models/CallsPagination';
import { CreateCall } from '../models/CreateCall';
import { CreateCallResponse } from '../models/CreateCallResponse';
export declare class CallsApiRequestFactory extends BaseAPIRequestFactory {
    createCall(createCall: CreateCall, _options?: Configuration): Promise<RequestContext>;
    getCall(callId: string, _options?: Configuration): Promise<RequestContext>;
    getRecording(callId: string, _options?: Configuration): Promise<RequestContext>;
    listCalls(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class CallsApiResponseProcessor {
    createCallWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateCallResponse>>;
    getCallWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CallResponse>>;
    getRecordingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CallRecording>>;
    listCallsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CallsPagination>>;
}
