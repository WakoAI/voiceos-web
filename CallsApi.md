# .CallsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCall**](CallsApi.md#createCall) | **POST** /calls/create | Create Call
[**getCall**](CallsApi.md#getCall) | **GET** /calls/{call_id} | Get Call
[**getRecording**](CallsApi.md#getRecording) | **GET** /calls/{call_id}/recording | Get Call Recording
[**listCalls**](CallsApi.md#listCalls) | **GET** /calls | List Calls


# **createCall**
> CreateCallResponse createCall(createCall)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallsApi(configuration);

let body:.CallsApiCreateCallRequest = {
  // CreateCall
  createCall: null,
};

apiInstance.createCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCall** | **CreateCall**|  |


### Return type

**CreateCallResponse**

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

# **getCall**
> CallResponse getCall()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallsApi(configuration);

let body:.CallsApiGetCallRequest = {
  // string
  callId: "call_id_example",
};

apiInstance.getCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callId** | [**string**] |  | defaults to undefined


### Return type

**CallResponse**

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

# **getRecording**
> CallRecording getRecording()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallsApi(configuration);

let body:.CallsApiGetRecordingRequest = {
  // string
  callId: "call_id_example",
};

apiInstance.getRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callId** | [**string**] |  | defaults to undefined


### Return type

**CallRecording**

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

# **listCalls**
> CallsPagination listCalls()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallsApi(configuration);

let body:.CallsApiListCallsRequest = {
  // CallStatus (optional)
  status: "live",
  // Date (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  index: 1,
  // number (optional)
  size: 100,
};

apiInstance.listCalls(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **CallStatus** |  | (optional) defaults to undefined
 **createdBefore** | [**Date**] |  | (optional) defaults to undefined
 **createdAfter** | [**Date**] |  | (optional) defaults to undefined
 **index** | [**number**] |  | (optional) defaults to 1
 **size** | [**number**] |  | (optional) defaults to 100


### Return type

**CallsPagination**

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


