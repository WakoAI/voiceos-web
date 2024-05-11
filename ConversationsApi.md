# .ConversationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPhoneCall**](ConversationsApi.md#createPhoneCall) | **POST** /conversations/create_phone_call | Create Phone Call
[**getAudioRecording**](ConversationsApi.md#getAudioRecording) | **GET** /conversations/{id}/recording | Get Conversation Recording
[**getConversation**](ConversationsApi.md#getConversation) | **GET** /conversations/{id} | Get Conversation
[**listConversations**](ConversationsApi.md#listConversations) | **GET** /conversations | List Conversations


# **createPhoneCall**
> ConversationResponse createPhoneCall(createCall)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversationsApi(configuration);

let body:.ConversationsApiCreatePhoneCallRequest = {
  // CreateCall
  createCall: null,
};

apiInstance.createPhoneCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCall** | **CreateCall**|  |


### Return type

**ConversationResponse**

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

# **getAudioRecording**
> ConversationRecording getAudioRecording()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversationsApi(configuration);

let body:.ConversationsApiGetAudioRecordingRequest = {
  // string | The id of the conversation
  id: "id_example",
};

apiInstance.getAudioRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the conversation | defaults to undefined


### Return type

**ConversationRecording**

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

# **getConversation**
> ConversationResponse getConversation()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversationsApi(configuration);

let body:.ConversationsApiGetConversationRequest = {
  // string | The id of the conversation.
  id: "id_example",
};

apiInstance.getConversation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the conversation. | defaults to undefined


### Return type

**ConversationResponse**

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

# **listConversations**
> ConversationsPagination listConversations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversationsApi(configuration);

let body:.ConversationsApiListConversationsRequest = {
  // ConversationStatus | The status of the conversations. (optional)
  status: null,
  // Date | The date before which the conversations were created. (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date after which the conversations were created. (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
  // number | The index of the page to return. (optional)
  index: 1,
  // number | The limit of items to return in the page. (optional)
  limit: 100,
};

apiInstance.listConversations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **ConversationStatus** | The status of the conversations. | (optional) defaults to undefined
 **createdBefore** | [**Date**] | The date before which the conversations were created. | (optional) defaults to undefined
 **createdAfter** | [**Date**] | The date after which the conversations were created. | (optional) defaults to undefined
 **index** | [**number**] | The index of the page to return. | (optional) defaults to 1
 **limit** | [**number**] | The limit of items to return in the page. | (optional) defaults to 100


### Return type

**ConversationsPagination**

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


