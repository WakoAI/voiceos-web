# .PhoneNumbersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buyPhoneNumberPhoneNumbersBuyPost**](PhoneNumbersApi.md#buyPhoneNumberPhoneNumbersBuyPost) | **POST** /phone_numbers/buy | Buy Phone Number
[**deletePhoneNumberPhoneNumbersPhoneNumberDelete**](PhoneNumbersApi.md#deletePhoneNumberPhoneNumbersPhoneNumberDelete) | **DELETE** /phone_numbers/{phone_number} | Delete Phone Number
[**getPhoneNumber**](PhoneNumbersApi.md#getPhoneNumber) | **GET** /phone_numbers/{phone_number} | Get Phone Number
[**listAvailablePhoneNumbers**](PhoneNumbersApi.md#listAvailablePhoneNumbers) | **GET** /phone_numbers/buy | List Available Phone Numbers
[**listPhoneNumbers**](PhoneNumbersApi.md#listPhoneNumbers) | **GET** /phone_numbers | List Phone Numbers
[**updatePhoneNumberPhoneNumbersPhoneNumberPatch**](PhoneNumbersApi.md#updatePhoneNumberPhoneNumbersPhoneNumberPatch) | **PATCH** /phone_numbers/{phone_number} | Update Phone Number


# **buyPhoneNumberPhoneNumbersBuyPost**
> PhoneNumberResponse buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiBuyPhoneNumberPhoneNumbersBuyPostRequest = {
  // BuyPhoneNumber
  buyPhoneNumber: null,
};

apiInstance.buyPhoneNumberPhoneNumbersBuyPost(body).then((data:any) => {
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

[APIKeyHeader](README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePhoneNumberPhoneNumbersPhoneNumberDelete**
> PhoneNumber deletePhoneNumberPhoneNumbersPhoneNumberDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiDeletePhoneNumberPhoneNumbersPhoneNumberDeleteRequest = {
  // string
  phoneNumber: "phone_number_example",
  // boolean (optional)
  releasePhoneNumber: false,
};

apiInstance.deletePhoneNumberPhoneNumbersPhoneNumberDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] |  | defaults to undefined
 **releasePhoneNumber** | [**boolean**] |  | (optional) defaults to false


### Return type

**PhoneNumber**

### Authorization

[APIKeyHeader](README.md#APIKeyHeader)

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
  // string
  phoneNumber: "phone_number_example",
};

apiInstance.getPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] |  | defaults to undefined


### Return type

**PhoneNumberResponse**

### Authorization

[APIKeyHeader](README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAvailablePhoneNumbers**
> Array<PhoneNumberToBuy> listAvailablePhoneNumbers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiListAvailablePhoneNumbersRequest = {
  // string (optional)
  areaCode: "area_code_example",
  // string (optional)
  contains: "contains_example",
  // number (optional)
  limit: 10,
};

apiInstance.listAvailablePhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **areaCode** | [**string**] |  | (optional) defaults to undefined
 **contains** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10


### Return type

**Array<PhoneNumberToBuy>**

### Authorization

[APIKeyHeader](README.md#APIKeyHeader)

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
  // Date (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  index: 1,
  // number (optional)
  size: 100,
};

apiInstance.listPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | [**Date**] |  | (optional) defaults to undefined
 **createdBefore** | [**Date**] |  | (optional) defaults to undefined
 **index** | [**number**] |  | (optional) defaults to 1
 **size** | [**number**] |  | (optional) defaults to 100


### Return type

**PhoneNumberPagination**

### Authorization

[APIKeyHeader](README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePhoneNumberPhoneNumbersPhoneNumberPatch**
> PhoneNumberResponse updatePhoneNumberPhoneNumbersPhoneNumberPatch(updatePhoneNumber)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumbersApi(configuration);

let body:.PhoneNumbersApiUpdatePhoneNumberPhoneNumbersPhoneNumberPatchRequest = {
  // string
  phoneNumber: "phone_number_example",
  // UpdatePhoneNumber
  updatePhoneNumber: null,
};

apiInstance.updatePhoneNumberPhoneNumbersPhoneNumberPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePhoneNumber** | **UpdatePhoneNumber**|  |
 **phoneNumber** | [**string**] |  | defaults to undefined


### Return type

**PhoneNumberResponse**

### Authorization

[APIKeyHeader](README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


