# .AgentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgent**](AgentsApi.md#createAgent) | **POST** /agents | Create Agent
[**deleteAgent**](AgentsApi.md#deleteAgent) | **DELETE** /agents/{id} | Delete Agent
[**getAgent**](AgentsApi.md#getAgent) | **GET** /agents/{id} | Get Agent
[**listAgents**](AgentsApi.md#listAgents) | **GET** /agents | List Agents
[**updateAgent**](AgentsApi.md#updateAgent) | **PATCH** /agents/{id} | Update Agent


# **createAgent**
> AgentResponse createAgent(agentConfiguration)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiCreateAgentRequest = {
  // AgentConfiguration
  agentConfiguration: null,
};

apiInstance.createAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentConfiguration** | **AgentConfiguration**|  |


### Return type

**AgentResponse**

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

# **deleteAgent**
> AgentResponse deleteAgent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiDeleteAgentRequest = {
  // string | The id of the agent.
  id: "id_example",
};

apiInstance.deleteAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the agent. | defaults to undefined


### Return type

**AgentResponse**

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

# **getAgent**
> AgentResponse getAgent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiGetAgentRequest = {
  // string | The id of the agent.
  id: "id_example",
};

apiInstance.getAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the agent. | defaults to undefined


### Return type

**AgentResponse**

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

# **listAgents**
> AgentPagination listAgents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiListAgentsRequest = {
  // Date | The date after which the agent was created. (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The date before which the agent was created. (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
  // number | The index of the page to return. (optional)
  index: 1,
  // number | The limit of items to return in the page. (optional)
  limit: 100,
};

apiInstance.listAgents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAfter** | [**Date**] | The date after which the agent was created. | (optional) defaults to undefined
 **createdBefore** | [**Date**] | The date before which the agent was created. | (optional) defaults to undefined
 **index** | [**number**] | The index of the page to return. | (optional) defaults to 1
 **limit** | [**number**] | The limit of items to return in the page. | (optional) defaults to 100


### Return type

**AgentPagination**

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

# **updateAgent**
> AgentResponse updateAgent(updateAgent)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiUpdateAgentRequest = {
  // string | The id of the agent.
  id: "id_example",
  // UpdateAgent
  updateAgent: null,
};

apiInstance.updateAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAgent** | **UpdateAgent**|  |
 **id** | [**string**] | The id of the agent. | defaults to undefined


### Return type

**AgentResponse**

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


