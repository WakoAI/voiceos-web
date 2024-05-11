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
    availableNumbersToBuy(contains?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    buyPhoneNumber(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Promise<RequestContext>;
    deletePhoneNumber(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Promise<RequestContext>;
    getPhoneNumber(phoneNumber: string, _options?: Configuration): Promise<RequestContext>;
    listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
    updatePhoneNumber(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Promise<RequestContext>;
}
export declare class PhoneNumbersApiResponseProcessor {
    availableNumbersToBuyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PhoneNumberToBuy>>>;
    buyPhoneNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberResponse>>;
    deletePhoneNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumber>>;
    getPhoneNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberResponse>>;
    listPhoneNumbersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberPagination>>;
    updatePhoneNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhoneNumberResponse>>;
}
