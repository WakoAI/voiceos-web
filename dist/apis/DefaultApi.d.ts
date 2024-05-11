import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    healthCheckGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    healthCheckGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
}
