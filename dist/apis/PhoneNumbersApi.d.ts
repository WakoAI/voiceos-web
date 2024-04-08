import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy } from '../models/PhoneNumberToBuy';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
export declare class PhoneNumbersApiRequestFactory extends BaseAPIRequestFactory {
    buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<RequestContext>;
    deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<RequestContext>;
    getPhoneNumber(phoneNumber: string, _options?: Configuration): Promise<RequestContext>;
    listAvailablePhoneNumbers(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Promise<RequestContext>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<RequestContext>;
}
export declare class PhoneNumbersApiResponseProcessor {
    buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberResponse>>;
    deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumber>>;
    getPhoneNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberResponse>>;
    listAvailablePhoneNumbersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PhoneNumberToBuy>>>;
    listPhoneNumbersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberPagination>>;
    updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberResponse>>;
}
