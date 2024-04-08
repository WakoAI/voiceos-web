# .AgentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgent**](AgentsApi.md#createAgent) | **POST** /agents | Create Agent
[**deleteAgent**](AgentsApi.md#deleteAgent) | **DELETE** /agents/{agent_id} | Delete Agent
[**getAgent**](AgentsApi.md#getAgent) | **GET** /agents/{agent_id} | Get Agent
[**listAgents**](AgentsApi.md#listAgents) | **GET** /agents | List Agents
[**updateAgent**](AgentsApi.md#updateAgent) | **PATCH** /agents/{agent_id} | Update Agent


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

# **deleteAgent**
> AgentResponse deleteAgent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiDeleteAgentRequest = {
  // string
  agentId: "agent_id_example",
};

apiInstance.deleteAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | [**string**] |  | defaults to undefined


### Return type

**AgentResponse**

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

# **getAgent**
> AgentResponse getAgent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiGetAgentRequest = {
  // string
  agentId: "agent_id_example",
};

apiInstance.getAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | [**string**] |  | defaults to undefined


### Return type

**AgentResponse**

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

# **listAgents**
> AgentPagination listAgents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiListAgentsRequest = {
  // Date (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  index: 1,
  // number (optional)
  size: 100,
};

apiInstance.listAgents(body).then((data:any) => {
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

**AgentPagination**

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

# **updateAgent**
> AgentResponse updateAgent(updateAgent)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiUpdateAgentRequest = {
  // string
  agentId: "agent_id_example",
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
 **agentId** | [**string**] |  | defaults to undefined


### Return type

**AgentResponse**

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


