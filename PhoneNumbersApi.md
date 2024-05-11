# .PhoneNumbersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableNumbersToBuy**](PhoneNumbersApi.md#availableNumbersToBuy) | **GET** /phone_numbers/buy | Available Phone Numbers To Buy
[**buyPhoneNumber**](PhoneNumbersApi.md#buyPhoneNumber) | **POST** /phone_numbers/buy | Buy Phone Number
[**deletePhoneNumber**](PhoneNumbersApi.md#deletePhoneNumber) | **DELETE** /phone_numbers/{phone_number} | Delete Phone Number
[**getPhoneNumber**](PhoneNumbersApi.md#getPhoneNumber) | **GET** /phone_numbers/{phone_number} | Get Phone Number
[**listPhoneNumbers**](PhoneNumbersApi.md#listPhoneNumbers) | **GET** /phone_numbers | List Phone Numbers
[**updatePhoneNumber**](PhoneNumbersApi.md#updatePhoneNumber) | **PATCH** /phone_numbers/{phone_number} | Update Phone Number


# **availableNumbersToBuy**
> Array<PhoneNumberToBuy> availableNumbersToBuy()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiAvailableNumbersToBuyRequest = {
  // string | The digits that the phone number contains. (optional)
  contains: "contains_example",
  // number | The number of available phone numbers to return. (optional)
  limit: 10,
};

apiInstance.availableNumbersToBuy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contains** | [**string**] | The digits that the phone number contains. | (optional) defaults to undefined
 **limit** | [**number**] | The number of available phone numbers to return. | (optional) defaults to 10


### Return type

**Array<PhoneNumberToBuy>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buyPhoneNumber**
> PhoneNumberResponse buyPhoneNumber(buyPhoneNumber)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiBuyPhoneNumberRequest = {
  // BuyPhoneNumber
  buyPhoneNumber: null,
};

apiInstance.buyPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyPhoneNumber** | **BuyPhoneNumber**|  |


### Return type

**PhoneNumberResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePhoneNumber**
> PhoneNumber deletePhoneNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiDeletePhoneNumberRequest = {
  // string | The phone number including the country code.
  phoneNumber: "phone_number_example",
  // boolean (optional)
  releasePhoneNumber: false,
};

apiInstance.deletePhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] | The phone number including the country code. | defaults to undefined
 **releasePhoneNumber** | [**boolean**] |  | (optional) defaults to false


### Return type

**PhoneNumber**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPhoneNumber**
> PhoneNumberResponse getPhoneNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiGetPhoneNumberRequest = {
  // string | The phone number including the country code.
  phoneNumber: "phone_number_example",
};

apiInstance.getPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] | The phone number including the country code. | defaults to undefined


### Return type

**PhoneNumberResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhoneNumbers**
> PhoneNumberPagination listPhoneNumbers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiListPhoneNumbersRequest = {
  // Date | The date the phone number was created after. (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date the phone number was created before. (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
  // number | The index of the page to return. (optional)
  index: 1,
  // number | The number of phone numbers to return in the page. (optional)
  limit: 100,
};

apiInstance.listPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | [**Date**] | The date the phone number was created after. | (optional) defaults to undefined
 **createdBefore** | [**Date**] | The date the phone number was created before. | (optional) defaults to undefined
 **index** | [**number**] | The index of the page to return. | (optional) defaults to 1
 **limit** | [**number**] | The number of phone numbers to return in the page. | (optional) defaults to 100


### Return type

**PhoneNumberPagination**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePhoneNumber**
> PhoneNumberResponse updatePhoneNumber(updatePhoneNumber)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiUpdatePhoneNumberRequest = {
  // string | The phone number including the country code.
  phoneNumber: "phone_number_example",
  // UpdatePhoneNumber
  updatePhoneNumber: null,
};

apiInstance.updatePhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePhoneNumber** | **UpdatePhoneNumber**|  |
 **phoneNumber** | [**string**] | The phone number including the country code. | defaults to undefined


### Return type

**PhoneNumberResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


